// filepath: c:\Users\Le Nhat Minh Khoi\Desktop\exe\eve\eve-client\src\components\home\HeroSection.tsx
import React, { useState, useRef } from 'react';
import useAppStore from '../../store/useAppStore';
import BackgroundAnimation from './hero/BackgroundAnimation';
import FlashSaleBanner from './hero/FlashSaleBanner';
import TransportTabs from './hero/TransportTabs';
import SearchForm from './hero/SearchForm';
import CalendarDisplay from './hero/CalendarDisplay';
import useDateUtils from './hero/hooks/useDateUtils';
import useOutsideClick from './hero/hooks/useOutsideClick';

const HeroSection: React.FC = () => {
    // Get store values and actions
    const {
        activeTransportTab,
        setActiveTransportTab,
        searchForm,
        setSearchForm
    } = useAppStore();

    // State for calendar
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [isReturnCalendarVisible, setIsReturnCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedReturnDate, setSelectedReturnDate] = useState<Date | null>(null);
    
    // Refs for calendar elements
    const calendarRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const returnCalendarRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    
    // Get date utility functions
    const { formatDate, getDayOfWeek } = useDateUtils();
    
    // Functions to handle calendar
    const closeCalendar = () => {
        setIsCalendarVisible(false);
    };
    
    const closeReturnCalendar = () => {
        setIsReturnCalendarVisible(false);
    };
      
    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        const formattedDate = formatDate(date);
        setSearchForm({ ...searchForm, date: formattedDate });
        closeCalendar();
        
        // If return date is earlier than departure date, reset it
        if (selectedReturnDate && selectedReturnDate < date) {
            setSelectedReturnDate(null);
        }
    };
    
    const handleReturnDateSelect = (date: Date) => {
        setSelectedReturnDate(date);
        closeReturnCalendar();
    };    
    
    // Setup click outside detection
    useOutsideClick({ 
        ref: calendarRef as React.RefObject<HTMLElement>, 
        isVisible: isCalendarVisible, 
        onOutsideClick: closeCalendar 
    });
    
    // Setup click outside detection for return calendar
    useOutsideClick({ 
        ref: returnCalendarRef as React.RefObject<HTMLElement>, 
        isVisible: isReturnCalendarVisible, 
        onOutsideClick: closeReturnCalendar 
    });

    return (
        <section className="relative bg-blue-500 text-white py-10">
            {/* Background with animations */}
            <BackgroundAnimation />

            {/* Content container */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Flash sale banner */}
                <FlashSaleBanner />

                {/* Search box */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
                    {/* Transport tabs */}
                    <TransportTabs 
                        activeTransportTab={activeTransportTab}
                        setActiveTransportTab={setActiveTransportTab}
                    />
                    
                    {/* Search form */}
                    <SearchForm
                        searchForm={searchForm}
                        setSearchForm={setSearchForm}
                        selectedDate={selectedDate}
                        selectedReturnDate={selectedReturnDate}
                        formatDate={formatDate}
                        getDayOfWeek={getDayOfWeek}
                        setIsCalendarVisible={setIsCalendarVisible}
                        setIsReturnCalendarVisible={setIsReturnCalendarVisible}
                        isCalendarVisible={isCalendarVisible}
                        isReturnCalendarVisible={isReturnCalendarVisible}
                        closeCalendar={closeCalendar}
                        closeReturnCalendar={closeReturnCalendar}
                    />
                </div>
                
                {/* Departure Calendar component */}
                <CalendarDisplay
                    type="departure"
                    isCalendarVisible={isCalendarVisible}
                    calendarRef={calendarRef}
                    selectedDate={selectedDate}
                    handleDateSelect={handleDateSelect}
                    closeCalendar={closeCalendar}
                />
                
                {/* Return Calendar component */}                
                <CalendarDisplay
                    type="return"
                    isCalendarVisible={isCalendarVisible}
                    isReturnCalendarVisible={isReturnCalendarVisible}
                    calendarRef={returnCalendarRef}
                    returnCalendarRef={returnCalendarRef}
                    selectedDate={selectedDate}
                    selectedReturnDate={selectedReturnDate || defaultReturnDate}
                    handleDateSelect={handleDateSelect}
                    handleReturnDateSelect={handleReturnDateSelect}
                    closeCalendar={closeCalendar}
                    closeReturnCalendar={closeReturnCalendar}
                />
            </div>
        </section>
    );
};

export default HeroSection;
