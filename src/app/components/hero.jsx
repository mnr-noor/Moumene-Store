import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Shield, Headphones, Zap, Star, Users, Award, ArrowRight } from 'lucide-react';
import bgHero from '../assets/bg-k.jpg';


const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={bgHero}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/60" /> */}
        {/* Content */}
        <div className="container relative px-4 md:px-6 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-white">
            Moumene Store
          </h1>
          <p className="text-xl font-bold text-white md:w-[80%]" dir="rtl">
            نقدم لك منتجات رقمية موثوقة وعالية الجودة تساعدك على تطوير أعمالك وتحقيق أهدافك بكل احترافية
          </p>
          {/* <button className="group relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-500 text-lg shadow-lg hover:scale-105 transform"> */}
          <a href="/products" className="group relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-500 text-lg shadow-lg hover:scale-105 transform inline-block">

            <span className="relative z-10 flex items-center justify-center gap-2">
              تسوق الآن
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            </a>
          {/* </button> */}
        </div>
      </section>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4" dir="rtl">
              لماذا تختار MoumeneStore؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" dir="rtl">
              نحن نقدم تجربة تسوق رقمية استثنائية مع أعلى معايير الجودة والأمان
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="منتجات رقمية موثوقة"
              description="نوفر لك مجموعة متنوعة من المنتجات الرقمية المضمونة والموثوقة لتلبية احتياجاتك التجارية"
              iconBg="bg-blue-50"
              iconBorder="border-blue-100"
              hoverShadow="hover:shadow-blue-500/20"
              hoverBorder="hover:border-blue-200"
              accentColor="blue"
            />

            <FeatureCard
              icon={<Headphones className="w-8 h-8 text-purple-600" />}
              title="خدمة عملاء متميزة"
              description="فريق دعم متخصص متاح على مدار الساعة لمساعدتك وحل جميع استفساراتك بسرعة واحترافية"
              iconBg="bg-purple-50"
              iconBorder="border-purple-100"
              hoverShadow="hover:shadow-purple-500/20"
              hoverBorder="hover:border-purple-200"
              accentColor="purple"
            />

            <FeatureCard
              icon={<Zap className="w-8 h-8 text-cyan-600" />}
              title="تسليم فوري وسريع"
              description="احصل على منتجاتك الرقمية فور إتمام عملية الشراء مع ضمان التسليم السريع والآمن"
              iconBg="bg-cyan-50"
              iconBorder="border-cyan-100"
              hoverShadow="hover:shadow-cyan-500/20"
              hoverBorder="hover:border-cyan-200"
              accentColor="cyan"
            />
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" dir="rtl">
              ما نقدمه لك
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" dir="rtl">
              MoumeneStore هو متجرك المتخصص في المنتجات الرقمية عالية الجودة. نقدم لك مجموعة واسعة من الحلول الرقمية التي تلبي احتياجاتك المختلفة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <ProductCard
                  icon={<Shield className="w-8 h-8 text-blue-600" />}
                  title="برامج وتطبيقات"
                  description="أحدث البرامج والتطبيقات الأصلية"
                  bgColor="bg-blue-50"
                  borderColor="border-blue-200"
                />
                <ProductCard
                  icon={<Award className="w-8 h-8 text-purple-600" />}
                  title=" صوتيات ومؤثرات"
                  description="  مؤثرات صوتية ومقاطع موسيقية للاستخدام التجاري والإبداعي "
                  bgColor="bg-purple-50"
                  borderColor="border-purple-200"
                />
                <ProductCard
                  icon={<Star className="w-8 h-8 text-cyan-600" />}
                  title="أدوات الذكاء الاصطناعي"
                  description="برمجيات وخدمات تعتمد على الذكاء الاصطناعي لتحسين الإنتاجية"
                  bgColor="bg-cyan-50"
                  borderColor="border-cyan-200"
                />
                <ProductCard
                  icon={<Zap className="w-8 h-8 text-green-600" />}
                  title="أدوات رقمية"
                  description="أدوات مساعدة لتطوير الأعمال"
                  bgColor="bg-green-50"
                  borderColor="border-green-200"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4" dir="rtl">
                التزامنا معك
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6" dir="rtl">
                نحن ملتزمون بتقديم أفضل المنتجات الرقمية بأسعار مناسبة وجودة عالية. هدفنا هو مساعدتك في الوصول للأدوات والموارد التي تحتاجها لتحقيق النجاح في مشاريعك.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3" dir="rtl">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">منتجات أصلية ومضمونة</span>
                </div>
                <div className="flex items-center gap-3" dir="rtl">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">أسعار تنافسية ومناسبة</span>
                </div>
                <div className="flex items-center gap-3" dir="rtl">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-700">تحديثات مستمرة للمنتجات</span>
                </div>
                <div className="flex items-center gap-3" dir="rtl">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">دعم فني متميز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, iconBg, iconBorder, hoverShadow, hoverBorder, accentColor }) => {
  return (
    <div className="group">
      <div className={`bg-white rounded-2xl p-8 shadow-xl ${hoverShadow} transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${hoverBorder} h-full relative overflow-hidden`}>
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center ${iconBorder} border group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg`}>
            <div className="group-hover:animate-pulse">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-gray-900 transition-colors duration-300" dir="rtl">
          {title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300" dir="rtl">
          {description}
        </p>
      </div>
    </div>
  );
};

const ProductCard = ({ icon, title, description, bgColor, borderColor }) => {
  return (
    <div className={`${bgColor} rounded-xl p-6 border ${borderColor} group hover:shadow-lg transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-4" dir="rtl">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-800 mb-1">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;