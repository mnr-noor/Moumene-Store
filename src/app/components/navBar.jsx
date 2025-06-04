    import React from 'react';
    import Image from 'next/image'; // ✅ Add this line for Next.js Image component
    import Logo from '../assets/logo.jpg';

    const NavBar = () => {
    return (
        <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
            {/* Logo */}
            <Image
            src={Logo}
            alt="Moumene Logo"
            width={48}
            height={48}
            className="rounded-full shadow-md object-cover"
            />
        </div>
        </nav>
    );
    };

    export default NavBar;
