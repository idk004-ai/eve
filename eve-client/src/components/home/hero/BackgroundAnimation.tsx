import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"></div>
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-10 left-10 w-12 h-12 bg-yellow-300 opacity-20 rounded-full"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-blue-300 opacity-20 rounded-full"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
