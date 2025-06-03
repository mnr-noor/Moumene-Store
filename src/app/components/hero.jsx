"use client";
import React, { useState } from "react";
import CategoryCard from "./CategoryCrd";
import categories from "../data/categories";
import Image from "next/image";
import Logo from "../assets/logo.jpg";

const Hero = () => {
  const [language, setLanguage] = useState("fr");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isRTL = language === "ar";

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${isRTL ? "font-arabic" : ""}`}
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute rounded-full opacity-40 blur-3xl"
          style={{
            width: "900px",
            height: "900px",
            background: `radial-gradient(circle, #4F46E5 0%, #3B82F6 40%, transparent 70%)`,
            top: "-300px",
            left: "-300px",
          }}
        />
        <div
          className="absolute rounded-full opacity-30 blur-3xl"
          style={{
            width: "600px",
            height: "600px",
            background: `radial-gradient(circle, #3B82F6 0%, transparent 70%)`,
            top: "100px",
            right: "-200px",
          }}
        />
      </div>

      {/* Language Toggle */}
      <div className="w-full flex justify-end px-6 pt-6 z-10 relative">
        <button
          onClick={() => setLanguage(language === "fr" ? "ar" : "fr")}
          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 text-gray-700 hover:bg-white/30 transition-all duration-300"
        >
          {language === "fr" ? "العربية" : "Français"}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 pt-20 max-w-7xl mx-auto min-h-[60vh]">
        {!selectedCategory ? (
          // Category Cards
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
                isRTL={isRTL}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        ) : (
          <>
            {/* Back Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition"
            >
              {isRTL ? "العودة إلى القائمة" : "Retour aux catégories"}
            </button>

            {/* Category Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {isRTL ? selectedCategory.titleAr : selectedCategory.title}
            </h2>

            {/* Product Cards (same layout as category cards) */}
            <div className="flex flex-wrap justify-center gap-8">
              {selectedCategory.products.map((product, idx) => (
                <CategoryCard
                  key={idx}
                  title={product.name}
                  subtitle={product.description}
                  imageUrl={product.image}
                  bgColor={selectedCategory.bgColor}
                  productCount={0}
                  isRTL={isRTL}
                  onClick={() => {}}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* About Section */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 pt-20 mt-40">
        <div className="text-center max-w-4xl flex flex-col items-center">
          <Image
            src={Logo}
            alt="Moumene Logo"
            width={112}
            height={112}
            className="rounded-full mb-6 shadow-md object-cover"
          />

          <h1 className="text-5xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isRTL ? "متجر مؤمن" : "Moumene Store"}
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            {isRTL
              ? "يتميز متجر مؤمن بخدماته المتنوعة في المجال الرقمي: إدارة الشبكات الاجتماعية، إنشاء المحتوى المرئي، الحملات الإعلانية المستهدفة، بالإضافة إلى توفير اشتراكات أدوات الذكاء الاصطناعي والبرامج المهنية."
              : "La boutique Moumene propose divers services dans le domaine numérique : gestion des réseaux sociaux, création de contenus visuels, campagnes publicitaires ciblées, ainsi que des abonnements à des outils d'intelligence artificielle et à des logiciels professionnels."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
