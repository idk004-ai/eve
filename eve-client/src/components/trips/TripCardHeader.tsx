import React from 'react';

interface TripCardHeaderProps {
    title: string;
    icon?: string;
}

const TripCardHeader: React.FC<TripCardHeaderProps> = ({ title, icon = 'info' }) => {
    return (
        <div className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg">
            <span className="material-icons mr-2">{icon}</span>
            <span className="font-medium">{title}</span>
        </div>
    );
};

export default TripCardHeader;
