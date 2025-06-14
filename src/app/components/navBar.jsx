    'use client';

    import React, { useEffect, useState } from 'react';
    import Image from 'next/image';
    import Link from 'next/link';
    import Logo from '../assets/logo.jpg';

    const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'الرئيسية', href: '' },
        { label: 'المنتجات', href: '../products' },
        { label: 'عنا', href: '../about' },
    ];

    return (
        <>
        {/* Custom CSS for white navbar */}
        <style jsx global>{`
            .navbar-white {
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .navbar-transparent {
            background: rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(8px) !important;
            -webkit-backdrop-filter: blur(8px) !important;
            }

            /* Ensure white background in dark mode too */
            @media (prefers-color-scheme: dark) {
            .navbar-white {
                background: rgba(255, 255, 255, 0.95) !important;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .navbar-transparent {
                background: rgba(255, 255, 255, 0.1) !important;
            }
            }
        `}</style>

        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-4 ${
            isScrolled ? 'navbar-white' : 'navbar-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto relative flex items-center justify-center">
            {/* Centered Nav Items */}
            <ul className="absolute left-1/2 transform -translate-x-1/2 flex flex-row-reverse gap-x-8 text-gray-700 dark:text-gray-700 font-normal text-lg">
                {navItems.map((item, index) => (
                <li key={index} className="relative group">
                    <Link href={item.href} legacyBehavior>
                    <a className="group-hover:text-blue-600 dark:group-hover:text-blue-600 transition-colors duration-300">
                        {item.label}
                    </a>
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </li>
                ))}
            </ul>

            {/* Logo on the right */}
            <div className="ml-auto">
                <Image
                src={Logo}
                alt="Moumene Logo"
                width={48}
                height={48}
                className="rounded-full shadow-md object-cover"
                />
            </div>
            </div>
        </nav>
        </>
    );
    };

    export default NavBar;