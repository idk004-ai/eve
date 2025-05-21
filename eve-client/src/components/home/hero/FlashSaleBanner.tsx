import React from 'react';

const FlashSaleBanner: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        THỨ 3 HÀNG TUẦN - Flash Sale Tưng Bừng
      </h2>
      <div className="flex justify-center items-center">
        <div className="text-xl md:text-3xl font-bold">Giảm</div>
        <div className="text-5xl md:text-7xl font-bold text-yellow-300 mx-2">50</div>
        <div className="text-xl md:text-3xl font-bold">Đến</div>
      </div>
      <p className="text-lg mt-1">Vexere - Cam kết hoàn 150% nếu nhà xe không cung cấp dịch vụ vận chuyển</p>
    </div>
  );
};

export default FlashSaleBanner;
