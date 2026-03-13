import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#050505] text-white pt-20 lg:pt-24 pb-12">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 lg:mb-20">
                        {/* Brand */}
                        <div>
                            <img src="/DEMOS.png" alt="DEMOS" className="h-16 lg:h-20 w-auto mb-6" />
                            <p className="text-sm font-light text-gray-400 leading-relaxed max-w-xs">
                                Елитни имоти в България.<br />
                                Дискретност. Прецизност. Резултат.
                            </p>
                        </div>
                        {/* Contact */}
                        <div>
                            <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-6">Контакт</p>
                            <a href="mailto:info@demos.bg"
                                className="block text-sm font-light text-gray-300 hover:text-white transition-colors mb-2">info@demos.bg</a>
                            <a href="tel:+35929876543"
                                className="block text-sm font-light text-gray-300 hover:text-white transition-colors">+359 2 987 6543</a>
                        </div>
                        {/* Address */}
                        <div>
                            <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-6">Офис</p>
                            <p className="text-sm font-light text-gray-300 leading-relaxed">
                                бул. "Витоша" 89, ет. 4<br />
                                София 1000, България
                            </p>
                        </div>
                    </div>
                    {/* Bottom bar */}
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-gray-600">© 2026 DEMOS. Всички права запазени.</p>
                        <div className="flex gap-8">
                            <Link to="/privacy" className="text-xs text-gray-600 hover:text-white transition-colors">Поверителност</Link>
                            <Link to="/terms" className="text-xs text-gray-600 hover:text-white transition-colors">Условия</Link>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Red Bottom Bar */}
            <div className="h-[5px] w-full bg-[#D90000]"></div>
        </>
    );
};

export default Footer;
