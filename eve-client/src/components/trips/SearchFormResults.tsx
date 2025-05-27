import React, { useState, useRef, useEffect } from 'react';
import { FaExchangeAlt, FaPlus } from 'react-icons/fa';
import { MdLocationOn, MdCalendarToday } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../../store/useAppStore';
import useDateUtils from '../home/hero/hooks/useDateUtils';
import useOutsideClick from '../home/hero/hooks/useOutsideClick';
import CalendarDisplay from '../home/hero/CalendarDisplay';

interface SearchParams {
    origin: string;
    destination: string;
    date: string;
}

interface SearchFormResultsProps {
    searchParams: SearchParams;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const SearchFormResults: React.FC<SearchFormResultsProps> = ({
    searchParams,
    activeTab,
    setActiveTab
}) => {
    const navigate = useNavigate();
    const { setSearchForm } = useAppStore();

    // State for calendar
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [isReturnCalendarVisible, setIsReturnCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(() => {
        const parts = searchParams.date.split(',')[1]?.trim().split('/') || [];
        if (parts.length === 3) {
            return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
        }
        return new Date();
    });
    const [selectedReturnDate, setSelectedReturnDate] = useState<Date | null>(null);
    const defaultReturnDate = new Date(selectedDate.getTime() + 86400000);

    // Refs for calendar elements
    const calendarRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const returnCalendarRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

    // Get date utility functions
    const { formatDate, getDayOfWeek } = useDateUtils();

    // Set up app store search form from searchParams
    useEffect(() => {
        setSearchForm({
            from: searchParams.origin,
            to: searchParams.destination,
            date: searchParams.date.split(',')[1]?.trim() || searchParams.date
        });
    }, [searchParams, setSearchForm]);

    // Functions to handle calendar
    const closeCalendar = () => {
        setIsCalendarVisible(false);
    };

    const closeReturnCalendar = () => {
        setIsReturnCalendarVisible(false);
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
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

    // Handle swapping origin and destination
    const handleSwapLocations = () => {
        const newSearchParams = {
            origin: searchParams.destination,
            destination: searchParams.origin,
            date: searchParams.date
        };

        // Update the app store
        setSearchForm({
            from: newSearchParams.origin,
            to: newSearchParams.destination
        });

        // Navigate to the appropriate search results page
        if (newSearchParams.origin === 'Hà Nội' && newSearchParams.destination === 'Hải Phòng') {
            navigate('/ha-noi-hai-phong');
        } else if (newSearchParams.origin === 'Sài Gòn' && newSearchParams.destination === 'Nha Trang') {
            navigate('/search-results');
        } else {
            // Default route for other combinations
            navigate('/search-results');
        }
    };

    return (
        <div className="bg-white rounded-lg p-4 mb-6 shadow">
            <div className="flex mt-4 space-x-2 pb-4">
                {/* From field */}
                <div className="flex-1 min-w-[200px] bg-gray-50 rounded-lg p-2 border flex items-center">
                    <div className="text-blue-500 mr-2">
                        <MdLocationOn className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">Nơi xuất phát</div>
                        <div className="font-medium">{searchParams.origin}</div>
                    </div>
                </div>

                {/* Switch direction button */}
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleSwapLocations}
                        className="bg-white rounded-full p-2 shadow text-gray-500"
                    >
                        <FaExchangeAlt className="h-4 w-4" />
                    </button>
                </div>

                {/* To field */}
                <div className="flex-1 min-w-[200px] bg-gray-50 rounded-lg p-2 border flex items-center">
                    <div className="text-red-500 mr-2">
                        <MdLocationOn className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">Nơi đến</div>
                        <div className="font-medium">{searchParams.destination}</div>
                    </div>
                </div>

                {/* Date field */}
                <div className="flex-1 min-w-[200px] bg-gray-50 rounded-lg p-2 border flex items-center relative">
                    <div className="text-blue-500 mr-2">
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
                                setIsCalendarVisible(true);
                            }
                        }}
                    >
                        <div className="text-xs text-gray-400 border-b-2 border-blue-500 inline-block pb-1">Ngày đi</div>
                        <div className="font-medium">{searchParams.date}</div>
                    </div>
                </div>

                {/* Return date field - shown if selectedReturnDate exists */}
                {selectedReturnDate ? (
                    <div className="flex-1 min-w-[200px] bg-gray-50 rounded-lg p-2 border flex items-center relative">
                        <div className="text-green-500 mr-2">
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
                                    setIsReturnCalendarVisible(true);
                                }
                            }}
                        >
                            <div className="text-xs text-gray-400 border-b-2 border-green-500 inline-block pb-1">Ngày về</div>
                            <div className="font-medium">
                                {getDayOfWeek(selectedReturnDate)}, {formatDate(selectedReturnDate)}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <button
                            className="text-blue-600 flex items-center text-sm"
                            onClick={() => {
                                const tomorrow = new Date(selectedDate);
                                tomorrow.setDate(tomorrow.getDate() + 1);
                                setSelectedReturnDate(tomorrow);
                            }}
                        >
                            <FaPlus className="h-3 w-3 mr-1" />
                            Thêm ngày về
                        </button>
                    </div>
                )}

                {/* Search button */}
                <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-2 rounded-lg"
                    onClick={() => {
                        // Update search form in app store
                        setSearchForm({
                            from: searchParams.origin,
                            to: searchParams.destination,
                            date: searchParams.date.split(',')[1]?.trim() || searchParams.date
                        });

                        // Navigate to the appropriate search results page
                        if (searchParams.origin === 'Hà Nội' && searchParams.destination === 'Hải Phòng') {
                            navigate('/ha-noi-hai-phong');
                        } else if (searchParams.origin === 'Sài Gòn' && searchParams.destination === 'Nha Trang') {
                            navigate('/search-results');
                        } else {
                            // Default route
                            navigate('/search-results');
                        }
                    }}
                >
                    Tìm kiếm
                </button>
            </div>            
            {/* Departure Calendar component */}
            <div className='container mx-auto px-4 relative z-10'>
                <CalendarDisplay
                type="departure"
                isCalendarVisible={isCalendarVisible}
                calendarRef={calendarRef as React.RefObject<HTMLDivElement>}
                selectedDate={selectedDate}
                handleDateSelect={handleDateSelect}
                closeCalendar={closeCalendar}
            />

            {/* Return Calendar component */}
            <CalendarDisplay
                type="return"
                isCalendarVisible={isCalendarVisible}
                isReturnCalendarVisible={isReturnCalendarVisible}
                calendarRef={calendarRef as React.RefObject<HTMLDivElement>}
                returnCalendarRef={returnCalendarRef as React.RefObject<HTMLDivElement>}
                selectedDate={selectedDate}
                selectedReturnDate={selectedReturnDate || defaultReturnDate}
                handleDateSelect={handleDateSelect}
                handleReturnDateSelect={handleReturnDateSelect}
                closeCalendar={closeCalendar}
                closeReturnCalendar={closeReturnCalendar}
            />
            </div>
        </div>
    );
};

export default SearchFormResults;
