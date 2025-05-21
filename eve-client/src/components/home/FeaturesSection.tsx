import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHeadset, FaGift, FaCreditCard } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaCheckCircle className="h-6 w-6" />,
      title: 'Chắc chắn có chỗ',
      description: 'Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển'
    },
    {
      icon: <FaHeadset className="h-6 w-6" />,
      title: 'Hỗ trợ 24/7',
      description: 'Tổng đài hỗ trợ khách hàng 24/7'
    },
    {
      icon: <FaGift className="h-6 w-6" />,
      title: 'Nhiều ưu đãi',
      description: 'Hàng ngàn ưu đãi cực chất độc quyền tại Vexere'
    },
    {
      icon: <FaCreditCard className="h-6 w-6" />,
      title: 'Thanh toán đa dạng',
      description: 'Nhiều hình thức thanh toán tiện lợi và an toàn'
    }
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <div className="text-blue-500">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
