    import React from 'react';
    import {Clapperboard, Music, FileText, Code, Palette, Database} from 'lucide-react';

    const CategoryCard = ({ title, subtitle, icon: Icon, bgColor }) => (
    <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
        <div className="p-8 text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${bgColor} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
    </div>
    );

    const MeshGradientWithCards = () => {
    const categories = [
        {
        title: "أفلام و مسلسلات",
        subtitle: "20 produits",
        icon: Clapperboard,
        bgColor: "from-blue-300 to-blue-500"
        },
        {
        title: "Development",
        subtitle: "Code & Programming", 
        icon: Code,
        bgColor: "from-sky-300 to-sky-500"
        },
        {
        title: "Design",
        subtitle: "Creative Projects",
        icon: Palette,
        bgColor: "from-cyan-300 to-cyan-500"
        },
        {
        title: "Database",
        subtitle: "Data Management",
        icon: Database,
        bgColor: "from-blue-400 to-blue-600"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        {/* Mesh gradient blobs */}
        <div className="absolute inset-0">
            <div className="absolute rounded-full opacity-30 blur-3xl"
            style={{
                width: '900px',
                height: '900px',
                background: `radial-gradient(circle, #4F46E5 0%, #3B82F6 40%, transparent 70%)`,
                top: '-300px',
                left: '-300px',
            }}
            />
            <div className="absolute rounded-full opacity-25 blur-3xl"
            style={{
                width: '700px',
                height: '700px',
                background: `radial-gradient(circle, #2563EB 0%, #1D4ED8 40%, transparent 70%)`,
                top: '-200px',
                right: '-200px',
            }}
            />
            <div className="absolute rounded-full opacity-20 blur-2xl"
            style={{
                width: '600px',
                height: '600px',
                background: `radial-gradient(circle, #0EA5E9 0%, #0284C7 40%, transparent 70%)`,
                bottom: '-200px',
                left: '50px',
            }}
            />
            <div className="absolute rounded-full opacity-18 blur-3xl"
            style={{
                width: '500px',
                height: '500px',
                background: `radial-gradient(circle, #3B82F6 0%, #1E40AF 40%, transparent 70%)`,
                top: '40%',
                right: '-150px',
                transform: 'translateY(-50%)',
            }}
            />
            <div className="absolute rounded-full opacity-15 blur-3xl"
            style={{
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, #6366F1 0%, #4F46E5 40%, transparent 70%)`,
                top: '70%',
                left: '40%',
                transform: 'translate(-50%, -50%)',
            }}
            />
            <div className="absolute rounded-full opacity-12 blur-2xl"
            style={{
                width: '350px',
                height: '350px',
                background: `radial-gradient(circle, #1D4ED8 0%, #2563EB 40%, transparent 70%)`,
                top: '30%',
                left: '20%',
                transform: 'translate(-50%, -50%)',
            }}
            />
        </div>

        {/* Categories Section */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
            <div className="flex gap-8 max-w-7xl flex-wrap justify-center">
            {categories.map((category, index) => (
                <CategoryCard
                key={index}
                title={category.title}
                subtitle={category.subtitle}
                icon={category.icon}
                bgColor={category.bgColor}
                />
            ))}
            </div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 pb-16">
            <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Moumene Store
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                Moumene Store se distingue par ses services variés dans le domaine du digital : gestion de réseaux sociaux, création de contenus visuels, campagnes publicitaires ciblées, ainsi que la fourniture d'abonnements à des outils d'intelligence artificielle et des logiciels professionnels. Notre priorité est d'offrir un accompagnement personnalisé, un support réactif et des solutions innovantes pour répondre aux besoins numériques de nos clients.
            </p>
            
            {/* Logo placeholder */}
            <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-4xl font-bold">MS</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MeshGradientWithCards;