import React, { useState } from 'react';
import { type SortOption } from '../../hooks/useTripsSort';

interface SearchFiltersProps {
    sortOption: SortOption;
    setSortOption: (option: SortOption) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ sortOption, setSortOption }) => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        if (expandedSection === section) {
            setExpandedSection(null);
        } else {
            setExpandedSection(section);
        }
    };    
    
    return (
        <div className="col-span-1">
            <div className="sticky top-0 pt-4shadow-lg">
                <div className="bg-white rounded-lg p-4 shadow mb-4">                <h3 className="font-medium text-lg mb-4">Sắp xếp</h3>
                <div className="space-y-4">
                    <div 
                        className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-all duration-200 ${sortOption === 'default' ? 'bg-blue-100' : ''}`}
                        onClick={() => setSortOption('default')}
                    >
                        <input
                            type="radio"
                            id="default"
                            name="sort"
                            className="w-4 h-4 text-blue-600"
                            checked={sortOption === 'default'}
                            readOnly
                        />
                        <label htmlFor="default" className="ml-3 cursor-pointer flex items-center">
                            <span>Mặc định</span>
                        </label>
                    </div>

                    <div 
                        className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-all duration-200 ${sortOption === 'early' ? 'bg-blue-100' : ''}`}
                        onClick={() => setSortOption('early')}
                    >
                        <input
                            type="radio"
                            id="early"
                            name="sort"
                            className="w-4 h-4 text-blue-600"
                            checked={sortOption === 'early'}
                            readOnly
                        />
                        <label htmlFor="early" className="ml-3 cursor-pointer flex items-center">
                            <span>Giờ đi sớm nhất</span>
                        </label>
                    </div>

                    <div 
                        className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-all duration-200 ${sortOption === 'late' ? 'bg-blue-100' : ''}`}
                        onClick={() => setSortOption('late')}
                    >
                        <input
                            type="radio"
                            id="late"
                            name="sort"
                            className="w-4 h-4 text-blue-600"
                            checked={sortOption === 'late'}
                            readOnly
                        />
                        <label htmlFor="late" className="ml-3 cursor-pointer flex items-center">
                            <span>Giờ đi muộn nhất</span>
                        </label>
                    </div>

                    <div 
                        className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-all duration-200 ${sortOption === 'rating' ? 'bg-blue-100' : ''}`}
                        onClick={() => setSortOption('rating')}
                    >
                        <input
                            type="radio"
                            id="rating"
                            name="sort"
                            className="w-4 h-4 text-blue-600"
                            checked={sortOption === 'rating'}
                            readOnly
                        />
                        <label htmlFor="rating" className="ml-3 cursor-pointer flex items-center">
                            <span>Đánh giá cao nhất</span>
                        </label>
                    </div>

                    <div 
                        className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-all duration-200 ${sortOption === 'price_asc' ? 'bg-blue-100' : ''}`}
                        onClick={() => setSortOption('price_asc')}
                    >
                        <input
                            type="radio"
                            id="price_asc"
                            name="sort"
                            className="w-4 h-4 text-blue-600"
                            checked={sortOption === 'price_asc'}
                            readOnly
                        />
                        <label htmlFor="price_asc" className="ml-3 cursor-pointer flex items-center">
                            <span>Giá tăng dần</span>
                        </label>
                    </div>

                    <div 
                        className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-all duration-200 ${sortOption === 'price_desc' ? 'bg-blue-100' : ''}`}
                        onClick={() => setSortOption('price_desc')}
                    >
                        <input
                            type="radio"
                            id="price_desc"
                            name="sort"
                            className="w-4 h-4 text-blue-600"
                            checked={sortOption === 'price_desc'}
                            readOnly
                        />
                        <label htmlFor="price_desc" className="ml-3 cursor-pointer flex items-center">
                            <span>Giá giảm dần</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow mb-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-lg">Lọc</h3>
                    <button className="text-blue-500 text-sm font-medium">Xóa lọc</button>
                </div>

                <div className="border-b pb-3 mb-3">
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => toggleSection('departure_time')}
                    >
                        <h4 className="font-medium">Giờ đi</h4>
                        <span className={`material-icons transform transition-transform ${expandedSection === 'departure_time' ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </div>
                    {expandedSection === 'departure_time' && (
                        <div className="pt-2">
                            {/* Filter options would go here */}
                        </div>
                    )}
                </div>

                <div className="border-b pb-3 mb-3">
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => toggleSection('operators')}
                    >
                        <h4 className="font-medium">Nhà xe</h4>
                        <span className={`material-icons transform transition-transform ${expandedSection === 'operators' ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </div>
                    {expandedSection === 'operators' && (
                        <div className="pt-2">
                            {/* Operator checkboxes would go here */}
                        </div>
                    )}
                </div>

                <div className="border-b pb-3 mb-3">
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => toggleSection('price')}
                    >
                        <h4 className="font-medium">Giá vé</h4>
                        <span className={`material-icons transform transition-transform ${expandedSection === 'price' ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </div>
                    {expandedSection === 'price' && (
                        <div className="pt-2">
                            {/* Price range slider would go here */}
                        </div>
                    )}
                </div>

                <div className="border-b pb-3 mb-3">
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => toggleSection('pickup')}
                    >
                        <h4 className="font-medium">Điểm đón</h4>
                        <span className={`material-icons transform transition-transform ${expandedSection === 'pickup' ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </div>
                    {expandedSection === 'pickup' && (
                        <div className="pt-2">
                            {/* Pickup locations would go here */}
                        </div>
                    )}
                </div>

                <div className="border-b pb-3 mb-3">
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => toggleSection('dropoff')}
                    >
                        <h4 className="font-medium">Điểm trả</h4>
                        <span className={`material-icons transform transition-transform ${expandedSection === 'dropoff' ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </div>
                    {expandedSection === 'dropoff' && (
                        <div className="pt-2">
                            {/* Dropoff locations would go here */}
                        </div>
                    )}
                </div>

                <div>
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => toggleSection('criteria')}
                    >
                        <h4 className="font-medium">Tiêu chí phổ biến</h4>
                        <span className={`material-icons transform transition-transform ${expandedSection === 'criteria' ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </div>
                    {expandedSection === 'criteria' && (
                        <div className="pt-2">
                            {/* Common criteria would go here */}
                        </div>
                    )}                </div>
            </div>
            </div>
        </div>
    );
};

export default SearchFilters;
