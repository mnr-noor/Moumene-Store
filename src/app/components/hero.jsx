import React from 'react';
import Image from 'next/image';
import { Shield, Headphones, Zap } from 'lucide-react';
import Bg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <image
            src={Bg} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blue Radiant Effect Only */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-blue-200/10 to-transparent"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Store Name */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
              MoumeneStore
            </h1>
          </div>

          {/* Decorative Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full shadow-lg shadow-blue-400/50"></div>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md" 
            dir="rtl"
          >
            نقدم لك منتجات رقمية موثوقة وعالية الجودة تساعدك على تطوير أعمالك وتحقيق أهدافك بكل احترافية
          </p>

          {/* Call to Action Button */}
          <button className="bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm border border-blue-300/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-400/40 hover:scale-105">
            تسوق الآن
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature Card 1 - Trusted Products */}
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="منتجات رقمية موثوقة"
              description="نوفر لك مجموعة متنوعة من المنتجات الرقمية المضمونة والموثوقة لتلبية احتياجاتك التجارية"
              iconBg="bg-blue-50"
              iconBorder="border-blue-100"
              hoverShadow="hover:shadow-blue-500/10"
              hoverBorder="hover:border-blue-200"
            />

            {/* Feature Card 2 - Customer Service */}
            <FeatureCard
              icon={<Headphones className="w-8 h-8 text-purple-600" />}
              title="خدمة عملاء متميزة"
              description="فريق دعم متخصص متاح على مدار الساعة لمساعدتك وحل جميع استفساراتك بسرعة واحترافية"
              iconBg="bg-purple-50"
              iconBorder="border-purple-100"
              hoverShadow="hover:shadow-purple-500/10"
              hoverBorder="hover:border-purple-200"
            />

            {/* Feature Card 3 - Fast Delivery */}
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-cyan-600" />}
              title="تسليم فوري وسريع"
              description="احصل على منتجاتك الرقمية فور إتمام عملية الشراء مع ضمان التسليم السريع والآمن"
              iconBg="bg-cyan-50"
              iconBorder="border-cyan-100"
              hoverShadow="hover:shadow-cyan-500/10"
              hoverBorder="hover:border-cyan-200"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconBg, 
  iconBorder, 
  hoverShadow, 
  hoverBorder 
}) => {
  return (
    <div className="group">
      <div className={`bg-white rounded-xl p-6 shadow-lg ${hoverShadow} transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${hoverBorder} h-full`}>
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center ${iconBorder} border group-hover:scale-105 transition-transform duration-300`}>
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center" dir="rtl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-center leading-relaxed" dir="rtl">
          {description}
        </p>

      </div>
    </div>
  );
};

export default Hero;