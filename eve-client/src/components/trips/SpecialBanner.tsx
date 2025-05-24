import React from 'react';

interface SpecialBannerProps {
    text: string;
    icon?: string;
    bgColor?: string;
    textColor?: string;
}

const SpecialBanner: React.FC<SpecialBannerProps> = ({
    text,
    icon = 'emoji_events',
    bgColor = 'bg-orange-500',
    textColor = 'text-white'
}) => {
    return (
        <div className={`${bgColor} ${textColor} p-4 rounded-lg mb-6 flex items-center`}>
            <span className="material-icons mr-2">{icon}</span>
            <span className="font-bold">{text}</span>
        </div>
    );
};

export default SpecialBanner;
