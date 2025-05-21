import React from 'react';
import { motion } from 'framer-motion';

interface PromotionDateProps {
  day: string;
  month: string;
}

const PromotionDate: React.FC<PromotionDateProps> = ({ day, month }) => {
  return (
    <motion.div
      className="bg-blue-600 p-3 rounded-lg inline-block"
      whileHover={{ y: -5 }}
    >
      <div className="text-sm opacity-80">Ngày</div>
      <div className="font-bold text-xl">{day}/{month}</div>
    </motion.div>
  );
};

const PromotionDates: React.FC = () => {
  const dates = [
    { day: '6', month: '5' },
    { day: '13', month: '5' },
    { day: '20', month: '5' },
    { day: '27', month: '5' }
  ];

  return (
    <div className="flex justify-center space-x-6 mt-6 text-center">
      {dates.map((date, index) => (
        <PromotionDate key={index} day={date.day} month={date.month} />
      ))}
    </div>
  );
};

export default PromotionDates;
