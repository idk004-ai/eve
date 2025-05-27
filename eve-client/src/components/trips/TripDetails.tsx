import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TripDetailsProps {
    activeTab?: string;
    onTabChange?: (tab: string) => void;
}

const TripDetails: React.FC<TripDetailsProps> = ({ 
    activeTab = 'discounts',
    onTabChange = () => {}
}) => {
    const handleTabChange = (tab: string) => {
        onTabChange(tab);
    };

    return (
        <div className="mt-4 border-t pt-4">
            {/* Tab Navigation */}
            <div className="flex border-b overflow-x-auto">
                <button 
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'discounts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('discounts')}
                >
                    Giảm giá
                </button>
                <button 
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'pickup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('pickup')}
                >
                    Đón/trả
                </button>
                <button 
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('reviews')}
                >
                    Đánh giá
                </button>
                <button 
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'policy' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('policy')}
                >
                    Chính sách
                </button>
                <button 
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'photos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('photos')}
                >
                    Hình ảnh
                </button>
                <button 
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'amenities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('amenities')}
                >
                    Tiện ích
                </button>
            </div>
            
            {/* Tab Content */}
            <div className="py-4">
                {/* Discounts Tab */}
                {activeTab === 'discounts' && (
                    <div className="space-y-3">
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                            <span className="material-icons text-blue-600 mr-2">local_offer</span>
                            <div>
                                <div className="font-medium">Giảm 50.000đ</div>
                                <div className="text-sm text-gray-500">Mã: EVEXE50</div>
                            </div>
                            <button className="ml-auto bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">Áp dụng</button>
                        </div>
                        <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <span className="material-icons text-green-600 mr-2">card_giftcard</span>
                            <div>
                                <div className="font-medium">Giảm 10%</div>
                                <div className="text-sm text-gray-500">Nhập mã: FIRST10</div>
                            </div>
                            <button className="ml-auto bg-green-600 text-white px-3 py-1 rounded-lg text-sm">Áp dụng</button>
                        </div>
                    </div>
                )}
                
                {/* Pickup Tab */}
                {activeTab === 'pickup' && (
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-lg mb-2">Điểm đón</h3>
                            <div className="space-y-3">
                                <div className="flex items-start border-l-2 border-blue-500 pl-3">
                                    <span className="material-icons text-blue-500 mr-2">trip_origin</span>
                                    <div>
                                        <div className="font-medium">Văn phòng Hà Nội</div>
                                        <div className="text-sm text-gray-500">Số 26 Đường Lê Văn Lương, Trung Hòa, Cầu Giấy, Hà Nội</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-lg mb-2">Điểm trả</h3>
                            <div className="space-y-3">
                                <div className="flex items-start border-l-2 border-red-500 pl-3">
                                    <span className="material-icons text-red-500 mr-2">place</span>
                                    <div>
                                        <div className="font-medium">Văn phòng Cát Bà</div>
                                        <div className="text-sm text-gray-500">Thị trấn Cát Bà, Huyện Cát Hải, Thành phố Hải Phòng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="text-lg font-medium mr-3">4.8</div>
                            <div className="flex text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className="text-gray-300" />
                            </div>
                            <div className="text-sm text-gray-500 ml-2">(120 đánh giá)</div>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="border rounded-lg p-3">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="font-medium">Nguyễn Văn A</div>
                                    <div className="text-sm text-gray-500">15/05/2025</div>
                                </div>
                                <div className="flex text-yellow-400 mb-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className="text-gray-600">Xe di chuyển êm ái, tài xế nhiệt tình, không phóng nhanh vượt ẩu.</p>
                            </div>
                            
                            <div className="border rounded-lg p-3">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="font-medium">Trần Thị B</div>
                                    <div className="text-sm text-gray-500">10/05/2025</div>
                                </div>
                                <div className="flex text-yellow-400 mb-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className="text-gray-300" />
                                </div>
                                <p className="text-gray-600">Xe sạch sẽ, không gian thoáng mát. Nhân viên phục vụ chu đáo.</p>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Policy Tab */}
                {activeTab === 'policy' && (
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg mb-3">Chính sách hủy do nhà xe quy định</h3>
                            <div className="border rounded-lg overflow-hidden">
                                <div className="grid grid-cols-2 bg-gray-50 py-2 px-4">
                                    <div className="font-medium">Thời gian hủy</div>
                                    <div className="font-medium text-right">Phí hủy</div>
                                </div>
                                <div className="grid grid-cols-2 border-t py-2 px-4 bg-green-50">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                                        <span>Hiện tại</span>
                                    </div>
                                    <div className="text-right text-green-600 font-medium">0%</div>
                                </div>
                                <div className="grid grid-cols-2 border-t py-2 px-4">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                                        <span>Trước 11:00 • 24/05/2025</span>
                                    </div>
                                    <div className="text-right font-medium">0%</div>
                                </div>
                                <div className="grid grid-cols-2 border-t py-2 px-4">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                                        <span>11:00 • 24/05/2025</span>
                                    </div>
                                    <div className="text-right font-medium">100%</div>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg mt-3 flex items-start">
                                <span className="material-icons text-blue-600 mr-2">info</span>
                                <p className="text-sm">Phí hủy được tính trên giá gốc (*) và không vượt quá số tiền bạn đã thanh toán.</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">(*) Giá gốc là giá sau khuyến mãi, đã tính phụ thu đón trả hoặc suất ăn (nếu có) và chưa áp dụng mã giảm giá.</p>
                        </div>
                        
                        <div className="mt-6">
                            <h3 className="font-bold text-lg mb-3">Các quy định khác</h3>
                            <div>
                                <h4 className="font-medium text-base mb-2">Yêu cầu khi lên xe</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe</li>
                                    <li>Xuất trình SMS/Email đặt vé trước khi lên xe</li>
                                    <li>Không mang đồ ăn, thức ăn có mùi lên xe</li>
                                    <li>Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe</li>
                                    <li>Không mang các vật dễ cháy nổ lên xe</li>
                                    <li>Không vứt rác trên xe</li>
                                    <li>Không làm ồn, gây mất trật tự trên xe</li>
                                </ul>
                            </div>
                            
                            <div className="mt-4">
                                <h4 className="font-medium text-base mb-2">Hành lý xách tay</h4>
                                <ul className="list-disc pl-6">
                                    <li>Tổng trọng lượng hành lý không vượt quá 3 kg</li>
                                </ul>
                            </div>
                            
                            <div className="mt-4">
                                <h4 className="font-medium text-base mb-2">Trẻ em và phụ nữ có thai</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Trẻ em dưới 4 tuổi hoặc dưới 100 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ</li>
                                    <li>Trẻ em từ 4 tuổi hoặc cao từ 100 cm trở lên mua vé như người lớn</li>
                                    <li>Phụ nữ có thai cần đảm bảo sức khỏe trong suốt quá trình di chuyển</li>
                                    <li>Nhà xe có quyền từ chối phục vụ nếu hành khách không tuân thủ quy định</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Photos Tab */}
                {activeTab === 'photos' && (
                    <div>
                        <div className="mb-4 relative">
                            <img 
                                src="/src/assets/images/bus-main.jpg" 
                                alt="Bus exterior" 
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                                1/6
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-5 gap-2">
                            <div className="border-2 border-blue-500 rounded-lg overflow-hidden">
                                <img 
                                    src="/src/assets/images/bus-exterior.jpg" 
                                    alt="Bus exterior" 
                                    className="w-full h-16 object-cover"
                                />
                            </div>
                            <div className="border rounded-lg overflow-hidden">
                                <img 
                                    src="/src/assets/images/bus-interior-1.jpg" 
                                    alt="Bus interior" 
                                    className="w-full h-16 object-cover"
                                />
                            </div>
                            <div className="border rounded-lg overflow-hidden">
                                <img 
                                    src="/src/assets/images/bus-interior-2.jpg" 
                                    alt="Bus seating" 
                                    className="w-full h-16 object-cover"
                                />
                            </div>
                            <div className="border rounded-lg overflow-hidden">
                                <img 
                                    src="/src/assets/images/bus-parking.jpg" 
                                    alt="Bus parking" 
                                    className="w-full h-16 object-cover"
                                />
                            </div>
                            <div className="border rounded-lg overflow-hidden">
                                <img 
                                    src="/src/assets/images/bus-mini.jpg" 
                                    alt="Mini bus" 
                                    className="w-full h-16 object-cover"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-4 text-right">
                            <button className="text-blue-600 flex items-center justify-end text-sm">
                                <span className="material-icons mr-1">flag</span>
                                Báo cáo sai/thiếu thông tin
                            </button>
                        </div>
                    </div>
                )}
                
                {/* Amenities Tab */}
                {activeTab === 'amenities' && (
                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <div className="flex items-center">
                                <span className="text-amber-500 material-icons mr-2">safety_divider</span>
                                <div>
                                    <h4 className="font-medium">Dây đai an toàn</h4>
                                    <p className="text-sm text-gray-600">Trên xe có trang bị dây đai an toàn cho hành khách khi ngồi trên xe</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-b pb-4">
                            <div className="flex items-center">
                                <span className="text-amber-500 material-icons mr-2">local_drink</span>
                                <div>
                                    <h4 className="font-medium">Nước uống</h4>
                                    <p className="text-sm text-gray-600">Nhà xe có phục vụ nước cho hành khách</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-b pb-4">
                            <div className="flex items-center">
                                <span className="text-amber-500 material-icons mr-2">hardware</span>
                                <div>
                                    <h4 className="font-medium">Búa phá kính</h4>
                                    <p className="text-sm text-gray-600">Dùng để phá kính ô tô thoát hiểm trong trường hợp khẩn cấp</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                                <span className="text-amber-500 material-icons mr-2">tv</span>
                                <span className="font-medium">Tivi LED</span>
                            </div>
                            
                            <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                                <span className="text-amber-500 material-icons mr-2">power</span>
                                <span className="font-medium">Sạc điện thoại</span>
                            </div>
                            
                            <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                                <span className="text-amber-500 material-icons mr-2">curtains</span>
                                <span className="font-medium">Rèm cửa</span>
                            </div>
                            
                            <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                                <span className="text-amber-500 material-icons mr-2">ac_unit</span>
                                <span className="font-medium">Điều hòa</span>
                            </div>
                            
                            <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                                <span className="text-amber-500 material-icons mr-2">cleaning_services</span>
                                <span className="font-medium">Khăn lạnh</span>
                            </div>
                        </div>
                        
                        <div className="mt-4 text-right">
                            <button className="text-blue-600 flex items-center justify-end text-sm">
                                <span className="material-icons mr-1">flag</span>
                                Báo cáo sai/thiếu thông tin
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TripDetails;
