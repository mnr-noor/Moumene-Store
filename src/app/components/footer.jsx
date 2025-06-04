import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
return (
    <nav className="bg-blue-400 text-white py-3 px-4 shadow-lg">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Main text */}
        <div className="flex-1 text-center">
        <p className="text-sm md:text-base font-medium">
            Vente de Matériel, Logiciels & Abonnements Digitaux - Maintenance & Services Numériques Personnalisés
        </p>
        </div>
        
        {/* Social media icons */}
        <div className="flex items-center space-x-3 ml-4">
        {/* Facebook */}
        <a 
            href="#" 
            className="hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
            aria-label="Facebook"
        >
            <Facebook className="w-5 h-5" />
        </a>
        
        {/* Instagram */}
        <a 
            href="#" 
            className="hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
            aria-label="Instagram"
        >
            <Instagram className="w-5 h-5" />
        </a>
        
        {/* WhatsApp */}
        <a 
            href="#" 
            className="hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
            aria-label="WhatsApp"
        >
            <MessageCircle className="w-5 h-5" />
        </a>
        
        {/* TikTok - Custom SVG since Lucide doesn't have TikTok */}
        <a 
            href="#" 
            className="hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
            aria-label="TikTok"
        >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.547-1.847-1.547-3.338h-2.602v11.796c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3c.339 0 .663.057.966.162V7.356a5.558 5.558 0 0 0-.966-.084c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5V9.026a8.717 8.717 0 0 0 4.729 1.39v-2.5c-1.202 0-2.315-.411-3.2-1.1-.442-.344-.831-.744-1.15-1.193-.16-.225-.3-.462-.421-.711-.12-.248-.221-.508-.301-.778h-.025z"/>
            </svg>
        </a>
        </div>
    </div>
    </nav>
);
};

export default Footer;