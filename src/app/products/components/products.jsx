"use client";
import React, { useState, useMemo } from "react";
import CategoryCard from "../../components/CategoryCrd";
import categories from "../../data/categories";
import Image from "next/image";
import Logo from "../../assets/logo.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  
  // Filter states for modal
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedScreens, setSelectedScreens] = useState("all");
  const [selectedActivation, setSelectedActivation] = useState("all");

  const getLocalized = (item, field) => item[field];

  // Reset filters when modal closes
  const closeModal = () => {
    setModalProduct(null);
    setSelectedDuration("all");
    setSelectedScreens("all");
    setSelectedActivation("all");
  };

  // Extract unique durations from pricing
  const getUniqueDurations = (pricing) => {
    if (!pricing || !Array.isArray(pricing)) return [];
    const durations = pricing.map(item => {
      // Extract duration number (1, 2, 3, 6, 12)
      const match = item.duration.match(/(\d+)\s*mois/);
      return match ? parseInt(match[1]) : null;
    }).filter(Boolean);
    return [...new Set(durations)].sort((a, b) => a - b);
  };

  // Extract unique screen options from pricing
  const getUniqueScreens = (pricing) => {
    if (!pricing || !Array.isArray(pricing)) return [];
    const screens = pricing.map(item => {
      // Extract screen information
      if (item.duration.includes("1 écran")) return "1";
      if (item.duration.includes("2 écrans")) return "2";
      if (item.duration.includes("3 écrans")) return "3";
      if (item.duration.includes("4 écrans")) return "4";
      if (item.duration.includes("5 écrans")) return "5";
      if (item.duration.includes("6 écrans")) return "6";
      if (item.duration.includes("7 écrans")) return "7";
      if (item.duration.includes("20 écrans")) return "20";
      if (item.duration.includes("votre email")) return "multiple";
      return null;
    }).filter(Boolean);
    return [...new Set(screens)];
  };

  // Extract unique activation methods for Snapchat+
  const getUniqueActivationMethods = (pricing) => {
    if (!pricing || !Array.isArray(pricing)) return [];
    const methods = pricing.map(item => {
      if (item.duration.includes("تفعيل على Android")) return "android";
      if (item.duration.includes("تفعيل مباشر على iPhone")) return "iphone";
      if (item.duration.includes("تفعيل عبر اليوزر فقط")) return "username";
      return null;
    }).filter(Boolean);
    return [...new Set(methods)];
  };

  // Filter pricing based on selected filters
  const getFilteredPricing = (pricing) => {
    if (!pricing || !Array.isArray(pricing)) return [];

    return pricing.filter(item => {
      // Duration filter
      if (selectedDuration !== "all") {
        const durationMatch = item.duration.match(/(\d+)\s*mois/);
        const itemDuration = durationMatch ? parseInt(durationMatch[1]) : null;
        if (itemDuration !== parseInt(selectedDuration)) return false;
      }

      // Screen filter
      if (selectedScreens !== "all") {
        let itemScreens = null;
        if (item.duration.includes("1 écran")) itemScreens = "1";
        else if (item.duration.includes("2 écrans")) itemScreens = "2";
        else if (item.duration.includes("3 écrans")) itemScreens = "3";
        else if (item.duration.includes("4 écrans")) itemScreens = "4";
        else if (item.duration.includes("5 écrans")) itemScreens = "5";
        else if (item.duration.includes("6 écrans")) itemScreens = "6";
        else if (item.duration.includes("7 écrans")) itemScreens = "7";
        else if (item.duration.includes("20 écrans")) itemScreens = "20";
        else if (item.duration.includes("votre email")) itemScreens = "multiple";

        if (itemScreens !== selectedScreens) return false;
      }

      // Activation method filter (for Snapchat+)
      if (selectedActivation !== "all") {
        let itemActivation = null;
        if (item.duration.includes("تفعيل على Android")) itemActivation = "android";
        else if (item.duration.includes("تفعيل مباشر على iPhone")) itemActivation = "iphone";
        else if (item.duration.includes("تفعيل عبر اليوزر فقط")) itemActivation = "username";

        if (itemActivation !== selectedActivation) return false;
      }

      return true;
    });
  };

  // Get filter options for current modal product
  const filterOptions = useMemo(() => {
    if (!modalProduct || !modalProduct.pricing) return { durations: [], screens: [], activations: [] };

    return {
      durations: getUniqueDurations(modalProduct.pricing),
      screens: getUniqueScreens(modalProduct.pricing),
      activations: getUniqueActivationMethods(modalProduct.pricing)
    };
  }, [modalProduct]);

  // Check if product is Snapchat+
  const isSnapchatPlus = modalProduct && modalProduct.name === "Snapchat+";

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ direction: "rtl" }}>
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

      <div className="relative mt-30 z-10 p-8 pt-20 max-w-7xl mx-auto min-h-[60vh]">
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        ) : (
          <>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition"
            >
              العودة إلى القائمة
            </button>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {getLocalized(selectedCategory, "title")}
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
              {selectedCategory.products.map((product, idx) => (
                <CategoryCard
                  key={idx}
                  title={getLocalized(product, "name")}
                  subtitle={
                    getLocalized(product, "shortDescription") ||
                    getLocalized(product, "description") ||
                    ""
                  }
                  imageUrl={product.image}
                  bgColor={selectedCategory.bgColor}
                  onClick={() => setModalProduct(product)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {modalProduct && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-6 overflow-auto bg-black/40 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 text-4xl font-bold transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="relative h-72 w-full rounded-xl overflow-hidden mb-8 shadow-md">
              <Image
                src={modalProduct.image}
                alt={getLocalized(modalProduct, "name")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            <h2 className="text-4xl font-extrabold mb-5 text-gray-900">
              {getLocalized(modalProduct, "name")}
            </h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed whitespace-pre-line">
              {Array.isArray(getLocalized(modalProduct, "description"))
                ? getLocalized(modalProduct, "description").join("\n\n")
                : getLocalized(modalProduct, "description")}
            </p>

            {modalProduct.pricing && modalProduct.pricing.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold border-b border-gray-200 pb-2">
                    الأسعار
                  </h3>
                  
                  {/* Filter Controls */}
                  <div className="flex gap-4 flex-wrap">
                    {/* Duration Filter */}
                    {filterOptions.durations.length > 1 && (
                      <select
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">جميع المدد</option>
                        {filterOptions.durations.map(duration => (
                          <option key={duration} value={duration}>
                            {duration} {duration === 1 ? 'شهر' : 'أشهر'}
                          </option>
                        ))}
                      </select>
                    )}

                    {/* Screen Filter - Show only if not Snapchat+ and has screen options */}
                    {!isSnapchatPlus && filterOptions.screens.length > 1 && (
                      <select
                        value={selectedScreens}
                        onChange={(e) => setSelectedScreens(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">جميع الشاشات</option>
                        {filterOptions.screens.map(screen => (
                          <option key={screen} value={screen}>
                            {screen === "multiple" ? "حساب متعدد الشاشات" : `${screen} شاشة`}
                          </option>
                        ))}
                      </select>
                    )}

                    {/* Activation Method Filter - Show only for Snapchat+ */}
                    {isSnapchatPlus && filterOptions.activations.length > 1 && (
                      <select
                        value={selectedActivation}
                        onChange={(e) => setSelectedActivation(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">جميع طرق التفعيل</option>
                        {filterOptions.activations.includes("android") && (
                          <option value="android">تفعيل على Android</option>
                        )}
                        {filterOptions.activations.includes("iphone") && (
                          <option value="iphone">تفعيل مباشر على iPhone</option>
                        )}
                        {filterOptions.activations.includes("username") && (
                          <option value="username">تفعيل عبر اليوزر فقط</option>
                        )}
                      </select>
                    )}

                    {/* Clear Filters Button */}
                    {(selectedDuration !== "all" || selectedScreens !== "all" || selectedActivation !== "all") && (
                      <button
                        onClick={() => {
                          setSelectedDuration("all");
                          setSelectedScreens("all");
                          setSelectedActivation("all");
                        }}
                        className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm"
                      >
                        مسح التصفية
                      </button>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {getFilteredPricing(modalProduct.pricing).map(({ duration, price }, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-100 rounded-lg p-4 shadow-sm flex justify-between items-center font-medium text-gray-800 hover:bg-gray-200 transition"
                    >
                      <span>{duration}</span>
                      <span className="text-blue-600 font-bold">{price}</span>
                    </li>
                  ))}
                </ul>

                {/* Show message if no results after filtering */}
                {getFilteredPricing(modalProduct.pricing).length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    <p>لا توجد نتائج مطابقة للتصفية المحددة</p>
                    <button
                      onClick={() => {
                        setSelectedDuration("all");
                        setSelectedScreens("all");
                        setSelectedActivation("all");
                      }}
                      className="mt-2 text-blue-600 hover:text-blue-800 underline"
                    >
                      إعادة تعيين التصفية
                    </button>
                  </div>
                )}
              </section>
            )}

            {!modalProduct.pricing && modalProduct.price && (
              <p className="text-xl font-semibold mb-6">
                السعر: {modalProduct.price}
              </p>
            )}

            {modalProduct.notes && (
              <p className="text-gray-600 text-sm mt-4 border-t border-gray-200 pt-4">
                {modalProduct.notes}
              </p>
            )}
          </div>

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

export default Products;