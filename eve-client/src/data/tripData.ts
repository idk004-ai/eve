import { v4 as uuidv4 } from 'uuid';

// Các loại xe
export type VehicleType = 'Limousine' | 'Giường nằm' | 'Ghế ngồi' | 'VIP';
export const VehicleType = {
    LIMOUSINE: 'Limousine' as VehicleType,
    SLEEPER_BUS: 'Giường nằm' as VehicleType,
    SEAT_BUS: 'Ghế ngồi' as VehicleType,
    VIP: 'VIP' as VehicleType
};

// Các tiện ích trên xe
export type Amenity = 'Wifi' | 'Nước uống' | 'Chăn đắp' | 'Điều hòa' | 'Ổ điện' | 'TV' | 'Toilet' | 'Đèn đọc sách' | 'Đồ ăn nhẹ';
export const Amenity = {
    WIFI: 'Wifi' as Amenity,
    WATER: 'Nước uống' as Amenity,
    BLANKET: 'Chăn đắp' as Amenity,
    AIR_CONDITIONER: 'Điều hòa' as Amenity,
    SOCKET: 'Ổ điện' as Amenity,
    TV: 'TV' as Amenity,
    WC: 'Toilet' as Amenity,
    READING_LIGHT: 'Đèn đọc sách' as Amenity,
    SNACK: 'Đồ ăn nhẹ' as Amenity
};

// Các hình thức thanh toán
export type PaymentMethod = 'Thẻ tín dụng' | 'Ví MoMo' | 'Tiền mặt' | 'Chuyển khoản' | 'VNPay';
export const PaymentMethod = {
    CREDIT_CARD: 'Thẻ tín dụng' as PaymentMethod,
    MOMO: 'Ví MoMo' as PaymentMethod,
    CASH: 'Tiền mặt' as PaymentMethod,
    BANK_TRANSFER: 'Chuyển khoản' as PaymentMethod,
    VNPAY: 'VNPay' as PaymentMethod
};

export interface BusOperator {
    id: string;
    name: string;
    logo: string;
    rating: number;
    reviewCount: number;
    phoneNumber: string;
    contactEmail: string;
}

export interface Station {
    id: string;
    name: string;
    address: string;
    district: string;
    city: string;
    type: 'PICKUP' | 'DROPOFF' | 'BOTH';
}

export interface Ticket {
    id: string;
    operatorId: string;
    price: number;
    originalPrice: number;
    discount: number;
    discountType: 'PERCENT' | 'FIXED';
    promotionCode?: string;
    promotionDescription?: string;
    vehicleType: VehicleType;
    departureTime: string; // HH:mm
    arrivalTime: string;  // HH:mm
    departureDate: string; // YYYY-MM-DD
    travelDuration: string; // HHh MMm
    departureStationId: string;
    arrivalStationId: string;
    amenities: Amenity[];
    availableSeats: number;
    totalSeats: number;
    paymentMethods: PaymentMethod[];
    cancellationPolicy: string;
    special?: {
        flashSale?: boolean;
        flashSalePercent?: number;
        earlyBird?: boolean;
        instantConfirmation?: boolean;
        noAdvancePayment?: boolean;
    };
}

export interface Route {
    id: string;
    origin: {
        city: string;
        province: string;
    };
    destination: {
        city: string;
        province: string;
    };
    distance: number; // km
    popularRoute: boolean;
    imageUrl?: string; // URL hình ảnh tuyến đường
    description?: string;
}

export interface Trip {
    id: string;
    routeId: string;
    date: string; // YYYY-MM-DD
    tickets: Ticket[];
}

// Các địa điểm/trạm phổ biến
export const stations: Station[] = [
    {
        id: '1',
        name: 'Bến xe Miền Đông mới',
        address: 'Số 292 Đinh Bộ Lĩnh, phường 26',
        district: 'Bình Thạnh',
        city: 'TP. Hồ Chí Minh',
        type: 'BOTH'
    },
    {
        id: '2',
        name: 'Văn phòng Phạm Ngũ Lão',
        address: '272 Phạm Ngũ Lão, phường Phạm Ngũ Lão',
        district: 'Quận 1',
        city: 'TP. Hồ Chí Minh',
        type: 'PICKUP'
    },
    {
        id: '3',
        name: 'Trạm Quận 1',
        address: '235 Nguyễn Thái Học, phường Cầu Ông Lãnh',
        district: 'Quận 1',
        city: 'TP. Hồ Chí Minh',
        type: 'BOTH'
    },
    {
        id: '4',
        name: 'Văn phòng Nha Trang',
        address: '97 Nguyễn Thiện Thuật',
        district: 'Nha Trang',
        city: 'Khánh Hòa',
        type: 'BOTH'
    },
    {
        id: '5',
        name: 'Bến xe Nha Trang',
        address: '16/4 Đường 23 tháng 10',
        district: 'Nha Trang',
        city: 'Khánh Hòa',
        type: 'BOTH'
    },
    {
        id: '6',
        name: 'Bến xe Đà Lạt',
        address: '01 Tô Hiến Thành',
        district: 'Phường 3',
        city: 'Đà Lạt',
        type: 'BOTH'
    },
    {
        id: '7',
        name: 'Văn phòng Đà Lạt',
        address: '5 Lê Thị Hồng Gấm',
        district: 'Phường 1',
        city: 'Đà Lạt',
        type: 'BOTH'
    },
    {
        id: '8',
        name: 'Bến xe Mỹ Đình',
        address: 'Số 20 Phạm Hùng',
        district: 'Nam Từ Liêm',
        city: 'Hà Nội',
        type: 'BOTH'
    },
    {
        id: '9',
        name: 'Ngã tư Bình Triệu',
        address: 'Bình Triệu',
        district: 'Thủ Đức',
        city: 'TP. Hồ Chí Minh',
        type: 'BOTH'
    },
    {
        id: '10',
        name: 'Trạm Hàng Xanh',
        address: '419 Điện Biên Phủ, phường 25',
        district: 'Bình Thạnh',
        city: 'TP. Hồ Chí Minh',
        type: 'BOTH'
    },
];

// Nhà xe
export const busOperators: BusOperator[] = [
    {
        id: '1',
        name: 'Phương Trang',
        logo: 'https://static.vexere.com/production/images/1679039082302.jpeg',
        rating: 4.5,
        reviewCount: 5241,
        phoneNumber: '1900 6067',
        contactEmail: 'support@futa.vn'
    },
    {
        id: '2',
        name: 'Thành Bưởi',
        logo: 'https://static.vexere.com/production/images/1679039152553.jpeg',
        rating: 4.3,
        reviewCount: 3250,
        phoneNumber: '1900 6068',
        contactEmail: 'support@thanhbuoi.vn'
    },
    {
        id: '3',
        name: 'Kumho Samco',
        logo: 'https://static.vexere.com/production/images/1679039176212.jpeg',
        rating: 4.4,
        reviewCount: 2987,
        phoneNumber: '1900 6769',
        contactEmail: 'info@kumhosamco.com.vn'
    },
    {
        id: '4',
        name: 'Hưng Thịnh Limousine',
        logo: 'https://static.vexere.com/production/images/1686760144158.jpeg',
        rating: 4.7,
        reviewCount: 2652,
        phoneNumber: '1900 6900',
        contactEmail: 'limo@hungthinh.vn'
    },
    {
        id: '5',
        name: 'Khánh Phong',
        logo: 'https://static.vexere.com/production/images/1691878747262.jpeg',
        rating: 4.7,
        reviewCount: 1546,
        phoneNumber: '1900 5454',
        contactEmail: 'info@khanhphong.vn'
    },
    {
        id: '6',
        name: 'Đà Lạt Ơi',
        logo: 'https://static.vexere.com/production/images/1686760793429.jpeg',
        rating: 4.8,
        reviewCount: 2652,
        phoneNumber: '0263 730 4321',
        contactEmail: 'support@dalatoi.vn'
    },
    {
        id: '7',
        name: 'Huỳnh Gia',
        logo: 'https://static.vexere.com/production/images/1679039059263.jpeg',
        rating: 4.7,
        reviewCount: 7574,
        phoneNumber: '1900 9227',
        contactEmail: 'info@huynhgia.vn'
    },
    {
        id: '8',
        name: 'Thịnh Phát',
        logo: 'https://static.vexere.com/production/images/1683969767481.jpeg',
        rating: 4.6,
        reviewCount: 6211,
        phoneNumber: '1900 2929',
        contactEmail: 'support@thinhphat.vn'
    }
];

// Các tuyến đường
export const routes: Route[] = [
    {
        id: '1',
        origin: { city: 'Hồ Chí Minh', province: 'TP. Hồ Chí Minh' },
        destination: { city: 'Đà Lạt', province: 'Lâm Đồng' },
        distance: 310,
        popularRoute: true,
        imageUrl: 'https://static.vexere.com/production/routeImages/1660582694546.jpeg',
        description: 'Ngắm hoa và thưởng thức cà phê tại thành phố ngàn hoa'
    },
    {
        id: '2',
        origin: { city: 'Hồ Chí Minh', province: 'TP. Hồ Chí Minh' },
        destination: { city: 'Nha Trang', province: 'Khánh Hòa' },
        distance: 420,
        popularRoute: true,
        imageUrl: 'https://static.vexere.com/production/routeImages/1657768074661.jpeg',
        description: 'Thành phố biển với bãi cát trắng, nước biển xanh trong'
    },
    {
        id: '3',
        origin: { city: 'Hà Nội', province: 'Hà Nội' },
        destination: { city: 'Sapa', province: 'Lào Cai' },
        distance: 380,
        popularRoute: true,
        imageUrl: 'https://static.vexere.com/production/routeImages/1652676828830.jpeg',
        description: 'Thị trấn trong sương mù với ruộng bậc thang tuyệt đẹp'
    },
    {
        id: '4',
        origin: { city: 'Hồ Chí Minh', province: 'TP. Hồ Chí Minh' },
        destination: { city: 'Phan Thiết', province: 'Bình Thuận' },
        distance: 220,
        popularRoute: true,
        imageUrl: 'https://static.vexere.com/production/routeImages/1652678006137.jpeg',
        description: 'Thành phố biển nổi tiếng với Đồi cát vàng và Mũi Né'
    },
    {
        id: '5',
        origin: { city: 'Hà Nội', province: 'Hà Nội' },
        destination: { city: 'Hạ Long', province: 'Quảng Ninh' },
        distance: 180,
        popularRoute: true,
        imageUrl: 'https://static.vexere.com/production/routeImages/1652676018441.jpeg',
        description: 'Kỳ quan thiên nhiên thế giới với những đảo đá vôi kỳ vĩ'
    }
];

// Dummy trips và tickets
export const trips: Trip[] = [
    // TP.HCM - Đà Lạt (Hôm nay + 1 ngày)
    {
        id: uuidv4(),
        routeId: '1',
        date: '2025-05-22',
        tickets: [
            {
                id: uuidv4(),
                operatorId: '6',
                price: 400000,
                originalPrice: 450000,
                discount: 11,
                discountType: 'PERCENT',
                promotionDescription: 'Khứ hồi giảm 12%',
                vehicleType: VehicleType.LIMOUSINE,
                departureTime: '23:45',
                arrivalTime: '06:30',
                departureDate: '2025-05-22',
                travelDuration: '6h45m',
                departureStationId: '3',
                arrivalStationId: '7',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.BLANKET,
                    Amenity.WATER
                ],
                availableSeats: 5,
                totalSeats: 24,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH
                ],
                cancellationPolicy: 'Miễn phí hủy trước 12 giờ',
                special: {
                    instantConfirmation: true
                }
            },
            {
                id: uuidv4(),
                operatorId: '5',
                price: 300000,
                originalPrice: 320000,
                discount: 6,
                discountType: 'PERCENT',
                promotionDescription: 'Giảm 20% tối đa 25K',
                vehicleType: VehicleType.SLEEPER_BUS,
                departureTime: '22:50',
                arrivalTime: '05:00',
                departureDate: '2025-05-22',
                travelDuration: '6h10m',
                departureStationId: '2',
                arrivalStationId: '7',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.WATER,
                    Amenity.WC,
                    Amenity.SOCKET
                ],
                availableSeats: 7,
                totalSeats: 32,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.BANK_TRANSFER,
                    PaymentMethod.VNPAY
                ],
                cancellationPolicy: 'Miễn phí hủy trước 24 giờ',
                special: {
                    noAdvancePayment: true
                }
            },
            {
                id: uuidv4(),
                operatorId: '7',
                price: 200000,
                originalPrice: 220000,
                discount: 5,
                discountType: 'PERCENT',
                promotionDescription: 'Khứ hồi giảm 5%',
                vehicleType: VehicleType.SLEEPER_BUS,
                departureTime: '23:10',
                arrivalTime: '05:40',
                departureDate: '2025-05-22',
                travelDuration: '6h30m',
                departureStationId: '2',
                arrivalStationId: '6',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.BLANKET,
                    Amenity.WATER,
                    Amenity.WC
                ],
                availableSeats: 8,
                totalSeats: 34,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH
                ],
                cancellationPolicy: 'Miễn phí hủy trước 24 giờ',
                special: {
                    flashSale: true,
                    flashSalePercent: 27.5
                }
            }
        ]
    },

    // TP.HCM - Đà Lạt (Hôm nay + 3 ngày)
    {
        id: uuidv4(),
        routeId: '1',
        date: '2025-05-24',
        tickets: [
            {
                id: uuidv4(),
                operatorId: '6',
                price: 420000,
                originalPrice: 450000,
                discount: 7,
                discountType: 'PERCENT',
                vehicleType: VehicleType.LIMOUSINE,
                departureTime: '22:00',
                arrivalTime: '05:00',
                departureDate: '2025-05-24',
                travelDuration: '7h00m',
                departureStationId: '3',
                arrivalStationId: '7',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.BLANKET,
                    Amenity.WATER,
                    Amenity.TV
                ],
                availableSeats: 12,
                totalSeats: 24,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH
                ],
                cancellationPolicy: 'Miễn phí hủy trước 12 giờ'
            },
            {
                id: uuidv4(),
                operatorId: '1',
                price: 230000,
                originalPrice: 250000,
                discount: 8,
                discountType: 'PERCENT',
                vehicleType: VehicleType.SLEEPER_BUS,
                departureTime: '23:30',
                arrivalTime: '07:00',
                departureDate: '2025-05-24',
                travelDuration: '7h30m',
                departureStationId: '1',
                arrivalStationId: '6',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.WATER,
                    Amenity.WC,
                    Amenity.SNACK
                ],
                availableSeats: 10,
                totalSeats: 40,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH,
                    PaymentMethod.BANK_TRANSFER
                ],
                cancellationPolicy: 'Miễn phí hủy trước 24 giờ'
            }
        ]
    },

    // TP.HCM - Nha Trang (Hôm nay + 1 ngày)
    {
        id: uuidv4(),
        routeId: '2',
        date: '2025-05-22',
        tickets: [
            {
                id: uuidv4(),
                operatorId: '2',
                price: 350000,
                originalPrice: 380000,
                discount: 8,
                discountType: 'PERCENT',
                vehicleType: VehicleType.SLEEPER_BUS,
                departureTime: '21:30',
                arrivalTime: '05:30',
                departureDate: '2025-05-22',
                travelDuration: '8h00m',
                departureStationId: '1',
                arrivalStationId: '5',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.WATER,
                    Amenity.BLANKET
                ],
                availableSeats: 15,
                totalSeats: 40,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH
                ],
                cancellationPolicy: 'Miễn phí hủy trước 24 giờ'
            },
            {
                id: uuidv4(),
                operatorId: '3',
                price: 430000,
                originalPrice: 450000,
                discount: 4,
                discountType: 'PERCENT',
                vehicleType: VehicleType.LIMOUSINE,
                departureTime: '20:00',
                arrivalTime: '05:00',
                departureDate: '2025-05-22',
                travelDuration: '9h00m',
                departureStationId: '3',
                arrivalStationId: '4',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.WATER,
                    Amenity.TV,
                    Amenity.BLANKET,
                    Amenity.SOCKET,
                    Amenity.READING_LIGHT
                ],
                availableSeats: 3,
                totalSeats: 18,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH,
                    PaymentMethod.VNPAY
                ],
                cancellationPolicy: 'Miễn phí hủy trước 12 giờ',
                special: {
                    earlyBird: true
                }
            }
        ]
    },

    // TP.HCM - Phan Thiết (Hôm nay + 2 ngày)
    {
        id: uuidv4(),
        routeId: '4',
        date: '2025-05-23',
        tickets: [
            {
                id: uuidv4(),
                operatorId: '1',
                price: 180000,
                originalPrice: 200000,
                discount: 10,
                discountType: 'PERCENT',
                vehicleType: VehicleType.SEAT_BUS,
                departureTime: '08:30',
                arrivalTime: '12:30',
                departureDate: '2025-05-23',
                travelDuration: '4h00m',
                departureStationId: '1',
                arrivalStationId: '5',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.WATER
                ],
                availableSeats: 25,
                totalSeats: 45,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH,
                    PaymentMethod.BANK_TRANSFER
                ],
                cancellationPolicy: 'Miễn phí hủy trước 24 giờ'
            },
            {
                id: uuidv4(),
                operatorId: '8',
                price: 250000,
                originalPrice: 270000,
                discount: 7,
                discountType: 'PERCENT',
                vehicleType: VehicleType.LIMOUSINE,
                departureTime: '09:00',
                arrivalTime: '13:00',
                departureDate: '2025-05-23',
                travelDuration: '4h00m',
                departureStationId: '10',
                arrivalStationId: '5',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.WATER,
                    Amenity.SNACK,
                    Amenity.SOCKET
                ],
                availableSeats: 8,
                totalSeats: 16,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH,
                    PaymentMethod.VNPAY
                ],
                cancellationPolicy: 'Miễn phí hủy trước 6 giờ',
                special: {
                    instantConfirmation: true
                }
            }
        ]
    },

    // Hà Nội - Sapa (Hôm nay + 2 ngày)
    {
        id: uuidv4(),
        routeId: '3',
        date: '2025-05-23',
        tickets: [
            {
                id: uuidv4(),
                operatorId: '4',
                price: 370000,
                originalPrice: 400000,
                discount: 8,
                discountType: 'PERCENT',
                vehicleType: VehicleType.LIMOUSINE,
                departureTime: '21:00',
                arrivalTime: '04:30',
                departureDate: '2025-05-23',
                travelDuration: '7h30m',
                departureStationId: '8',
                arrivalStationId: '9',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.BLANKET,
                    Amenity.WATER,
                    Amenity.SOCKET,
                    Amenity.READING_LIGHT
                ],
                availableSeats: 9,
                totalSeats: 20,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH,
                    PaymentMethod.BANK_TRANSFER
                ],
                cancellationPolicy: 'Miễn phí hủy trước 24 giờ'
            },
            {
                id: uuidv4(),
                operatorId: '3',
                price: 280000,
                originalPrice: 300000,
                discount: 7,
                discountType: 'PERCENT',
                vehicleType: VehicleType.SLEEPER_BUS,
                departureTime: '22:00',
                arrivalTime: '06:00',
                departureDate: '2025-05-23',
                travelDuration: '8h00m',
                departureStationId: '8',
                arrivalStationId: '9',
                amenities: [
                    Amenity.WIFI,
                    Amenity.AIR_CONDITIONER,
                    Amenity.WATER,
                    Amenity.BLANKET,
                    Amenity.WC
                ],
                availableSeats: 12,
                totalSeats: 38,
                paymentMethods: [
                    PaymentMethod.CREDIT_CARD,
                    PaymentMethod.MOMO,
                    PaymentMethod.CASH
                ],
                cancellationPolicy: 'Miễn phí hủy trước 12 giờ',
                special: {
                    flashSale: true,
                    flashSalePercent: 15
                }
            }
        ]
    }
];

export default trips;
