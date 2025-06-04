"use client";
import React, { useState } from "react";
import CategoryCard from "./CategoryCrd";
import categories from "../data/categories";
import Image from "next/image";
import Logo from "../assets/logo.jpg";

const Hero = () => {
  const [language, setLanguage] = useState("fr");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const isRTL = language === "ar";

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        isRTL ? "font-arabic" : ""
      }`}
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

            {/* Product Cards */}
            <div className="flex flex-wrap justify-center gap-8">
              {selectedCategory.products.map((product, idx) => (
                <CategoryCard
                  key={idx}
                  title={product.name}
                  subtitle={
                    product.shortDescription || product.description || ""
                  }
                  imageUrl={product.image}
                  bgColor={selectedCategory.bgColor}
                  isRTL={isRTL}
                  onClick={() => setModalProduct(product)}
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

          <h1 className="text-5xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
                Moumene Store
              </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
  {isRTL ? (
    "في moumene store، بدأنا رحلتنا في عالم المنتجات الرقمية عام 2022، ومنذ ذلك الحين وضعنا الجودة والموثوقية في صميم كل ما نقدمه. نلتزم بتوفير خدمات رقمية احترافية، سواء كنت تبحث عن اشتراكات، حلول رقمية، أو دعم سريع وآمن. عملاؤنا يثقون بنا لأننا نركز على التفاصيل، ونحرص على تقديم تجربة سلسة ومرضية من أول تواصل حتى ما بعد البيع. اختر moumene store… حيث تلتقي الجودة بالثقة."
  ) : (
    "Chez Moumene Store, nous avons commencé notre aventure dans le monde des produits digitaux en 2022, en plaçant depuis toujours la qualité et la fiabilité au cœur de nos services. Nous nous engageons à fournir des prestations numériques professionnelles, que vous recherchiez des abonnements, des solutions digitales ou un support rapide et sécurisé. Nos clients nous font confiance grâce à notre souci du détail et notre volonté de garantir une expérience fluide et satisfaisante, du premier contact jusqu’au service après-vente. Choisissez Moumene Store… là où la qualité rencontre la confiance."
  )}
</p>

        </div>
      </div>

      {/* Product Details Modal */}
      {modalProduct && (
        <div
        className="fixed inset-0 z-50 flex justify-center items-center p-6 overflow-auto bg-black/40 backdrop-blur-md animate-fadeIn"
        onClick={() => setModalProduct(null)}
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 relative`}
            onClick={(e) => e.stopPropagation()}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 text-4xl font-bold transition-colors"
              onClick={() => setModalProduct(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Image */}
            <div className="relative h-72 w-full rounded-xl overflow-hidden mb-8 shadow-md">
              <Image
                src={modalProduct.image}
                alt={modalProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            {/* Title */}
            <h2
              className={`text-4xl font-extrabold mb-5 text-gray-900 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {modalProduct.name}
            </h2>

            {/* Description */}
            <p
              className={`text-gray-700 text-lg mb-8 leading-relaxed whitespace-pre-line ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {Array.isArray(modalProduct.description)
                ? modalProduct.description.join("\n\n")
                : modalProduct.description}
            </p>

            {/* Pricing */}
            {modalProduct.pricing && modalProduct.pricing.length > 0 ? (
              <section
                className={`mb-8 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">
                  {isRTL ? "الأسعار" : "Pricing"}
                </h3>
                <ul className="space-y-3">
                  {modalProduct.pricing.map(({ duration, price }, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-100 rounded-lg p-4 shadow-sm flex justify-between items-center font-medium text-gray-800"
                    >
                      <span>{duration}</span>
                      <span className="text-blue-600 font-bold">{price}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              modalProduct.price && (
                <p
                  className={`text-xl font-semibold mb-6 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {isRTL ? "السعر: " : "Price: "} {modalProduct.price}
                </p>
              )
            )}

            {/* Notes */}
            {modalProduct.notes && (
              <p
                className={`text-gray-600 text-sm mt-4 border-t border-gray-200 pt-4 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {modalProduct.notes}
              </p>
            )}
          </div>

          {/* Animation styles */}
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.25s ease forwards;
            }
            /* Custom scrollbar */
            div::-webkit-scrollbar {
              width: 8px;
            }
            div::-webkit-scrollbar-thumb {
              background-color: rgba(100, 100, 100, 0.4);
              border-radius: 4px;
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Hero;
