import React from 'react';
import { Shield, Headphones, Zap, Star, Users, Award, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/76/35/01/76350156177623676.jpg')] bg-cover bg-center">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* Store Name with Enhanced Glow Effect */}
          <div className="mb-8 relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Moumene Store
              </span>
            </h1>
            {/* Text shadow for better visibility */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/10 blur-md">
                Moumene Store
              </h1>
            </div>
          </div>

          {/* Animated Decorative Line */}
          <div className="relative mx-auto mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 mx-auto rounded-full shadow-lg shadow-blue-400/30"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full blur-sm animate-pulse"></div>
          </div>

          {/* Description with improved styling */}
          <p 
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg" 
            dir="rtl"
          >
            نقدم لك منتجات رقمية موثوقة وعالية الجودة تساعدك على تطوير أعمالك وتحقيق أهدافك بكل احترافية
          </p>

          {/* Enhanced Call to Action Button */}
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-bold py-3 px-8 rounded-xl transition-all duration-500 text-lg shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transform border border-white/20 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              تسوق الآن
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
            {/* Shine effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-shine"></div>
            </div>
          </button>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative">
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

      {/* About Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/30 to-transparent transform -rotate-12"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" dir="rtl">
              ما نقدمه لك
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" dir="rtl">
              MoumeneStore هو متجرك المتخصص في المنتجات الرقمية عالية الجودة. نقدم لك مجموعة واسعة من الحلول الرقمية التي تلبي احتياجاتك المختلفة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Product Categories */}
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
                  title="قوالب وتصاميم"
                  description="قوالب احترافية جاهزة للاستخدام"
                  bgColor="bg-purple-50"
                  borderColor="border-purple-200"
                />
                <ProductCard
                  icon={<Star className="w-8 h-8 text-cyan-600" />}
                  title="كورسات وتعليم"
                  description="دورات تدريبية متخصصة ومفيدة"
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

            {/* Right Side - Store Values */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-xl">
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

// Enhanced Feature Card Component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconBg, 
  iconBorder, 
  hoverShadow, 
  hoverBorder,
  accentColor
}) => {
  return (
    <div className="group">
      <div className={`bg-white rounded-2xl p-8 shadow-xl ${hoverShadow} transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${hoverBorder} h-full relative overflow-hidden`}>
        
        {/* Background Accent */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center ${iconBorder} border group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg`}>
            <div className="group-hover:animate-pulse">
              {icon}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-gray-900 transition-colors duration-300" dir="rtl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300" dir="rtl">
          {description}
        </p>
      </div>
    </div>
  );
};

// Product Card Component
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