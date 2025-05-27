import React from 'react';
import { type SortOption } from '../../hooks/useTripsSort';

interface ResultHeaderProps {
    resultsCount: number;
    sortOption?: SortOption;
}

const ResultHeader: React.FC<ResultHeaderProps> = ({ resultsCount, sortOption = 'default' }) => {
    // Hiển thị thông tin sắp xếp hiện tại
    const getSortDescription = () => {
        switch(sortOption) {
            case 'early':
                return 'Sắp xếp theo giờ đi sớm nhất';
            case 'late':
                return 'Sắp xếp theo giờ đi muộn nhất';
            case 'rating':
                return 'Sắp xếp theo đánh giá cao nhất';
            case 'price_asc':
                return 'Sắp xếp theo giá từ thấp đến cao';
            case 'price_desc':
                return 'Sắp xếp theo giá từ cao đến thấp';
            default:
                return '';
        }
    };
    
    const sortDesc = getSortDescription();
    
    return (
        <div className="mb-4">
            <div className="flex flex-col space-y-1">
                <h2 className="text-xl font-bold">Kết quả: {resultsCount} chuyến</h2>
                {sortDesc && (
                    <p className="text-sm text-gray-600">
                        <span className="material-icons align-bottom mr-1 text-gray-600" style={{ fontSize: '16px' }}>sort</span>
                        {sortDesc}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ResultHeader;
