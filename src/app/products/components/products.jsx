"use client";
import React, { useState, useMemo } from "react";
import CategoryCard from "../../components/CategoryCrd";
import categories from "../../data/categories";
import Image from "next/image";
import Logo from "../../assets/logo.jpg";
import { useRouter } from "next/navigation";
import { Filter, Calendar, Monitor, Smartphone, X, RotateCcw } from "lucide-react";

const Products = () => {
const router = useRouter();
const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedProduct, setSelectedProduct] = useState(null);

// Filter states for product offers page
const [selectedDuration, setSelectedDuration] = useState("all");
const [selectedScreens, setSelectedScreens] = useState("all");
const [selectedActivation, setSelectedActivation] = useState("all");

const getLocalized = (item, field) => item[field];

// Function to get the number of offers for a product
const getOfferCount = (product) => {
    if (product.pricing && Array.isArray(product.pricing)) {
    return product.pricing.length;
    }
    return 0;
};

// Reset filters when going back
const resetFilters = () => {
    setSelectedDuration("all");
    setSelectedScreens("all");
    setSelectedActivation("all");
};

// Navigate to home page
const goToHome = () => {
    router.push("/");
};

// Go back to categories
const goBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedProduct(null);
    resetFilters();
};

// Go back to products list
const goBackToProducts = () => {
    setSelectedProduct(null);
    resetFilters();
};

// Extract unique durations from pricing
const getUniqueDurations = (pricing) => {
    if (!pricing || !Array.isArray(pricing)) return [];
    const durations = pricing.map(item => {
    const match = item.duration.match(/(\d+)\s*mois/);
    return match ? parseInt(match[1]) : null;
    }).filter(Boolean);
    return [...new Set(durations)].sort((a, b) => a - b);
};

// Extract unique screen options from pricing
const getUniqueScreens = (pricing) => {
    if (!pricing || !Array.isArray(pricing)) return [];
    const screens = pricing.map(item => {
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

// Get filter options for current selected product
const filterOptions = useMemo(() => {
    if (!selectedProduct || !selectedProduct.pricing) return { durations: [], screens: [], activations: [] };

    return {
    durations: getUniqueDurations(selectedProduct.pricing),
    screens: getUniqueScreens(selectedProduct.pricing),
    activations: getUniqueActivationMethods(selectedProduct.pricing)
    };
}, [selectedProduct]);

// Check if product is Snapchat+
const isSnapchatPlus = selectedProduct && selectedProduct.name === "Snapchat+";

// Modern Card Component
const ModernCard = ({ title, subtitle, imageUrl, productCount, offerCount, onClick, isOffer = false, duration, price }) => {
    if (isOffer) {
        // Offer card design - image with info below
        return (
            <div
                onClick={onClick}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
                <div className="w-[300px]">
                    {/* Image Container */}
                    <div className="relative w-full h-[300px] rounded-b-md overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="300px"
                        />
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Info below the card */}
                    <div className="mt-4 text-center">
                        <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-2">{duration}</h3>
                        <p className="text-gray-800 text-lg">{price}</p>
                    </div>
                </div>
            </div>
        );
    }

    // Regular card design for categories and products
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
            <div className="relative overflow-hidden rounded-b-md bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg w-[300px] h-[300px]">
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Info Overlay - Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
                        <h3 className="font-bold text-gray-800 text-base mb-2 truncate">{title}</h3>
                        {productCount !== undefined && (
                            <p className="text-sm text-gray-600 font-medium">
                                {productCount} {productCount === 1 ? 'منتج' : 'منتجات'}
                            </p>
                        )}
                        {offerCount !== undefined && (
                            <p className="text-sm text-gray-600 font-medium">
                                {offerCount} {offerCount === 1 ? 'عرض' : 'عروض'} متاحة
                            </p>
                        )}
                        {subtitle && !productCount && !offerCount && (
                            <p className="text-sm text-gray-600 truncate">{subtitle}</p>
                        )}
                    </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </div>
    );
};

return (
    <>
    {/* Custom CSS */}
    <style jsx global>{`
        .products-page-bg {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
        min-height: 100vh;
        }
        
        @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
        animation: fadeIn 0.5s ease forwards;
        }
        
        .filter-button {
        @apply px-4 py-2 rounded-xl font-medium transition-all duration-200;
        }
        
        .filter-button-active {
        @apply bg-blue-600 text-white shadow-lg;
        }
        
        .filter-button-inactive {
        @apply bg-white text-gray-700 border border-gray-200 hover:bg-gray-50;
        }
        
        .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        }
    `}</style>

    <div className="min-h-screen products-page-bg" style={{ direction: "rtl" }}>
        <div className="relative z-10 p-8 pt-20 max-w-7xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
            {selectedProduct && (
                <button
                onClick={goBackToProducts}
                className="bg-white text-gray-700 rounded-xl px-6 py-3 hover:bg-gray-50 transition-all duration-200 shadow-md flex items-center gap-2 font-medium"
                >
                <span>←</span>
                العودة إلى المنتجات
                </button>
            )}
            {selectedCategory && !selectedProduct && (
                <button
                onClick={goBackToCategories}
                className="bg-white text-gray-700 rounded-xl px-6 py-3 hover:bg-gray-50 transition-all duration-200 shadow-md flex items-center gap-2 font-medium"
                >
                <span>←</span>
                العودة إلى الفئات
                </button>
            )}
            </div>
            
            <button
            onClick={goToHome}
            className="bg-blue-600 text-white rounded-xl px-6 py-3 hover:bg-blue-700 transition-all duration-200 shadow-lg flex items-center gap-2 font-medium"
            >
            <span>🏠</span>
            الصفحة الرئيسية
            </button>
        </div>

        {/* Categories View */}
        {!selectedCategory && (
            <div className="animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                تصفح الفئات
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
                {categories.map((category) => (
                <ModernCard
                    key={category.title}
                    title={getLocalized(category, "title")}
                    imageUrl={category.imageUrl}
                    productCount={category.products.length}
                    onClick={() => setSelectedCategory(category)}
                />
                ))}
            </div>
            </div>
        )}

        {/* Products View */}
        {selectedCategory && !selectedProduct && (
            <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                {getLocalized(selectedCategory, "title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {selectedCategory.products.map((product, idx) => (
                <ModernCard
                    key={idx}
                    title={getLocalized(product, "name")}
                    imageUrl={product.image}
                    offerCount={getOfferCount(product)}
                    onClick={() => setSelectedProduct(product)}
                />
                ))}
            </div>
            </div>
        )}

        {/* Product Offers View */}
        {selectedProduct && (
            <div className="animate-fadeIn">
            {/* Filters */}
            {selectedProduct.pricing && selectedProduct.pricing.length > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Filter className="w-6 h-6 text-blue-600" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                        تصفية العروض
                        </h3>
                    </div>
                    
                    {/* Filter Controls */}
                    <div className="flex gap-4 flex-wrap">
                    {/* Duration Filter */}
                    {filterOptions.durations.length > 1 && (
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <select
                            value={selectedDuration}
                            onChange={(e) => setSelectedDuration(e.target.value)}
                            className="px-4 py-2 border border-blue-200 rounded-lg bg-blue-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 transition-colors"
                            >
                            <option value="all">حسب الأشهر</option>
                            {filterOptions.durations.map(duration => (
                                <option key={duration} value={duration}>
                                {duration} {duration === 1 ? 'شهر' : 'أشهر'}
                                </option>
                            ))}
                            </select>
                        </div>
                    )}

                    {/* Screen Filter - Show only if not Snapchat+ and has screen options */}
                    {!isSnapchatPlus && filterOptions.screens.length > 1 && (
                        <div className="flex items-center gap-2">
                            <Monitor className="w-4 h-4 text-blue-600" />
                            <select
                            value={selectedScreens}
                            onChange={(e) => setSelectedScreens(e.target.value)}
                            className="px-4 py-2 border border-blue-200 rounded-lg bg-blue-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 transition-colors"
                            >
                            <option value="all">حسب عدد الشاشات </option>
                            {filterOptions.screens.map(screen => (
                                <option key={screen} value={screen}>
                                {screen === "multiple" ? "حساب متعدد الشاشات" : `${screen} شاشة`}
                                </option>
                            ))}
                            </select>
                        </div>
                    )}

                    {/* Activation Method Filter - Show only for Snapchat+ */}
                    {isSnapchatPlus && filterOptions.activations.length > 1 && (
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-blue-600" />
                            <select
                            value={selectedActivation}
                            onChange={(e) => setSelectedActivation(e.target.value)}
                            className="px-4 py-2 border border-blue-200 rounded-lg bg-blue-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 transition-colors"
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
                        </div>
                    )}

                    {/* Clear Filters Button */}
                    {(selectedDuration !== "all" || selectedScreens !== "all" || selectedActivation !== "all") && (
                        <button
                        onClick={() => {
                            setSelectedDuration("all");
                            setSelectedScreens("all");
                            setSelectedActivation("all");
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                        <RotateCcw className="w-4 h-4" />
                        مسح التصفية
                        </button>
                    )}
                    </div>
                </div>
                </div>
            )}

            {/* Offers Grid */}
            {selectedProduct.pricing && selectedProduct.pricing.length > 0 ? (
                <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">العروض المتاحة</h3>
                <div className="flex flex-wrap justify-center gap-8">
                    {getFilteredPricing(selectedProduct.pricing).map(({ duration, price }, idx) => (
                    <ModernCard
                        key={idx}
                        title={getLocalized(selectedProduct, "name")}
                        imageUrl={selectedProduct.image}
                        duration={duration}
                        price={price}
                        isOffer={true}
                        onClick={() => {
                        // Handle offer selection - you can add your logic here
                        console.log('Selected offer:', { duration, price });
                        }}
                    />
                    ))}
                </div>

                {/* No Results Message */}
                {getFilteredPricing(selectedProduct.pricing).length === 0 && (
                    <div className="text-center py-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                        <p className="text-gray-500 text-lg mb-4">لا توجد عروض مطابقة للتصفية</p>
                        <button
                        onClick={resetFilters}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium"
                        >
                        إعادة تعيين التصفية
                        </button>
                    </div>
                    </div>
                )}
                </div>
            ) : selectedProduct.price ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">السعر</h3>
                <p className="text-3xl font-bold text-blue-600">{selectedProduct.price}</p>
                </div>
            ) : null}

            {/* Product Description - Now appears after the offers */}
            <div className="bg-white rounded-2xl p-8 mt-8 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="relative w-full lg:w-1/3 h-64 rounded-xl overflow-hidden shadow-md">
                        <Image
                        src={selectedProduct.image}
                        alt={getLocalized(selectedProduct, "name")}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        {getLocalized(selectedProduct, "name")}
                        </h2>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">وصف المنتج</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                        {Array.isArray(getLocalized(selectedProduct, "description"))
                            ? getLocalized(selectedProduct, "description").join(" ")
                            : getLocalized(selectedProduct, "description")}
                        </p>
                        {selectedProduct.notes && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <p className="text-blue-800 text-sm font-medium">
                            {selectedProduct.notes}
                            </p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            </div>
        )}
        </div>
    </div>
    </>
);
};

export default Products;