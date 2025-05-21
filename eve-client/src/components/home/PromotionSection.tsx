import React from 'react';
import { motion } from 'framer-motion';

interface PromotionCardProps {
  image: string;
  title: string;
  description: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ image, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

interface PromotionSectionProps {
  title: string;
}

const PromotionSection: React.FC<PromotionSectionProps> = ({ title }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  // Function to handle scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 340; // Approximate width of card + padding
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  const promotions = [
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/chot-deal-50.jpg",
      title: "Lướng vé chốt deal - Giảm đến 50% vào ngày 25 hàng tháng",
      description: "Chương trình giảm giá đặc biệt chỉ diễn ra vào ngày 25 hàng tháng."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/thu-3-flash-sale.jpg",
      title: "12h - 14h Thứ 3 - Flash Sale đến 50%",
      description: "Giảm giá sốc chỉ trong 2 tiếng vào thứ 3 hàng tuần."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/xe-hai-phong.jpg",
      title: "Giảm 50% khi đặt xe limousine Hải Phòng cho khách hàng lần đầu tiên đặt dịch vụ đi chuyển tại Vexere",
      description: "Ưu đãi đặc biệt cho khách hàng mới trên tuyến Hà Nội - Hải Phòng."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/khuyenmai.jpg",
      title: "Giảm ngay 120K khi thanh toán bằng VPBank",
      description: "Thanh toán bằng thẻ VPBank để nhận ưu đãi đặc biệt."
    },
    // Additional dummy data
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/chot-deal-50.jpg",
      title: "Ưu đãi cuối tuần - Giảm 30% cho mọi hành trình",
      description: "Áp dụng cho tất cả các chuyến đi vào ngày thứ 7 và Chủ nhật."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/thu-3-flash-sale.jpg",
      title: "Combo tiết kiệm - Đặt 2 vé chỉ với giá 1.5 vé",
      description: "Chương trình dành cho nhóm bạn và gia đình khi đi cùng nhau."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/xe-hai-phong.jpg",
      title: "Tặng vé xe buýt miễn phí khi đặt vé xe khách liên tỉnh",
      description: "Áp dụng cho tất cả các tuyến từ Hà Nội đi các tỉnh phía Bắc."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/khuyenmai.jpg",
      title: "Đăng ký thành viên mới - Giảm ngay 100K cho chuyến đi đầu tiên",
      description: "Chương trình khuyến mãi dành cho khách hàng lần đầu sử dụng dịch vụ."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/chot-deal-50.jpg",
      title: "Ưu đãi sinh nhật - Tặng 50% cho ngày đặc biệt của bạn",
      description: "Nhập mã BIRTHDAY khi đặt vé trong tháng sinh nhật để nhận ưu đãi."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/thu-3-flash-sale.jpg",
      title: "Khuyến mãi tháng 6 - Du lịch hè giảm đến 40%",
      description: "Áp dụng cho tất cả các tuyến đường hot trong mùa du lịch hè 2025."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/xe-hai-phong.jpg",
      title: "Quà tặng đặc biệt khi thanh toán qua MoMo",
      description: "Nhận ngay voucher 50K khi thanh toán qua ví điện tử MoMo."
    },
    {
      image: "https://storage.googleapis.com/fe-production/images/promotion/khuyenmai.jpg",
      title: "Combo du lịch tiết kiệm - Vé xe + Khách sạn giảm 25%",
      description: "Đặt combo tiết kiệm hơn khi du lịch cùng đối tác của chúng tôi."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="flex space-x-2">
            <button 
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              onClick={() => handleScroll('left')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              onClick={() => handleScroll('right')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <motion.div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {promotions.map((promo, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0"
              >
                <PromotionCard 
                  image={promo.image} 
                  title={promo.title} 
                  description={promo.description} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
