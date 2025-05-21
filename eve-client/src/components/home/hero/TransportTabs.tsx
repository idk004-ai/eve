import React from 'react';
import { FaBus, FaPlane, FaTrain, FaCar } from 'react-icons/fa';

interface TransportTabsProps {
  activeTransportTab: 'bus' | 'plane' | 'train' | 'car';
  setActiveTransportTab: (tab: 'bus' | 'plane' | 'train' | 'car') => void;
}

const TransportTabs: React.FC<TransportTabsProps> = ({ 
  activeTransportTab, 
  setActiveTransportTab 
}) => {
  return (
    <div className="flex">
      <button
        onClick={() => setActiveTransportTab('bus')}
        className={`flex-1 py-4 px-4 flex justify-center items-center ${activeTransportTab === 'bus' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
      >
        <FaBus className="h-6 w-6 mr-2" />
        Xe khách
        {activeTransportTab === 'bus' && (
          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">20K</span>
        )}
      </button>
      <button
        onClick={() => setActiveTransportTab('plane')}
        className={`flex-1 py-4 px-4 flex justify-center items-center ${activeTransportTab === 'plane' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
      >
        <FaPlane className="h-6 w-6 mr-2" />
        Máy bay
      </button>
      <button
        onClick={() => setActiveTransportTab('train')}
        className={`flex-1 py-4 px-4 flex justify-center items-center ${activeTransportTab === 'train' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
      >
        <FaTrain className="h-6 w-6 mr-2" />
        Tàu hỏa
      </button>
      <button
        onClick={() => setActiveTransportTab('car')}
        className={`flex-1 py-4 px-4 flex justify-center items-center ${activeTransportTab === 'car' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
      >
        <FaCar className="h-6 w-6 mr-2" />
        Thuê xe
        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">Mới</span>
      </button>
    </div>
  );
};

export default TransportTabs;
