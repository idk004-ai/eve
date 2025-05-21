import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown, FaPhone, FaUser, FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img 
              src="/logo.png" 
              alt="Vexere" 
              className="h-10"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-primary font-medium">
              Đơn hàng của tôi
            </Link>
            <Link to="/" className="text-primary font-medium">
              Mở bán vé trên Vexere
            </Link>
            <div className="relative group">
              <Link to="/" className="text-primary font-medium flex items-center">
                Trở thành đối tác
                <FaChevronDown className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_Kingdom.svg" alt="English" className="h-5 w-8 object-cover mr-1" />
            </div>

            {/* Hotline Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center bg-primary text-white px-4 py-2 rounded-lg"
            >
              <FaPhone className="h-4 w-4 mr-1" />
              Hotline 24/7
            </motion.button>

            {/* User Profile */}
            <button className="flex items-center justify-center bg-gray-100 rounded-full p-2 h-10 w-10">
              <FaUser className="h-5 w-5 text-gray-500" />
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center">
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
