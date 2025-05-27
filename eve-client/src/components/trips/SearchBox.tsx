import React from 'react';

interface SearchBoxProps {
    searchParams: {
        origin: string;
        destination: string;
        date: string;
    };
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
    searchParams,
    activeTab,
    setActiveTab
}) => {
    return (
        <div className="bg-white rounded-lg p-4 mb-6 shadow">
            <div className="flex items-center justify-between">
                <div className="flex space-x-4 items-center">
                    <div className="flex flex-1 space-x-2 items-center">
                        {/* Transport tabs */}
                        <div className="flex border-b border-blue-500 w-full">
                            <div
                                onClick={() => setActiveTab('bus')}
                                className={`flex items-center px-4 py-2 cursor-pointer ${activeTab === 'bus' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                            >
                                <span className="material-icons mr-1">directions_bus</span>
                                <span className="font-medium">110K</span>
                            </div>
                            <div
                                onClick={() => setActiveTab('plane')}
                                className={`flex items-center px-4 py-2 cursor-pointer ${activeTab === 'plane' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                            >
                                <span className="material-icons mr-1">flight</span>
                                <span className="font-medium relative">
                                    Máy bay
                                    <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs px-1 rounded">20K</span>
                                </span>
                            </div>
                            <div
                                onClick={() => setActiveTab('train')}
                                className={`flex items-center px-4 py-2 cursor-pointer ${activeTab === 'train' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                            >
                                <span className="material-icons mr-1">train</span>
                                <span className="font-medium">134K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-4 space-x-2">
                <div className="flex-1 relative">
                    <div className="border rounded-lg p-2 bg-gray-50 flex items-center">
                        <div className="text-blue-500 mr-2">
                            <span className="material-icons">adjust</span>
                        </div>
                        <div>
                            <div className="text-xs text-gray-400">Nơi xuất phát</div>
                            <div className="font-medium">{searchParams.origin}</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-white rounded-full p-2 shadow">
                        <span className="material-icons">swap_horiz</span>
                    </button>
                </div>

                <div className="flex-1 relative">
                    <div className="border rounded-lg p-2 bg-gray-50 flex items-center">
                        <div className="text-red-500 mr-2">
                            <span className="material-icons">place</span>
                        </div>
                        <div>
                            <div className="text-xs text-gray-400">Nơi đến</div>
                            <div className="font-medium">{searchParams.destination}</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className="border rounded-lg p-2 bg-gray-50 flex items-center">
                        <div className="text-blue-500 mr-2">
                            <span className="material-icons">calendar_today</span>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-gray-400">Ngày đi</div>
                            <div className="font-medium">{searchParams.date}</div>
                        </div>
                        <button className="text-blue-500 hover:bg-blue-50 rounded px-2">
                            <span className="material-icons">add</span>
                            <span className="text-sm">Thêm ngày về</span>
                        </button>
                    </div>
                </div>

                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-2 rounded-lg">
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
