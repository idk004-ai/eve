import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBus, FaStar, FaArrowRight } from 'react-icons/fa';

const PopularRoutesSection: React.FC = () => {
  const popularRoutes = [
    {
      image: 'https://example.com/bus-interior-1.jpg',
      title: 'Tuyến Hà Nội - Hải Phòng',
      buses: 35,
      price: '120.000đ',
      rating: 4.8,
    },
    {
      image: 'https://example.com/bus-interior-2.jpg',
      title: 'Tuyến Hà Nội - Sapa',
      buses: 28,
      price: '250.000đ',
      rating: 4.9,
    },
    {
      image: 'https://example.com/bus-interior-3.jpg',
      title: 'Tuyến TP.HCM - Đà Lạt',
      buses: 42,
      price: '280.000đ',
      rating: 4.7,
    },
    {
      image: 'https://example.com/bus-interior-4.jpg',
      title: 'Tuyến TP.HCM - Vũng Tàu',
      buses: 50,
      price: '150.000đ',
      rating: 4.8,
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Tuyến đường phổ biến</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.map((route, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-48 bg-gray-200">
                <img 
                  src={route.image} 
                  alt={route.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x200?text=Bus+Interior';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-medium">{route.title}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <div className="flex items-center">
                    <FaBus className="h-4 w-4 mr-1" />
                    {route.buses} nhà xe
                  </div>
                  <div className="flex items-center">
                    <FaStar className="h-4 w-4 mr-1 text-yellow-400" />
                    {route.rating}
                  </div>
                </div>
                  <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-primary">{route.price}</span>
                    <span className="text-gray-500 text-xs ml-1">từ</span>
                  </div>
                  
                  <Link to={`/routes/${index}`} className="inline-flex items-center text-sm text-primary font-medium hover:underline">
                    Xem chi tiết
                    <FaArrowRight className="ml-1 h-3 w-3 text-primary" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/routes" className="inline-block border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
            Xem thêm tuyến đường
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutesSection;
