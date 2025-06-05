"use client";
import React, { useState } from "react";
import CategoryCard from "./CategoryCrd";
import categories from "../data/categories";
import Image from "next/image";
import Logo from "/public/logo.jpg";

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  const getLocalized = (item, field) => item[field];

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

      <div className="relative z-10 p-8 pt-20 max-w-7xl mx-auto min-h-[60vh]">
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
  تعريف : في moumene store ، بدأنا رحلتنا في عالم المنتجات الرقمية عام 2022، ومنذ ذلك الحين وضعنا الجودة والموثوقية في صميم كل ما نقدمه. نلتزم بتوفير خدمات رقمية احترافية، سواء كنت تبحث عن اشتراكات، حلول رقمية، أو دعم سريع وآمن. عملاؤنا يثقون بنا لأننا نركز على التفاصيل، ونحرص على تقديم تجربة سلسة ومرضية من أول تواصل حتى ما بعد البيع. اختر moumene store… حيث تلتقي الجودة بالثقة.
</p>

        </div>
      </div>

      {modalProduct && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-6 overflow-auto bg-black/40 backdrop-blur-md animate-fadeIn"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 text-4xl font-bold transition-colors"
              onClick={() => setModalProduct(null)}
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

            {modalProduct.pricing && modalProduct.pricing.length > 0 ? (
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">
                  الأسعار
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
                <p className="text-xl font-semibold mb-6">
                  السعر: {modalProduct.price}
                </p>
              )
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

export default Hero;
