import { useMemo } from 'react';
import { type TripData } from '../data/tripSearchData';

type SortOption = 'default' | 'early' | 'late' | 'rating' | 'price_asc' | 'price_desc';

/**
 * Hook để sắp xếp danh sách chuyến đi dựa trên tùy chọn sắp xếp
 */
export const useTripsSort = (trips: TripData[], sortOption: SortOption) => {
    return useMemo(() => {
        const sortedData = [...trips];

        switch (sortOption) {
            case 'early': // Giờ đi sớm nhất
                return sortedData.sort((a, b) => {
                    // Chuyển đổi thời gian sang định dạng 24h để so sánh
                    const timeA = parseInt(a.departureTime.replace(':', ''));
                    const timeB = parseInt(b.departureTime.replace(':', ''));
                    return timeA - timeB;
                });

            case 'late': // Giờ đi muộn nhất
                return sortedData.sort((a, b) => {
                    const timeA = parseInt(a.departureTime.replace(':', ''));
                    const timeB = parseInt(b.departureTime.replace(':', ''));
                    return timeB - timeA;
                });

            case 'rating': // Đánh giá cao nhất
                return sortedData.sort((a, b) => b.rating - a.rating);

            case 'price_asc': // Giá tăng dần
                return sortedData.sort((a, b) => a.price - b.price);

            case 'price_desc': // Giá giảm dần
                return sortedData.sort((a, b) => b.price - a.price);

            default: // Mặc định
                // Có thể sắp xếp theo một tiêu chí mặc định hoặc giữ nguyên thứ tự
                return sortedData;
        }
    }, [trips, sortOption]);
};

export type { SortOption };
