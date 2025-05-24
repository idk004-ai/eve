import React, { useRef } from 'react';

interface BannerItem {
    id: number;
    title: string;
    bgClass: string;
    icon?: string;
    specialText?: string;
    image?: string;
}

interface SearchResultBannersProps {
    banners: BannerItem[];
    title?: string;
}

const SearchResultBanners: React.FC<SearchResultBannersProps> = ({ banners, title = "Tiêu chí lọc nhanh phổ biến" }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="mb-6 overflow-hidden ">
            {title && (
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
            )}
            <div className="relative">
                <div ref={scrollContainerRef} className="flex space-x-3 overflow-x-auto pb-3">
                    {banners.map((banner) => (
                        <div
                            key={banner.id}
                            className="flex-shrink-0 cursor-pointer"
                        >                            {banner.title === 'Flash Sale' ? (
                            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ width: '180px', height: '60px' }}>
                                <div className="bg-yellow-50 h-full flex items-center justify-center p-2">
                                    <div className="flex items-center text-center">
                                        <div className="font-bold text-yellow-500">
                                            <div className="text-xl leading-tight">Flash</div>
                                            <div className="text-xl leading-tight">Sale</div>
                                        </div>
                                        <div className="text-yellow-500 font-black text-4xl ml-1">50</div>
                                    </div>
                                </div>
                            </div>
                        ) : banner.title === 'GIẢM GIÁ KHỨ HỒI' ? (
                            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ width: '180px', height: '60px' }}>
                                <div className="bg-blue-50 h-full flex items-center justify-center">
                                    <div className="text-blue-600 font-bold text-center px-2">
                                        <div className="text-lg leading-tight">GIẢM GIÁ</div>
                                        <div className="text-lg leading-tight">KHỨ HỒI</div>
                                    </div>
                                </div>
                            </div>
                        ) : banner.title === 'Xe có GPS xem vị trí xe' ? (
                            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ width: '180px', height: '60px' }}>
                                <div className="h-full flex items-center justify-center px-2">
                                    {banner.icon && (
                                        <span className="material-icons text-green-500 mr-2">{banner.icon}</span>
                                    )}
                                    <div className="text-gray-800 font-medium text-sm leading-tight">{banner.title}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ width: '180px', height: '60px' }}>
                                <div className="h-full flex items-center justify-center px-2">
                                    {banner.icon && (
                                        <span className="material-icons text-gray-600 mr-2">{banner.icon}</span>
                                    )}
                                    <div className="text-gray-800 font-medium text-sm leading-tight">{banner.title}</div>
                                </div>
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResultBanners;
