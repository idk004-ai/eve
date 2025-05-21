import React from 'react';
import Calendar from '../../common/Calendar';

interface CalendarDisplayProps {
  isCalendarVisible: boolean;
  isReturnCalendarVisible?: boolean;
  calendarRef: React.RefObject<HTMLDivElement>;
  returnCalendarRef?: React.RefObject<HTMLDivElement>;
  selectedDate: Date;
  selectedReturnDate?: Date | null;
  handleDateSelect: (date: Date) => void;
  handleReturnDateSelect?: (date: Date) => void;
  closeCalendar: () => void;
  closeReturnCalendar?: () => void;
  type?: 'departure' | 'return';
}

const CalendarDisplay: React.FC<CalendarDisplayProps> = ({
  isCalendarVisible,
  isReturnCalendarVisible,
  calendarRef,
  returnCalendarRef,
  selectedDate,
  selectedReturnDate,
  handleDateSelect,
  handleReturnDateSelect,
  closeCalendar,
  closeReturnCalendar,
  type = 'departure'
}) => {
  // Departure calendar
  if (type === 'departure' && !isCalendarVisible) return null;
  
  // Return calendar
  if (type === 'return' && !isReturnCalendarVisible) return null;

  // Choose correct parameters based on calendar type
  const isVisible = type === 'departure' ? isCalendarVisible : isReturnCalendarVisible;
  const ref = type === 'departure' ? calendarRef : returnCalendarRef;
  const onClose = type === 'departure' ? closeCalendar : closeReturnCalendar;
  const onSelectDate = type === 'departure' ? handleDateSelect : handleReturnDateSelect;
  const date = type === 'departure' ? selectedDate : selectedReturnDate;
  
  // If we're showing the return calendar, set minimum date to the departure date
  const minDate = type === 'return' ? selectedDate : undefined;
  return (
    <div 
      ref={ref} 
      className="absolute left-0 right-0 top-full z-50 mt-1"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div 
        className="bg-white shadow-2xl rounded-lg overflow-hidden w-[90%] max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <Calendar
          selectedDate={date || null}
          onSelectDate={onSelectDate!}
          onClose={onClose!}
          visible={Boolean(isVisible)}
          minDate={minDate}
        />
      </div>
    </div>
  );
};

export default CalendarDisplay;
