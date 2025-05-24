import React from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaPlus } from 'react-icons/fa';
import { MdLocationOn, MdCalendarToday } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface SearchFormProps {
    searchForm: {
        from: string;
        to: string;
        date: string;
    };
    setSearchForm: (data: any) => void;
    selectedDate: Date;
    selectedReturnDate: Date | null;
    formatDate: (date: Date | null) => string;
    getDayOfWeek: (date: Date) => string;
    setIsCalendarVisible: (isVisible: boolean) => void;
    setIsReturnCalendarVisible: (isVisible: boolean) => void;
    isCalendarVisible: boolean;
    isReturnCalendarVisible: boolean;
    closeCalendar: () => void;
    closeReturnCalendar: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
    searchForm,
    setSearchForm,
    selectedDate,
    selectedReturnDate,
    formatDate,
    getDayOfWeek,
    setIsCalendarVisible, setIsReturnCalendarVisible,
    isCalendarVisible,
    isReturnCalendarVisible,
    closeCalendar,
    closeReturnCalendar
}) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap gap-2 items-center p-4">
            {/* From field */}
            <div className="flex-1 min-w-[200px] h-[72px] bg-gray-100 rounded-lg p-4 flex items-center">
                <div className="text-blue-500 mr-3">
                    <MdLocationOn className="h-6 w-6" />
                </div>
                <div className="flex-1">
                    <div className="text-xs text-gray-500">Nơi xuất phát</div>
                    <div className="font-medium text-gray-800">{searchForm.from}</div>
                </div>
            </div>

            {/* Switch direction button */}
            <div className="hidden md:flex items-center justify-center">
                <button
                    onClick={() => setSearchForm({
                        from: searchForm.to,
                        to: searchForm.from
                    })}
                    className="bg-white rounded-full p-2 shadow-md text-gray-500"
                >
                    <FaExchangeAlt className="h-4 w-4" />
                </button>
            </div>

            {/* To field */}
            <div className="flex-1 min-w-[200px] h-[72px] bg-gray-100 rounded-lg p-4 flex items-center">
                <div className="text-red-500 mr-3">
                    <MdLocationOn className="h-6 w-6" />
                </div>
                <div className="flex-1">
                    <div className="text-xs text-gray-500">Nơi đến</div>
                    <div className="font-medium text-gray-800">{searchForm.to}</div>
                </div>
            </div>

            {/* Date field */}
            <div className="flex-1 min-w-[200px] h-[72px] bg-gray-100 rounded-lg p-4 flex items-center relative">
                <div className="text-blue-500 mr-3">
                    <MdCalendarToday className="h-5 w-5" />
                </div>
                <div
                    className="flex-1 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();

                        if (isCalendarVisible) {
                            closeCalendar();
                        } else {
                            requestAnimationFrame(() => setIsCalendarVisible(true));
                        }
                    }}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={isCalendarVisible}
                >
                    <div className="text-xs text-gray-500 border-b-2 border-blue-500 inline-block pb-1">Ngày đi</div>
                    <div className="font-medium text-gray-800">
                        {getDayOfWeek(selectedDate)}, {formatDate(selectedDate)}
                    </div>
                </div>
            </div>

            {/* Return date field - shown if selectedReturnDate exists */}
            {selectedReturnDate ? (
                <div className="flex-1 min-w-[200px] h-[72px] bg-gray-100 rounded-lg p-4 flex items-center relative">
                    <div className="text-green-500 mr-3">
                        <MdCalendarToday className="h-5 w-5" />
                    </div>
                    <div
                        className="flex-1 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();

                            if (isReturnCalendarVisible) {
                                closeReturnCalendar();
                            } else {
                                requestAnimationFrame(() => setIsReturnCalendarVisible(true));
                            }
                        }}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={isReturnCalendarVisible}
                    >
                        <div className="text-xs text-gray-500 border-b-2 border-green-500 inline-block pb-1">Ngày về</div>
                        <div className="font-medium text-gray-800">
                            {getDayOfWeek(selectedReturnDate)}, {formatDate(selectedReturnDate)}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center h-[72px] mr-auto ml-4">
                    <button
                        className="text-blue-600 flex items-center text-sm"
                        onClick={() => {
                            const tomorrow = new Date(selectedDate);
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            setIsReturnCalendarVisible(true);
                        }}
                    >
                        <FaPlus className="h-3 w-3 mr-1" />
                        Thêm ngày về
                    </button>
                </div>
            )}            
            
            {/* Search button */}
            <div className="flex items-center h-[72px]">
                <motion.button
                    className="bg-yellow-500 hover:bg-yellow-600 w-full text-white font-bold py-3 px-10 rounded-lg"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                        // Chuyển đến trang tìm kiếm phù hợp dựa trên điểm xuất phát và đến
                        if (searchForm.from === 'Sài Gòn' && searchForm.to === 'Nha Trang') {
                            navigate('/search-results');
                        } else if (searchForm.from === 'Hà Nội' && searchForm.to === 'Hải Phòng') {
                            navigate('/ha-noi-hai-phong');
                        } else {
                            // Trường hợp mặc định
                            navigate('/search-results');
                        }
                    }}
                >
                    Tìm kiếm
                </motion.button>
            </div>
        </div>
    );
};

export default SearchForm;
