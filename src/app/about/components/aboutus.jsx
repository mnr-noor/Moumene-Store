    import React from 'react';

    export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        {/* Main card */}
        <div className="relative max-w-2xl w-full">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-8">
                من نحن
            </h1>

            {/* Content */}
            <div className="space-y-6 text-right" dir="rtl">
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium">
                في <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold">Moumene Store</span>، 
                بدأنا رحلتنا في عالم المنتجات الرقمية عام 2022، ومنذ ذلك الحين وضعنا الجودة والموثوقية في صميم كل ما نقدمه.
                </p>
                
                <p className="text-lg leading-relaxed text-slate-600">
                نلتزم بتوفير خدمات رقمية احترافية، سواء كنت تبحث عن اشتراكات، حلول رقمية، أو دعم سريع وآمن.
                </p>
                
                <p className="text-lg leading-relaxed text-slate-600">
                عملاؤنا يثقون بنا لأننا نركز على التفاصيل، ونحرص على تقديم تجربة سلسة ومرضية من أول تواصل حتى ما بعد البيع.
                </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">2022</div>
                <div className="text-sm text-slate-500 font-medium">سنة التأسيس</div>
                </div>
                <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-slate-500 font-medium">الجودة</div>
                </div>
                <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                <div className="text-sm text-slate-500 font-medium">الدعم</div>
                </div>
            </div>

            {/* Call to action */}
            <div className="mt-10">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">تواصل معنا</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-50 animate-bounce"></div>
        </div>
        </div>
    );
    }