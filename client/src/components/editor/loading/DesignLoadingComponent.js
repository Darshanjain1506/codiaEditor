import React from 'react';

const DesignLoadingComponent = () => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>

            {/* Center Loading Content */}
            <div className="relative z-10 flex flex-col items-center space-y-6">

                {/* Main Loading Spinner */}
                <div className="relative">
                    {/* Outer Ring */}
                    <div className="w-16 h-16 border-4 border-green-100 rounded-full animate-pulse"></div>

                    {/* Spinning Ring */}
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-green-500 border-r-green-500 rounded-full animate-spin"></div>

                    {/* Center Dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Loading Design
                    </h2>

                    {/* Animated Dots */}
                    <div className="flex items-center justify-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DesignLoadingComponent;