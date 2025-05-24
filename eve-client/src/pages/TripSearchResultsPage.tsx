import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainLayout from '../layouts/MainLayout';
import {
    SearchFormResults,
    SearchFilters,
    SpecialBanner,
    ResultHeader,
    TripCard,
    SearchResultBanners,
    SortBadge
} from '../components/trips';
import { banners, trips as allTrips } from '../data/tripSearchData';
import { useTripsSort, type SortOption } from '../hooks/useTripsSort';

interface SearchParams {
    origin: string;
    destination: string;
    date: string;
}

const TripSearchResultsPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const searchParams: SearchParams = {
        origin: queryParams.get('origin') || 'Sài Gòn',
        destination: queryParams.get('destination') || 'Nha Trang',
        date: queryParams.get('date') || 'CN, 25/05/2025',
    }; const [sortOption, setSortOption] = useState<SortOption>('default');    // Giả lập chọn tab
    const [activeTab, setActiveTab] = useState('bus');

    // Sử dụng hook để sắp xếp trips dựa trên tùy chọn sortOption
    const sortedTrips = useTripsSort(allTrips, sortOption);

    return (
        <MainLayout>
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto py-4">
                    <SearchFormResults
                        searchParams={searchParams}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    <SpecialBanner
                        text="Ưu đãi đặc biệt: Giảm 50.000đ cho lần đặt đầu tiên!"
                        icon="local_offer"
                        bgColor="bg-orange-100"
                        textColor="text-orange-800"
                    />


                    <div className="grid grid-cols-4 gap-6">
                        <SearchFilters sortOption={sortOption} setSortOption={setSortOption} />                        
                        <div className="col-span-3 space-y-4">
                            <ResultHeader resultsCount={sortedTrips.length} sortOption={sortOption} />
                            <SearchResultBanners
                                banners={banners}
                                title="Tiêu chí lọc nhanh phổ biến"
                            />
                            <TransitionGroup className="space-y-4">
                                {sortedTrips.map((trip, index) => {
                                    // Xác định các trạng thái đặc biệt của trip trong danh sách đã sắp xếp
                                    const isFirst = index === 0;
                                    const isLast = index === sortedTrips.length - 1;
                                    const isBestRating = sortOption === 'rating' && trip.rating >= 4.7;

                                    return (
                                        <CSSTransition
                                            key={trip.id}
                                            timeout={500}
                                            classNames="sort-transition"
                                        >
                                            <div className="bg-white rounded-lg shadow relative transition-all duration-300 hover:shadow-md">

                                                <TripCard
                                                    {...trip}
                                                    // Xử lý specialTags từ array thành JSX kết hợp với sortBadge
                                                    specialTags={
                                                        <div className="flex flex-wrap gap-2">
                                                            {/* Badges liên quan đến sắp xếp */}
                                                            {sortOption !== 'default' && (
                                                                <SortBadge
                                                                    sortOption={sortOption}
                                                                    isFirst={isFirst}
                                                                    isLast={isLast}
                                                                    isBest={isBestRating}
                                                                />
                                                            )}

                                                            {/* Các tags được định nghĩa trong dữ liệu */}
                                                            {trip.specialTagsText?.map((tag, tagIndex) => (
                                                                <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    }
                                                />
                                            </div>
                                        </CSSTransition>
                                    );
                                })}
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default TripSearchResultsPage;
