import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-6 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Routes and Travel Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-lg mb-5">Tuyến đường</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Xe đi Buôn Mê Thuột từ Sài Gòn</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe đi Vũng Tàu từ Sài Gòn</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe đi Nha Trang từ Sài Gòn</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe đi Đà Lạt từ Sài Gòn</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe đi Sapa từ Hà Nội</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe đi Hải Phòng từ Hà Nội</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe đi Vinh từ Hà Nội</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5">Xe Limousine</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Xe Limousine đi Đà Lạt từ Sài Gòn</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe Limousine đi Vũng Tàu từ Sài Gòn</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe Limousine đi Nha Trang từ Sài Gòn</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe Limousine đi Hải Phòng từ Hà Nội</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe Limousine đi Hạ Long từ Hà Nội</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe Limousine đi Sapa Từ Hà Nội</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe Limousine đi Quảng Ninh từ Hà Nội</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5">Tin tức</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao</Link></li>
              <li><Link to="/" className="hover:text-primary">Review xe limousine đi Đà Lạt: những câu hỏi thường gặp</Link></li>
              <li><Link to="/" className="hover:text-primary">Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5">Bến xe</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><Link to="/" className="hover:text-primary">Bến xe Miền Đông</Link></li>
              <li><Link to="/" className="hover:text-primary">Bến xe Trung tâm Đà Nẵng</Link></li>
              <li><Link to="/" className="hover:text-primary">Bến xe Gia Lâm</Link></li>
              <li><Link to="/" className="hover:text-primary">Bến xe Mỹ Đình</Link></li>
              <li><Link to="/" className="hover:text-primary">Bến xe An Sương</Link></li>
              <li><Link to="/" className="hover:text-primary">Bến xe Nước Ngầm</Link></li>
              <li><Link to="/" className="hover:text-primary">Bến xe Miền Tây</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Nhà xe Section */}
        <div className="mb-10">
          <h3 className="font-bold text-lg mb-5">Nhà xe</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link to="/" className="hover:text-primary">Xe Liên Hưng</Link>
            <Link to="/" className="hover:text-primary">Xe Thuận Tiến</Link>
            <Link to="/" className="hover:text-primary">Xe Điền Linh</Link>
            <Link to="/" className="hover:text-primary">Xe Đồng Phước</Link>
            <Link to="/" className="hover:text-primary">Xe Long Vân Limousine</Link>
            <Link to="/" className="hover:text-primary">Xe Khanh Phong</Link>
            <Link to="/" className="hover:text-primary">Xe Tuấn Hưng</Link>
            <Link to="/" className="hover:text-primary">Xe Hảo</Link>
            <Link to="/" className="hover:text-primary">Xe Vie Limousine</Link>
            <Link to="/" className="hover:text-primary">Xe Tiến Oanh</Link>
            <Link to="/" className="hover:text-primary">Xe Phong Phú</Link>
            <Link to="/" className="hover:text-primary">Xe Hoa Mai</Link>
            <Link to="/" className="hover:text-primary">Xe Cúc Tùng</Link>
            <Link to="/" className="hover:text-primary">Xe Hạnh Cafe</Link>
            <Link to="/" className="hover:text-primary">Xe Trà Lan Viên</Link>
            <Link to="/" className="hover:text-primary">Xe Minh Quốc</Link>
            <Link to="/" className="hover:text-primary">Xe An Phú Buslines</Link>
            <Link to="/" className="hover:text-primary">Xe Tân Kim Chi</Link>
            <Link to="/" className="hover:text-primary">Xe Nam Quỳnh Anh</Link>
            <Link to="/" className="hover:text-primary">Xe An Phú Quý</Link>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-lg mb-5">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Hướng dẫn thanh toán</Link></li>
              <li><Link to="/" className="hover:text-primary">Quy chế Vexere.com</Link></li>
              <li><Link to="/" className="hover:text-primary">Chính sách bảo mật thông tin</Link></li>
              <li><Link to="/" className="hover:text-primary">Chính sách bảo mật thanh toán</Link></li>
              <li><Link to="/" className="hover:text-primary">Chính sách và quy trình giải quyết tranh chấp, khiếu nại</Link></li>
              <li><Link to="/" className="hover:text-primary">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5">Về chúng tôi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Giới Thiệu Vexere.com</Link></li>
              <li><Link to="/" className="hover:text-primary">Tuyển dụng</Link></li>
              <li><Link to="/" className="hover:text-primary">Tin tức</Link></li>
              <li><Link to="/" className="hover:text-primary">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5">Trở thành đối tác</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500">HỆ THỐNG QUẢN LÝ NHÀ XE</Link></li>
              <li><Link to="/" className="hover:text-primary">Phần mềm quản lý nhà xe</Link></li>
              <li><Link to="/" className="hover:text-primary">App quản lý nhà xe</Link></li>
              <li><Link to="/" className="hover:text-primary">App tài xế</Link></li>
              <li><Link to="/" className="hover:text-primary">Website / App thương hiệu riêng cho nhà xe</Link></li>
              <li><Link to="/" className="text-gray-500">HỆ THỐNG QUẢN LÝ HÀNG HOÁ</Link></li>
              <li><Link to="/" className="hover:text-primary">Phần mềm quản lý hàng hoá</Link></li>
              <li><Link to="/" className="hover:text-primary">App quản lý hàng hoá</Link></li>
              <li><Link to="/" className="text-gray-500">ĐẠI LÝ</Link></li>
              <li><Link to="/" className="hover:text-primary">Phần mềm đại lý</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            {/* Certificates */}
            <div>
              <h3 className="font-bold text-lg mb-5">Chứng nhận</h3>
              <div className="flex space-x-4">
                <img src="https://storage.googleapis.com/fe-production/images/verified-by-visa.svg" alt="Verified by VISA" className="h-12" />
                <img src="https://storage.googleapis.com/fe-production/images/mastercard-securecode.svg" alt="MasterCard SecureCode" className="h-12" />
              </div>
            </div>
            
            {/* Connect with Vexere */}
            <div>
              <h3 className="font-bold text-lg mb-5">Kết nối với Vexere</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600">
                  <FaFacebookF size={32} />
                </a>
                <a href="#" className="text-red-600">
                  <FaYoutube size={32} />
                </a>
                <a href="#" className="text-black">
                  <FaTiktok size={32} />
                </a>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div>
              <h3 className="font-bold text-lg mb-5">Phương thức thanh toán</h3>
              <div className="grid grid-cols-4 gap-2">
                <img src="https://storage.googleapis.com/fe-production/images/visa.svg" alt="VISA" className="h-8" />
                <img src="https://storage.googleapis.com/fe-production/images/mastercard.svg" alt="MasterCard" className="h-8" />
                <img src="https://storage.googleapis.com/fe-production/images/jcb.svg" alt="JCB" className="h-8" />
                <img src="https://storage.googleapis.com/fe-production/images/momo.svg" alt="MoMo" className="h-8" />
                <img src="https://vexere.com/images/icons/zalopay.svg" alt="ZaloPay" className="h-8" />
                <img src="https://storage.googleapis.com/fe-production/images/shopee-pay.svg" alt="ShopeePay" className="h-8" />
                <img src="https://vexere.com/images/icons/vnpay.png" alt="VNPAY" className="h-8" />
                <img src="https://storage.googleapis.com/fe-production/images/viettel-money.svg" alt="Viettel Money" className="h-8" />
              </div>
            </div>
            
            {/* Download App */}
            <div>
              <h3 className="font-bold text-lg mb-5">Tải ứng dụng Vexere</h3>
              <div className="flex space-x-4">
                <img src="https://vexere.com/images/icons/qr-code.webp" alt="QR Code" className="h-24" />
                <div className="flex flex-col space-y-2">
                  <a href="#" className="block">
                    <img src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/apple-store.svg" alt="App Store" className="h-10" />
                  </a>
                  <a href="#" className="block">
                    <img src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/play-store.svg" alt="Google Play" className="h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center text-gray-500 mt-10">
          <h3 className="font-bold text-gray-800 mb-3">Công ty TNHH Thương Mại Dịch Vụ Vexere</h3>
          <p>Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam</p>
          <p>Địa chỉ: Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu, Phường 6, Quận 4, Tp. Hồ Chí Minh, Việt Nam</p>
          <p>Tầng 3, Tòa nhà 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội, Việt Nam</p>
          <p>Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh cấp lần đầu ngày 27/6/2018</p>
          <p className="mt-2">Bản quyền © 2025 thuộc về Vexere.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
