    import React from 'react';

    const CategoryCard = ({ 
    title = "Scripts", 
    subtitle = "Notes & Journalism", 
    icon: IconComponent,
    bgColor = "from-blue-300 to-blue-500",
    showSettings = true 
    }) => {
    return (
        <div className={`relative w-64 h-64 bg-gradient-to-br ${bgColor} rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md border border-white/20`}
        style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
        }}>
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
        
        
        
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
            <div className="absolute bg-white bg-opacity-80 rounded-xl shadow-lg transform rotate-12 translate-x-4 translate-y-3"
                style={{ width: '70px', height: '85px' }}>
                <div className="p-3">
                <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-3/4 h-1.5 bg-gray-300 rounded mb-1"></div>
                <div className="w-full h-1.5 bg-gray-300 rounded mb-1"></div>
                <div className="w-2/3 h-1.5 bg-gray-300 rounded"></div>
                </div>
            </div>
            
            <div className="absolute bg-white bg-opacity-85 rounded-xl shadow-lg transform -rotate-6 translate-x-2 translate-y-1"
                style={{ width: '70px', height: '85px' }}>
                <div className="p-3">
                <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-2/3 h-1.5 bg-gray-300 rounded mb-1"></div>
                <div className="w-full h-1.5 bg-gray-300 rounded mb-1"></div>
                <div className="w-3/4 h-1.5 bg-gray-300 rounded"></div>
                </div>
            </div>
            
            <div className="relative bg-white bg-opacity-95 rounded-xl shadow-lg transform rotate-3"
                style={{ width: '70px', height: '85px' }}>
                <div className="p-3 h-full flex flex-col items-center justify-center">
                <IconComponent size={32} className="text-blue-500 mb-2" />
                <div className="w-full h-1.5 bg-gray-200 rounded mb-1"></div>
                <div className="w-2/3 h-1.5 bg-gray-200 rounded"></div>
                </div>
            </div>
            </div>
        </div>
        
        <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="text-white text-m opacity-100">{subtitle}</p>
        </div>
        </div>
    );
    };

    export default CategoryCard;
