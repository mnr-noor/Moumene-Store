    import React from 'react';
    import Image from 'next/image';
    import { Instagram } from 'lucide-react';
    import TikTokIcon from '../assets/tiktok.png'; 
    const Footer = () => {
    return (
        <nav className="bg-blue-400 text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Texte principal */}
            <div className="flex-1 text-center">
            <p className="text-sm md:text-base font-medium">
            Des solutions numériques fiables, un service professionnel et une confiance garantie depuis 2022.

    </p>
            </div>

            <div className="flex items-center space-x-3 ml-4">
            <a
                href="https://www.instagram.com/moumene_store/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
            >
                <Instagram className="w-5 h-5" />
            </a>

            <a
                href="https://www.tiktok.com/@moumene_storee?_t=ZM-8wvMzFYVMH7&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
                aria-label="TikTok"
            >
                <Image src={TikTokIcon} alt="TikTok" width={20} height={20} />
            </a>
            </div>
        </div>
        </nav>
    );
    };

    export default Footer;
