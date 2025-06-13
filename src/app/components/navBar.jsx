    import React from 'react';
    import Image from 'next/image';
    import Link from 'next/link';
    import Logo from '../assets/logo.jpg';
    const NavBar = () => {
    const navItems = [
        { label: "الرئيسية", href: "" },         
        { label: "المنتجات", href: "../products" }, 
        { label: "عنا", href: "../about" }        
    ];

    return (
        <nav className="bg-white shadow-md py-4 px-4 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto relative flex items-center justify-center">

            {/* Centered Nav Items */}
            <ul className="absolute left-1/2 transform -translate-x-1/2 flex flex-row-reverse gap-x-8 text-gray-600 font-normal text-lg">
            {navItems.map((item, index) => (
                <li key={index} className="relative group">
                <Link href={item.href} legacyBehavior>
                    <a className="group-hover:text-blue-700 transition-colors duration-300">
                    {item.label}
                    </a>
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
    );
    };

    export default NavBar;
