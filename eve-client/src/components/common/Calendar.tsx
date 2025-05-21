import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface CalendarProps {
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
    onClose: () => void;
    visible: boolean;
    minDate?: Date; // Ngày tối thiểu có thể chọn
}

interface DayProps {
    day: number;
    month: number;
    year: number;
    isCurrentMonth: boolean;
    isPast: boolean;
    isToday: boolean;
    isSelected: boolean | null;  // Modified to accept boolean | null
    isBeforeMinDate: boolean; 
    onClick: () => void;
    lunarDay?: string;
    showLunar: boolean;
}

const Day: React.FC<DayProps> = ({
    day,
    month,
    year,
    isCurrentMonth,
    isPast,
    isToday,
    isSelected,
    isBeforeMinDate,
    onClick,
    lunarDay,
    showLunar
}) => {
    // Container styles
    let containerClasses = "h-10 flex flex-col items-center justify-center relative";

    if (!isPast && !isBeforeMinDate && !isToday && !isSelected) {
        containerClasses += " hover:bg-yellow-100 hover:rounded-full"; // Hover effect for future dates
    }

    // Main day number styles
    let dayClasses = "text-xs";

    if (isPast || isBeforeMinDate) {
        dayClasses += " text-gray-400"; // Past dates hoặc ngày trước minDate
    } else if (isToday) {
        dayClasses += " text-blue-500 font-bold"; // Today
    } else if (isSelected === true) {  // Modified to check explicitly for true
        dayClasses += " bg-blue-500 text-white px-2 py-0.5 rounded-full"; // Selected date
    } else {
        dayClasses += " text-gray-800"; // Future dates
    }

    if (!isCurrentMonth) {
        dayClasses += " opacity-50";  // Different month
    }    // Lunar day styles
    let lunarClasses = "text-[8px] mt-0.5";
    if (isPast || isBeforeMinDate) {
        lunarClasses += " text-gray-400";
    } else {
        lunarClasses += " text-gray-500";
    }

    return (
        <button
            className={containerClasses}
            onClick={onClick}
            disabled={isPast || isBeforeMinDate}
        >
            <span className={dayClasses}>{day}</span>
            {showLunar && lunarDay && (
                <span className={lunarClasses}>{lunarDay}</span>
            )}
        </button>
    );
};

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate, onClose, visible, minDate }) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [nextMonth, setNextMonth] = useState((today.getMonth() + 1) % 12);
    const [nextMonthYear, setNextMonthYear] = useState(today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear());
    const [showLunar, setShowLunar] = useState(true);
    
    // Kiểm tra xem một ngày có trước ngày tối thiểu không
    const isBeforeMinDate = (day: number, month: number, year: number): boolean => {
        if (!minDate) return false;
        
        const dateToCheck = new Date(year, month, day);
        const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
        
        return dateToCheck < minDateTime;
    };

    // Sample lunar days (in a real app, these would be calculated properly)
    const getLunarDay = (day: number): string => {
        // This is a placeholder - in a real app you'd use a proper lunar calendar calculation
        const lunarDays = ["1/1", "2/1", "3/1", "4/1", "5/1", "6/1", "7/1", "8/1", "9/1", "10/1", "11/1", "12/1", "13/1", "14/1", "15/1"];
        return day <= 15 ? lunarDays[day - 1] : `${day - 15}/2`;
    };

    const months = [
        "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
        "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
    ];

    const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

    const generateMonthDays = (month: number, year: number) => {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        const days = [];

        // Previous month days
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            const prevMonth = month === 0 ? 11 : month - 1;
            const prevMonthYear = month === 0 ? year - 1 : year;
            const day = daysInPrevMonth - i;
            days.push({
                day,
                month: prevMonth,
                year: prevMonthYear,
                isCurrentMonth: false,
                isPast: new Date(prevMonthYear, prevMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                isToday: false,
                isBeforeMinDate: isBeforeMinDate(day, prevMonth, prevMonthYear),
                isSelected: selectedDate ? (
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === prevMonth &&
                    selectedDate.getFullYear() === prevMonthYear
                ) : false,  // Use false when selectedDate is null
                lunarDay: getLunarDay(day)
            });
        }

        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            days.push({
                day,
                month,
                year,
                isCurrentMonth: true,
                isPast: date < new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                isToday,
                isBeforeMinDate: isBeforeMinDate(day, month, year),
                isSelected: selectedDate ? (
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === month &&
                    selectedDate.getFullYear() === year
                ) : false,  // Use false when selectedDate is null
                lunarDay: getLunarDay(day)
            });
        }

        // Next month days
        const totalDaysShown = 42; // 6 rows of 7 days
        const remainingDays = totalDaysShown - days.length;

        for (let day = 1; day <= remainingDays; day++) {
            const nextMonth = month === 11 ? 0 : month + 1;
            const nextMonthYear = month === 11 ? year + 1 : year;
            days.push({
                day,
                month: nextMonth,
                year: nextMonthYear,
                isCurrentMonth: false,
                isPast: false,
                isToday: false,
                isBeforeMinDate: isBeforeMinDate(day, nextMonth, nextMonthYear),
                isSelected: selectedDate ? (
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === nextMonth &&
                    selectedDate.getFullYear() === nextMonthYear
                ) : false,  // Use false when selectedDate is null
                lunarDay: getLunarDay(day)
            });
        }
        
        return days;
    };    
    
    const handleDateClick = (day: number, month: number, year: number) => {
        // Sử dụng requestAnimationFrame để đảm bảo UI được cập nhật trước khi đóng calendar
        requestAnimationFrame(() => {
            onSelectDate(new Date(year, month, day));
            // Đóng calendar sau khi chọn ngày
            onClose();
        });
    };

    const goToPreviousMonth = () => {
        const newCurrentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const newCurrentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        const newNextMonth = nextMonth === 0 ? 11 : nextMonth - 1;
        const newNextMonthYear = nextMonth === 0 ? nextMonthYear - 1 : nextMonthYear;

        setCurrentMonth(newCurrentMonth);
        setCurrentYear(newCurrentYear);
        setNextMonth(newNextMonth);
        setNextMonthYear(newNextMonthYear);
    };

    const goToNextMonth = () => {
        const newCurrentMonth = (currentMonth + 1) % 12;
        const newCurrentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        const newNextMonth = (nextMonth + 1) % 12;
        const newNextMonthYear = nextMonth === 11 ? nextMonthYear + 1 : nextMonthYear;

        setCurrentMonth(newCurrentMonth);
        setCurrentYear(newCurrentYear);
        setNextMonth(newNextMonth);
        setNextMonthYear(newNextMonthYear);
    };

    const currentMonthDays = generateMonthDays(currentMonth, currentYear);
    const nextMonthDays = generateMonthDays(nextMonth, nextMonthYear);
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };    if (!visible) return null;
    return (
        <motion.div
            className="bg-white rounded-lg overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => {
                // Ngăn sự kiện lan tỏa và capture
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
            style={{ pointerEvents: visible ? "auto" : "none" }}  // Chỉ cho phép tương tác khi visible
            tabIndex={visible ? 0 : -1}  // Chỉ cho phép focus khi visible
            aria-hidden={!visible}  // Đánh dấu hidden cho screen readers khi không visible
        >      <div className="flex items-center justify-between px-3 pt-3">
                <button
                    onClick={goToPreviousMonth}
                    className="p-1 text-gray-500 hover:bg-gray-100 rounded"
                >
                    <IoChevronBackOutline size={16} />
                </button>
                <div className="flex space-x-20 flex-grow justify-center">
                    <div className="text-center">
                        <h3 className="text-sm font-bold text-gray-800">{months[currentMonth]} {currentYear}</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm font-bold text-gray-800">{months[nextMonth]} {nextMonthYear}</h3>
                    </div>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={goToNextMonth}
                        className="p-1 text-gray-500 hover:bg-gray-100 rounded mr-1"
                    >
                        <IoChevronForwardOutline size={16} />
                    </button>                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Ngăn sự kiện lan tỏa
                        e.preventDefault(); // Ngăn hành vi mặc định
                        requestAnimationFrame(() => onClose()); // Đóng calendar trong animation frame tiếp theo
                    }}
                    className="p-1 text-gray-500 hover:bg-gray-100 rounded"
                    title="Đóng"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
            </div>

            <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Month */}
                <div>          
                    <div className="grid grid-cols-7 gap-0.5">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="text-center text-xs font-medium text-gray-600 py-0.5">
                            {day}
                        </div>
                    ))}                    {currentMonthDays.map((day, index) => (
                        <Day
                            key={index}
                            day={day.day}
                            month={day.month}
                            year={day.year}
                            isCurrentMonth={day.isCurrentMonth}
                            isPast={day.isPast}
                            isToday={day.isToday}
                            isSelected={day.isSelected}
                            isBeforeMinDate={day.isBeforeMinDate}
                            onClick={() => handleDateClick(day.day, day.month, day.year)}
                            lunarDay={day.lunarDay}
                            showLunar={showLunar}
                        />
                    ))}
                </div>
                </div>
                {/* Second Month */}
                <div>          <div className="grid grid-cols-7 gap-0.5">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="text-center text-xs font-medium text-gray-600 py-0.5">
                            {day}
                        </div>
                    ))}                    {nextMonthDays.map((day, index) => (
                        <Day
                            key={index}
                            day={day.day}
                            month={day.month}
                            year={day.year}
                            isCurrentMonth={day.isCurrentMonth}
                            isPast={day.isPast}
                            isToday={day.isToday}
                            isSelected={day.isSelected}
                            isBeforeMinDate={day.isBeforeMinDate}
                            onClick={() => handleDateClick(day.day, day.month, day.year)}
                            lunarDay={day.lunarDay}
                            showLunar={showLunar}
                        />
                    ))}
                </div>
                </div>
            </div>
            {/* Calendar footer */}
            <div className="border-t border-gray-200 p-2 flex items-center justify-between">
                <div className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={showLunar}
                            onChange={() => setShowLunar(!showLunar)}
                            className="sr-only peer"
                        />
                        <div className="relative w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                        <span className="ms-2 text-xs font-medium text-gray-600">Hiển thị lịch âm</span>
                    </label>
                </div>
            </div>
        </motion.div>
    );
};

export default Calendar;
