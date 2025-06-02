"use client";
import React, { useState } from "react";
import Image from "next/image";

const CategoryCard = ({
  title = "Service Category",
  subtitle = "Description",
  titleAr = "فئة الخدمة",
  subtitleAr = "الوصف",
  imageUrl,
  bgColor = "from-gray-400 to-gray-600",
  productCount = 0,
  isRTL = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const displayTitle = isRTL ? titleAr : title;
  const displaySubtitle = isRTL ? subtitleAr : subtitle;

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
      style={{
        width: "280px",
        height: "320px",
        direction: isRTL ? "rtl" : "ltr"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute top-4 ${
          isRTL ? "right-4" : "left-4"
        } z-20 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-800 text-sm font-medium border border-white/30 shadow-lg`}
      >
        {productCount} {isRTL ? "منتج" : "Produits"}
      </div>

      <div className="relative w-full h-48 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-20 z-10`}
        ></div>

        {!imageError ? (
          <Image
            src={imageUrl}
            alt={displayTitle}
            fill
            sizes="100%"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${bgColor} flex items-center justify-center`}
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <div className="w-12 h-12 bg-white/30 rounded-xl"></div>
            </div>
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-60" : "opacity-30"
          }`}
        ></div>
      </div>

      <div className="relative p-6 bg-white/90 backdrop-blur-sm h-32 flex flex-col justify-center">
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${bgColor}`}
        ></div>

        <div className={`text-center ${isRTL ? "font-arabic" : ""}`}>
          <h3
            className={`text-xl font-bold text-gray-800 mb-2 transition-all duration-300 ${
              isHovered ? "text-gray-900" : ""
            } ${isRTL ? "text-right" : "text-left"} line-clamp-1`}
          >
            {displayTitle}
          </h3>
          <p
            className={`text-gray-600 text-sm transition-all duration-300 ${
              isHovered ? "text-gray-700" : ""
            } ${isRTL ? "text-right" : "text-left"} line-clamp-2`}
          >
            {displaySubtitle}
          </p>
        </div>

        <div
          className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${bgColor} rounded-full transition-all duration-300 ${
            isHovered ? "w-20 opacity-100" : "w-8 opacity-60"
          }`}
        ></div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-5" : ""
        } pointer-events-none rounded-3xl`}
      ></div>
    </div>
  );
};

export default CategoryCard;
