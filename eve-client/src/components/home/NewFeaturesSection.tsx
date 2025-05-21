import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewFeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Vexere có gì mới?",
      items: [
        {
          image: "https://storage.googleapis.com/fe-production/images/affiliate.png",
          title: "Tăng thu nhập không giới hạn với Vexere Affiliate",
          link: "/affiliate"
        },
        {
          image: "https://storage.googleapis.com/fe-production/images/train-ticket.png",
          title: "Vexere chính thức ra mắt dịch vụ đặt vé tàu hỏa",
          link: "/train-tickets"
        },
        {
          image: "https://storage.googleapis.com/fe-production/images/insurance.jpg",
          title: "Bảo hiểm chuyến đi chính thức ra mắt tại Vexere",
          link: "/travel-insurance"
        },
        {
          image: "https://storage.googleapis.com/fe-production/images/bidv.jpg",
          title: "BIDV ra mắt thẻ đồng thương hiệu BIDV-Vexere",
          link: "/bidv-partnership"
        }
      ]
    },
    {
      id: 2,
      title: "Tính năng mới",
      items: [
        {
          image: "https://storage.googleapis.com/fe-production/images/gps-feature.jpg",
          title: "Chủ động và an tâm hơn trong mỗi hành trình với tính năng GPS định vị xe khách",
          link: "/gps-tracking"
        },
        {
          image: "https://storage.googleapis.com/fe-production/images/gps-instructions.jpg",
          title: "Cách sử dụng tính năng GPS xem vị trí xe khách",
          link: "/gps-instructions"
        },
        {
          image: "https://storage.googleapis.com/fe-production/images/routes-gps.jpg",
          title: "Các tuyến đường/nhà xe có hỗ trợ tính năng xem vị trí xe",
          link: "/gps-supported-routes"
        },
        {
          image: "https://storage.googleapis.com/fe-production/images/bidv-feature.jpg",
          title: "Bật trạng thái nhận thông báo khi có ưu đãi mới",
          link: "/notifications"
        }
      ]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {features.map((section) => (
        <section key={section.id} className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                >
                  <Link to={item.link}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/300x200?text=Feature+Image';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-800 font-medium line-clamp-2 hover:text-blue-600 transition-colors">{item.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default NewFeaturesSection;
