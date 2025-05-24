import React, { useState } from 'react';
import { MdLocationOn, MdKeyboardArrowDown, MdKeyboardArrowUp, MdVerifiedUser } from 'react-icons/md';
import TripDetails from './TripDetails';

interface TripCardProps {
    operatorName: string;
    rating: number;
    reviewCount: number;
    vehicleType: string;
    vehicleCapacity: number;
    hasToilet?: boolean;
    departureTime: string;
    departureLocation: string;
    arrivalTime: string;
    arrivalLocation: string;
    travelDuration: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    promotionText?: string;
    availableSeats: number;
    totalSeats: number;
    imageUrl: string;
    hasFlashSale?: boolean;
    flashSalePercent?: number;
    instantConfirmation?: boolean;
    noAdvancePayment?: boolean;
    additionalInfo?: string;
    specialTags?: React.ReactNode;
}

const TripCard: React.FC<TripCardProps> = ({
    operatorName,
    rating,
    reviewCount,
    vehicleType,
    vehicleCapacity,
    hasToilet,
    departureTime,
    departureLocation,
    arrivalTime,
    arrivalLocation,
    travelDuration,
    price,
    originalPrice,
    discount,
    promotionText,
    availableSeats,
    totalSeats,
    imageUrl,
    hasFlashSale,
    flashSalePercent,
    instantConfirmation,
    noAdvancePayment,
    additionalInfo,
    specialTags,
}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [activeTab, setActiveTab] = useState('discounts');

    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="p-4">
            <div className="flex">
                <div className="w-1/4">
                    <div className="relative w-full h-40 rounded overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={`${operatorName} - ${vehicleType}`}
                            className="w-full h-full object-cover"
                        />
                        {instantConfirmation && (
                            <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white px-2 py-1 flex items-center">
                                <span className="material-icons text-sm mr-1">
                                    <MdVerifiedUser />
                                </span>
                                <span className="text-xs">Xác nhận tức thì</span>
                            </div>
                        )}
                        {hasFlashSale && (
                            <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-2">
                                <div className="text-sm font-bold">FLASH</div>
                                <div className="text-sm font-bold">SALE</div>
                                {flashSalePercent && (
                                    <div className="text-2xl font-bold">{flashSalePercent}</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-3/4 pl-4 flex flex-col">
                    <div className="flex items-center mb-2">
                        <h3 className="text-lg font-medium">{operatorName}</h3>
                        <div className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded flex items-center">
                            <span className="material-icons text-sm mr-1">star</span>
                            <span className="font-medium">{rating}</span>
                            <span className="text-sm text-gray-600 ml-1">({reviewCount})</span>
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="font-medium">
                            {vehicleType} {vehicleCapacity} {hasToilet ? '(WC)' : ''}
                        </span>
                    </div>

                    <div className="flex flex-grow">
                        <div className="w-1/2">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div className="text-blue-500 mr-2">
                                        <MdLocationOn className="h-5 w-5" />
                                    </div>
                                    <div className="font-medium text-xl">{departureTime}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-red-500 mr-2">•</div>
                                    <div className="text-sm">{departureLocation}</div>
                                </div>
                            </div>

                            <div className="flex items-center text-sm text-gray-500 ml-7 my-2">
                                <div className="border-l-2 border-gray-300 border-dashed h-8 absolute ml-[-18px]"></div>
                                {travelDuration}
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div className="text-red-500 mr-2">
                                        <MdLocationOn className="h-5 w-5" />
                                    </div>
                                    <div className="font-medium text-xl">{arrivalTime}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-red-500 mr-2">•</div>
                                    <div className="text-sm">{arrivalLocation}</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 flex flex-col items-end">
                            <div className="text-red-500 font-bold text-xl mb-1">
                                {originalPrice && price < originalPrice ? 'Từ ' : ''}{formatPrice(price)}
                            </div>

                            {originalPrice && originalPrice > price && (
                                <div className="flex items-center mb-1">
                                    <span className="text-gray-500 line-through text-sm mr-1">{formatPrice(originalPrice)}</span>
                                    {discount && (
                                        <span className="bg-red-100 text-red-500 text-xs px-1 rounded">-{discount}%</span>
                                    )}
                                </div>
                            )}

                            {promotionText && (
                                <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-3">
                                    {promotionText}
                                </div>
                            )}
                            <div className="text-gray-600 mb-3">
                                Còn {availableSeats}/{totalSeats} chỗ trống
                            </div>                            <div className="flex space-x-2">
                                <button
                                    onClick={toggleDetails}
                                    className="text-blue-600 hover:text-blue-800 flex items-center border-b border-blue-600"
                                >
                                    <span className="text-sm font-medium">Thông tin chi tiết</span>
                                    {showDetails ? (
                                        <MdKeyboardArrowUp className="h-4 w-4 ml-1" />
                                    ) : (
                                        <MdKeyboardArrowDown className="h-4 w-4 ml-1" />
                                    )}
                                </button>

                                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg">
                                    Chọn chuyến
                                </button>
                            </div>
                        </div>
                    </div>

                    {noAdvancePayment && (
                        <div className="mt-2 text-sm font-semibold text-gray-700 bg-gray-100 p-2 rounded">
                            KHÔNG CẦN THANH TOÁN TRƯỚC
                        </div>
                    )}

                    {additionalInfo && (
                        <div className="mt-2 text-sm text-red-500">
                            • {additionalInfo}
                        </div>
                    )}

                    {specialTags && (
                        <div className="mt-2">
                            {specialTags}
                        </div>
                    )}                </div>
            </div>
            {/* Detailed Information Section */}
            {showDetails && (
                <TripDetails
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            )}
        </div>
    );
};

export default TripCard;
