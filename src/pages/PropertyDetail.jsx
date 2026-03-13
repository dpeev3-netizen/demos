import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';

// Mock detailed data
const propertyData = {
    id: 1,
    title: 'Пентхаус "Витоша"',
    price: '€ 1 250 000',
    location: 'Бояна, София',
    specs: {
        area: '210 м²',
        bedrooms: 3,
        bathrooms: 3,
        year: 2024,
        type: 'Пентхаус',
        floor: 'Последен (6/6)',
    },
    description: `Представяме на Вашето внимание един наистина изключителен имот, разположен в престижния квартал Бояна. Този зашеметяващ пентхаус предлага безкомпромисен лукс, спиращи дъха панорамни гледки към Витоша и града, както и най-висок клас завършващи материали.\n\nПространството е проектирано с мисъл за максимален комфорт и уединение. Разполага с обширна дневна зона с високи тавани (3.20м), френски прозорци, които осигуряват изобилие от естествена светлина, и директен достъп до панорамна тераса. Имотът е напълно обзаведен с дизайнерски мебели и оборудван с най-съвременна "умна" система за управление на дома.`,
    amenities: [
        'Умен дом (Smart Home)',
        'Панорамна тераса',
        'Подово отопление',
        'Двоен гараж',
        '24/7 Жива охрана',
        'Асансьор с чип контрол',
        'Фитнес и Спа в сградата',
        'Вградена аудио система',
    ],
    images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600', // hero
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    ]
};

const PropertyDetail = () => {
    const { id } = useParams();
    // In a real app, you'd fetch property data based on the ID here.
    // We'll just use the dummy `propertyData` for demonstration.

    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline();

        // Hero Image Parallax & Fade
        tl.fromTo('.prop-hero-img',
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
        );

        // Content reveal
        tl.fromTo('.prop-reveal',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' },
            "-=0.8"
        );
    }, [id]);

    return (
        <main className="bg-[#FAFAFA] min-h-screen pb-24">
            {/* HERO IMAGE */}
            <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden bg-black z-0">
                <img
                    src={propertyData.images[0]}
                    alt={propertyData.title}
                    className="w-full h-full object-cover prop-hero-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>

                <div className="absolute bottom-8 lg:bottom-16 z-20 w-full max-w-[1440px] px-6 lg:px-12 left-1/2 -translate-x-1/2">
                    <Link to="/properties" className="inline-flex items-center gap-2 text-[10px] tracking-widest text-[#D90000] uppercase mb-6 hover:text-white transition-colors prop-reveal opacity-0 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Обратно към каталога
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-light text-white leading-tight prop-reveal opacity-0">
                        {propertyData.title}
                    </h1>
                    <p className="text-lg text-gray-300 mt-4 font-light tracking-wide prop-reveal opacity-0">
                        {propertyData.location}
                    </p>
                </div>
            </section>

            {/* CONTENT SPLIT */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 z-10 relative">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Main Details (Left/Top) */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 border-b border-black/10 pb-8 prop-reveal opacity-0">
                            <div>
                                <p className="text-3xl lg:text-4xl font-light text-[#D90000] mb-2">{propertyData.price}</p>
                                <p className="text-sm tracking-widest text-gray-400 uppercase">Оферта № 24501</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors" title="Добави в любими">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                </button>
                                <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors" title="Сподели">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                </button>
                            </div>
                        </div>

                        {/* Quick Specs */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 prop-reveal opacity-0">
                            <div>
                                <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-2">Обща Площ</p>
                                <p className="text-xl font-light text-black">{propertyData.specs.area}</p>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-2">Спални</p>
                                <p className="text-xl font-light text-black">{propertyData.specs.bedrooms}</p>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-2">Бани</p>
                                <p className="text-xl font-light text-black">{propertyData.specs.bathrooms}</p>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-2">Етаж</p>
                                <p className="text-xl font-light text-black">{propertyData.specs.floor}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-16 prop-reveal opacity-0">
                            <h2 className="text-xs tracking-widest uppercase font-medium mb-8">Описание на имота</h2>
                            <div className="text-black text-sm md:text-base font-light leading-relaxed space-y-6">
                                {propertyData.description.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="mb-16 prop-reveal opacity-0">
                            <h2 className="text-xs tracking-widest uppercase font-medium mb-8">Особености и Екстри</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {propertyData.amenities.map((amenity, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-light text-gray-600">
                                        <div className="w-[4px] h-[4px] bg-[#D90000] rotate-45"></div>
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gallery Grid */}
                        <div className="prop-reveal opacity-0">
                            <h2 className="text-xs tracking-widest uppercase font-medium mb-8">Галерия</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {propertyData.images.slice(1).map((img, idx) => (
                                    <div key={idx} className="aspect-[4/3] overflow-hidden group cursor-pointer">
                                        <img src={img} alt={`${propertyData.title} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Sticky (Right) */}
                    <aside className="w-full lg:w-[400px] flex-shrink-0">
                        <div className="sticky top-32">
                            {/* Agent Card */}
                            <div className="bg-white p-8 border border-gray-100 shadow-xl prop-reveal opacity-0 mb-8">
                                <h3 className="text-[10px] tracking-widest text-[#D90000] uppercase mb-8 font-medium">Свържете се с брокер</h3>

                                <div className="flex items-center gap-6 mb-8">
                                    <img src="/2138e132-c957-41f8-866c-ba4d2b459f56.png" alt="Диана Лазарова" className="w-20 h-20 rounded-full object-cover object-top" />
                                    <div>
                                        <p className="text-lg text-black font-light mb-1">Диана Лазарова</p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">Основател<br />Управляващ Партньор</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <a href="tel:+359888123456" className="flex items-center gap-4 text-sm font-light text-black hover:text-[#D90000] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        +359 888 123 456
                                    </a>
                                    <a href="mailto:diana@demos.bg" className="flex items-center gap-4 text-sm font-light text-black hover:text-[#D90000] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        diana@demos.bg
                                    </a>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <input type="text" placeholder="Име и Фамилия" className="w-full bg-transparent border-b border-gray-300 rounded-none py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                    <div>
                                        <input type="tel" placeholder="Телефон" className="w-full bg-transparent border-b border-gray-300 rounded-none py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                    <div className="pt-2">
                                        <textarea placeholder="Съобщение (Опционално)" rows="3" className="w-full bg-transparent border-b border-gray-300 rounded-none py-3 text-sm font-light focus:outline-none focus:border-black transition-colors resize-none"></textarea>
                                    </div>
                                    <button type="button" className="w-full bg-[#050505] text-white text-[10px] tracking-[0.2em] uppercase py-4 mt-4 hover:bg-[#D90000] transition-all duration-300">
                                        Изпрати Запитване
                                    </button>
                                </form>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>
        </main>
    );
};

export default PropertyDetail;
