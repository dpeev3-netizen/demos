import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const blackNavbarPages = ['/properties', '/services', '/contact'];
        const isBlackNavbarPage = blackNavbarPages.includes(location.pathname);

        const handleScroll = () => {
            if (window.scrollY > 0 || isBlackNavbarPage) {
                navbar.classList.remove('bg-transparent', 'border-transparent');
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.add('bg-transparent', 'border-transparent');
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav id="navbar"
                className="fixed top-0 left-0 w-full z-50 bg-transparent border-b border-transparent lg:border-white/5 transition-all duration-500">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-12 py-3 lg:py-4">
                    <Link to="/" className="select-none z-50 relative flex items-center">
                        <img src="/DEMOS.png" alt="DEMOS" className="h-8 lg:h-10 w-auto" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link to="/properties" className="nav-link text-xs tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-300">Ново Търсене</Link>
                        <Link to="/sell" className="nav-link text-xs tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-300">Продай С Нас</Link>
                        <Link to="/about" className="nav-link text-xs tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-300">За Нас</Link>
                        <Link to="/services" className="nav-link text-xs tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-300">Услуги</Link>
                        <Link to="/contact" className="nav-link text-xs tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-300">Контакт</Link>
                    </div>

                    {/* Mobile Burger */}
                    <button id="burger-btn" onClick={toggleMenu}
                        className={`lg:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-end gap-[5px] ${isMenuOpen ? 'open' : ''}`}
                        aria-label="Menu">
                        <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 origin-right burger-line-1 ${isMenuOpen ? '-rotate-45 translate-y-[6px]' : ''}`}></span>
                        <span className={`w-8 h-[1.5px] bg-white transition-all duration-300 origin-right burger-line-2 ${isMenuOpen ? 'rotate-45 -translate-y-[6px] w-6' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            <div id="mobile-menu" className={`fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col justify-center px-12 lg:hidden ${isMenuOpen ? 'open' : ''}`}>
                <div className="flex flex-col gap-8">
                    <Link to="/properties" onClick={toggleMenu} className={`text-2xl tracking-widest uppercase text-white hover:text-[#D90000] transition-colors mobile-link ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-500 delay-100`}>Ново Търсене</Link>
                    <Link to="/sell" onClick={toggleMenu} className={`text-2xl tracking-widest uppercase text-white hover:text-[#D90000] transition-colors mobile-link ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-500 delay-200`}>Продай С Нас</Link>
                    <Link to="/about" onClick={toggleMenu} className={`text-2xl tracking-widest uppercase text-white hover:text-[#D90000] transition-colors mobile-link ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-500 delay-300`}>За Нас</Link>
                    <Link to="/services" onClick={toggleMenu} className={`text-2xl tracking-widest uppercase text-white hover:text-[#D90000] transition-colors mobile-link ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-500 delay-400`}>Услуги</Link>
                    <Link to="/contact" onClick={toggleMenu} className={`text-2xl tracking-widest uppercase text-white hover:text-[#D90000] transition-colors mobile-link ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-500 delay-500`}>Контакт</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
