import React, { useEffect } from 'react';
import gsap from 'gsap';
import PropertyCard from '../components/ui/PropertyCard';

const dummyProperties = [
    { id: 1, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800", title: "Пентхаус \"Витоша\"", price: "€ 1 250 000", details: "4 стаи · 210 м² · Бояна, София" },
    { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", title: "Резиденция \"Лозенец\"", price: "€ 2 100 000", details: "5 стаи · 340 м² · Лозенец, София" },
    { id: 3, image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800", title: "Апартамент \"Докторски Памятник\"", price: "€ 780 000", details: "3 стаи · 162 м² · Докторски Памятник, София" },
    { id: 4, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800", title: "Вила \"Бистрица\"", price: "€ 3 400 000", details: "6 стаи · 520 м² · Бистрица, София" },
    { id: 5, image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800", title: "Мезонет \"Иван Вазов\"", price: "€ 920 000", details: "4 стаи · 185 м² · Иван Вазов, София" },
    { id: 6, image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800", title: "Студио \"Гарден\"", price: "€ 450 000", details: "2 стаи · 95 м² · Център, Пловдив" },
    { id: 7, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", title: "Къща \"Борисова Градина\"", price: "€ 1 850 000", details: "5 стаи · 420 м² · Изток, София" },
    { id: 8, image: "https://images.unsplash.com/photo-1613490908574-e70b343beaff?auto=format&fit=crop&q=80&w=800", title: "Апартамент \"Южен Парк\"", price: "€ 620 000", details: "3 стаи · 145 м² · Лозенец, София" },
    { id: 9, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800", title: "Имение \"Драгалевци\"", price: "€ 4 200 000", details: "8 стаи · 850 м² · Драгалевци, София" }
];

const Properties = () => {

    useEffect(() => {
        // Page load animations
        const tl = gsap.timeline();

        tl.fromTo('.page-header',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
        );

        tl.fromTo('.sidebar-anim',
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
            "-=0.6"
        );

        tl.fromTo('.property-item',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
            "-=0.6"
        );

        // Ensure window scroll is at top
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-[#FAFAFA] min-h-screen pt-32 lg:pt-40 pb-20 lg:pb-32">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="page-header opacity-0 mb-12 lg:mb-16 border-b border-black/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Каталог</p>
                        <h1 className="text-3xl lg:text-5xl font-light text-[#0A0A0A] leading-tight">
                            Ексклузивни Имоти
                        </h1>
                    </div>
                    <div>
                        <p className="text-sm font-light text-gray-500">Намерени {dummyProperties.length} резултата</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Sidebar / Filters */}
                    <aside className="w-full lg:w-[320px] flex-shrink-0">
                        <div className="sticky top-32">
                            <div className="flex items-center justify-between mb-8 sidebar-anim opacity-0">
                                <h2 className="text-xs tracking-widest uppercase font-medium">Филтри</h2>
                                <button className="text-[10px] tracking-widest uppercase text-gray-400 hover:text-[#D90000] transition-colors">Изчисти</button>
                            </div>

                            <div className="space-y-8">
                                {/* Filter: Purpose */}
                                <div className="sidebar-anim opacity-0">
                                    <h3 className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Сделка</h3>
                                    <div className="space-y-3">
                                        {['Всички', 'Покупка', 'Наем'].map((purpose, idx) => (
                                            <label key={`purpose-${idx}`} className="flex items-center gap-3 cursor-pointer group">
                                                <div className="w-4 h-4 border border-gray-300 group-hover:border-black flex items-center justify-center transition-colors">
                                                    {idx === 0 && <div className="w-2 h-2 bg-black"></div>}
                                                </div>
                                                <span className={`text-sm font-light transition-colors ${idx === 0 ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>{purpose}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Filter: Type */}
                                <div className="sidebar-anim opacity-0">
                                    <h3 className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Тип Имот</h3>
                                    <div className="space-y-3">
                                        {['Всички', 'Апартамент / Мезонет', 'Къща / Вила', 'Пентхаус', 'Търговски Имот'].map((type, idx) => (
                                            <label key={`type-${idx}`} className="flex items-center gap-3 cursor-pointer group">
                                                <div className="w-4 h-4 border border-gray-300 group-hover:border-black flex items-center justify-center transition-colors">
                                                    {idx === 0 && <div className="w-2 h-2 bg-black"></div>}
                                                </div>
                                                <span className={`text-sm font-light transition-colors ${idx === 0 ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Filter: Rooms */}
                                <div className="sidebar-anim opacity-0">
                                    <h3 className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Стаи</h3>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-transparent border-b border-gray-300 rounded-none py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-black transition-colors cursor-pointer" defaultValue="0">
                                            <option value="0">Всички</option>
                                            <option value="1">1 стая</option>
                                            <option value="2">2 стаи</option>
                                            <option value="3">3 стаи</option>
                                            <option value="4">4 стаи</option>
                                            <option value="5">5+ стаи</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Filter: Location */}
                                <div className="sidebar-anim opacity-0">
                                    <h3 className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Локация</h3>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-transparent border-b border-gray-300 rounded-none py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-black transition-colors cursor-pointer" defaultValue="0">
                                            <option value="0">Всички райони</option>
                                            <option value="1">София - Бояна</option>
                                            <option value="2">София - Лозенец</option>
                                            <option value="3">София - Център</option>
                                            <option value="4">Пловдив - Център</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Filter: Price */}
                                <div className="sidebar-anim opacity-0">
                                    <h3 className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Цена (€)</h3>
                                    <div className="flex items-center gap-4">
                                        <input type="text" placeholder="От" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-sm font-light text-center focus:outline-none focus:border-black transition-colors" />
                                        <span className="text-gray-400">-</span>
                                        <input type="text" placeholder="До" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-sm font-light text-center focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                </div>

                                {/* Filter: Area */}
                                <div className="sidebar-anim opacity-0">
                                    <h3 className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Площ (кв.м.)</h3>
                                    <div className="flex items-center gap-4">
                                        <input type="text" placeholder="От" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-sm font-light text-center focus:outline-none focus:border-black transition-colors" />
                                        <span className="text-gray-400">-</span>
                                        <input type="text" placeholder="До" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-sm font-light text-center focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                </div>

                                {/* Filter Action */}
                                <div className="sidebar-anim pt-4 opacity-0">
                                    <button className="w-full bg-[#050505] text-white text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-[#D90000] focus:ring-1 focus:ring-black focus:outline-none transition-all duration-300">
                                        Приложи Филтрите
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Properties Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {dummyProperties.map((prop) => (
                                <PropertyCard
                                    key={prop.id}
                                    id={prop.id}
                                    image={prop.image}
                                    title={prop.title}
                                    price={prop.price}
                                    details={prop.details}
                                    className="property-item opacity-0"
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-16 lg:mt-24 flex items-center justify-center gap-2 property-item opacity-0">
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-black hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-black bg-black text-white text-sm font-light">1</button>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black transition-colors text-sm font-light">2</button>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black transition-colors text-sm font-light">3</button>
                            <span className="text-gray-400 mx-1">...</span>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-black hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Properties;
