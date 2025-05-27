import React from 'react';
import { type SortOption } from '../../hooks/useTripsSort';
import { FaRegCalendar, FaStar } from 'react-icons/fa';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';


interface SortBadgeProps {
    sortOption: SortOption;
    isFirst?: boolean;
    isLast?: boolean;
    isBest?: boolean;
}

/**
 * Component hiển thị badge khi một chuyến xe thỏa mãn tiêu chí sắp xếp
 */
const SortBadge: React.FC<SortBadgeProps> = ({ sortOption, isFirst = false, isLast = false, isBest = false }) => {
    if (sortOption === 'default') return null;
    
    if (!isFirst && !isLast && !isBest) return null;
    
    const getBadgeContent = () => {
        switch (sortOption) {
            case 'early':
                return isFirst ? {
                    icon: <FaRegCalendar />,
                    text: 'Sớm nhất',
                    bgColor: 'bg-green-100',
                    textColor: 'text-green-800'
                } : null;
                
            case 'late':
                return isLast ? {
                    icon: 'more_time',
                    text: 'Muộn nhất',
                    bgColor: 'bg-purple-100',
                    textColor: 'text-purple-800'
                } : null;
                
            case 'rating':
                return isBest ? {
                    icon: <FaStar />,
                    text: 'Đánh giá cao nhất',
                    bgColor: 'bg-amber-100',
                    textColor: 'text-amber-800'
                } : null;
                
            case 'price_asc':
                return isFirst ? {
                    icon: <FaArrowTrendDown />,
                    text: 'Rẻ nhất',
                    bgColor: 'bg-blue-100',
                    textColor: 'text-blue-800'
                } : null;
                
            case 'price_desc':
                return isFirst ? {
                    icon: <FaArrowTrendUp />,
                    text: 'Cao cấp nhất',
                    bgColor: 'bg-indigo-100',
                    textColor: 'text-indigo-800'
                } : null;
                
            default:
                return null;
        }
    };
    
    const badge = getBadgeContent();
    if (!badge) return null;
    
    return (
        <div className={`${badge.bgColor} ${badge.textColor} px-2 py-1 rounded-full inline-flex items-center text-xs font-medium`}>
            <span className="material-icons mr-1 text-sm">{badge.icon}</span>
            {badge.text}
        </div>
    );
};

export default SortBadge;
