import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [activeTab, setActiveTab] = useState('buy'); // 'buy' or 'rent'
    const [openDropdown, setOpenDropdown] = useState(null); // 'district', 'type', 'rooms'
    const [districtSearch, setDistrictSearch] = useState('');
    const searchRef = useRef(null);

    // Dropdown Data
    const options = {
        district: [
            'Абдовица', 'Аерогарата', 'Банишора', 'Балша', 'Банкя', 'Белите брези', 'Бенковски',
            'Бистрица', 'Божурище', 'Борово', 'Ботунец', 'Бояна', 'Бункера', 'Бусманци', 'Бухово',
            'Бъкстон', 'В.з. Малинова долина', 'Васил Левски', 'Витоша', 'Владая', 'Военна рампа',
            'Войнеговци', 'Волуяк', 'Враждебна', 'Връбница', 'Гара Искър', 'Гевгелийски', 'Гео Милев',
            'Герман', 'Горна Баня', 'Горни Богров', 'Горни Лозен', 'Горубляне', 'Гоце Делчев',
            'Дианабад', 'Димитър Миленков', 'Доброславци', 'Долни Богров', 'Долни Лозен', 'Долни Пасарел',
            'Драгалевци', 'Дружба', 'Дървеница', 'Железница', 'Желява', 'Житен', 'Западен парк',
            'Захарна фабрика', 'Зона Б-5, Б-18, Б-19', 'Иван Вазов', 'Изгрев', 'Изток', 'Илинден',
            'Илиянци', 'Казичене', 'Киноцентър', 'Княжево', 'Красна поляна', 'Красно село', 'Крива река',
            'Кръстова вада', 'Лагера', 'Лев Толстой', 'Левски', 'Лозенец', 'Люлин', 'Малашевци',
            'Малинова долина', 'Манастирски ливади', 'Младост', 'Модерно предградие', 'Мусагеница',
            'Надежда', 'Негован', 'Обеля', 'Оборище', 'Овча купел', 'Орландовци', 'Павлово', 'Панчарево',
            'Плана', 'Подгумер', 'Подуене', 'Полигона', 'Разсадника', 'Редута', 'Република', 'Света Троица',
            'Световрачене', 'Свобода', 'Сердика', 'Сеславци', 'Симеоново', 'Славия', 'Слатина',
            'Стефан Караджа', 'Стрелбище', 'Студентски град', 'Сухата река', 'Суходол', 'Требич',
            'Триъгълника', 'Факултета', 'Филиповци', 'Фондови жилища', 'Хаджи Димитър', 'Хиподрума',
            'Хладилника', 'Христо Ботев', 'Централна гара', 'Център', 'Челопечене', 'Чепинци',
            'Щъркелово гнездо', 'Яворов', 'Яна'
        ].sort((a,b)=>a.localeCompare(b, 'bg')),
        type: ['Апартамент', 'Къща', 'Вила', 'Пентхаус', 'Офис'],
        rooms: ['1', '2', '3', '4', '5+']
    };

    const [selections, setSelections] = useState({
        district: 'Изберете райони',
        type: 'Тип имот',
        rooms: 'Стаи'
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setDistrictSearch('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);    useEffect(() => {
        // Hero Animations
        gsap.fromTo('#hero .reveal',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', stagger: 0.2 }
        );

        // Subtle Hero Parallax
        const st = ScrollTrigger.create({
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
            animation: gsap.to('.hero-img', {
                yPercent: 15,
                ease: "none",
            })
        });

        // Other revels
        const revealElements = document.querySelectorAll('#properties .reveal, #services-section .reveal, #about .reveal, #sell-with-us .reveal');
        revealElements.forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    }
                }
            );
        });

        return () => {
            st.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main>
            {/* HERO SECTION */}
            <section id="hero" className="relative h-[85vh] lg:h-[90vh] w-full flex flex-col items-center justify-center bg-black z-10">
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <div className="hero-img-container">
                        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
                            alt="Модерен бял интериор" className="w-full h-full object-cover hero-img" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70"></div>
                    </div>
                </div>

                <div className="absolute bottom-8 lg:bottom-12 z-20 w-full max-w-[1100px] mx-auto px-4 lg:px-12 left-0 right-0">
                    <div className="relative z-10 text-left reveal w-full mb-6 lg:mb-8">
                        <p className="text-[10px] lg:text-xs tracking-widest text-[#D90000] mb-3 uppercase">Елитни Имоти. България.</p>
                        <h1 className="text-3xl lg:text-5xl font-light text-white leading-tight max-w-2xl">
                            Открийте Вашия нов дом.<br />На един клик разстояние.
                        </h1>
                    </div>

                    <div id="search-console" className="w-full">
                        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] lg:shadow-black/50 w-full overflow-visible">
                            <div className="flex gap-6 px-6 lg:px-10 pt-6 lg:pt-8 mb-2 lg:mb-0">
                                <span 
                                    onClick={() => setActiveTab('buy')}
                                    className={`search-tab text-[9px] lg:text-[10px] tracking-widest uppercase font-medium transition-colors ${activeTab === 'buy' ? 'active text-white' : 'text-gray-500 hover:text-white cursor-pointer'}`}
                                >
                                    Покупка
                                </span>
                                <span 
                                    onClick={() => setActiveTab('rent')}
                                    className={`search-tab text-[9px] lg:text-[10px] tracking-widest uppercase font-medium transition-colors ${activeTab === 'rent' ? 'active text-white' : 'text-gray-500 hover:text-white cursor-pointer'}`}
                                >
                                    Наем
                                </span>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0 w-full form" role="search" ref={searchRef}>
                                <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 px-6 lg:px-10 pb-6 lg:pb-8 lg:pt-8 relative z-30 divide-y lg:divide-y-0 lg:divide-x divide-white/5 w-full">
                                    {/* Static Location Component */}
                                    <div className="py-5 lg:py-0 lg:pr-8">
                                        <label className="block text-[9px] tracking-[0.2em] text-white/40 uppercase mb-3 font-medium">Населено място</label>
                                        <div className="custom-select-wrapper pointer-events-none">
                                            <div className="custom-select-container group/select text-white gap-3">
                                                <span className="select-value tracking-wide font-light text-sm truncate">София, България</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* District Dropdown */}
                                    <div className="py-5 lg:py-0 lg:px-8">
                                        <label className="block text-[9px] tracking-[0.2em] text-white/40 uppercase mb-3 font-medium">Район / Квартал</label>
                                        <div className={`custom-select-wrapper ${openDropdown === 'district' ? 'open' : ''}`}>
                                            <div 
                                                className={`custom-select-container ${selections.district === 'Изберете райони' ? 'placeholder' : ''} group/select hover:text-white transition-colors gap-3`}
                                                onClick={() => {
                                                    if (openDropdown === 'district') {
                                                        setOpenDropdown(null);
                                                        setDistrictSearch('');
                                                    } else {
                                                        setOpenDropdown('district');
                                                    }
                                                }}
                                            >
                                                <span className="select-value tracking-wide text-sm font-light truncate">{selections.district}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                            </div>
                                            <div className="custom-options min-w-[300px]">
                                                <div className="px-4 py-2 sticky top-0 bg-[#0A0A0A] z-10 border-b border-white/10">
                                                    <input 
                                                        type="text" 
                                                        placeholder="Търси квартал..." 
                                                        className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-[#D90000] font-light"
                                                        value={districtSearch}
                                                        onChange={(e) => setDistrictSearch(e.target.value)}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </div>
                                                {options.district
                                                    .filter(opt => opt.toLowerCase().startsWith(districtSearch.toLowerCase()))
                                                    .map(opt => (
                                                    <div 
                                                        key={opt} 
                                                        className="custom-option"
                                                        onClick={() => {
                                                            setSelections({...selections, district: opt});
                                                            setOpenDropdown(null);
                                                            setDistrictSearch('');
                                                        }}
                                                    >
                                                        {opt}
                                                    </div>
                                                ))}
                                                {options.district.filter(opt => opt.toLowerCase().startsWith(districtSearch.toLowerCase())).length === 0 && (
                                                    <div className="px-4 py-4 text-sm text-gray-500 text-center font-light">
                                                        Няма намерени резултати
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Type Dropdown */}
                                    <div className="py-5 lg:py-0 lg:px-8">
                                        <label className="block text-[9px] tracking-[0.2em] text-white/40 uppercase mb-3 font-medium">Тип имот</label>
                                        <div className={`custom-select-wrapper ${openDropdown === 'type' ? 'open' : ''}`}>
                                            <div 
                                                className={`custom-select-container ${selections.type === 'Тип имот' ? 'placeholder' : ''} group/select hover:text-white transition-colors gap-3`}
                                                onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                                            >
                                                <span className="select-value tracking-wide text-sm font-light truncate">{selections.type}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                            </div>
                                            <div className="custom-options">
                                                {options.type.map(opt => (
                                                    <div 
                                                        key={opt} 
                                                        className="custom-option"
                                                        onClick={() => {
                                                            setSelections({...selections, type: opt});
                                                            setOpenDropdown(null);
                                                        }}
                                                    >
                                                        {opt}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rooms Dropdown */}
                                    <div className="py-5 lg:py-0 lg:pl-8">
                                        <label className="block text-[9px] tracking-[0.2em] text-white/40 uppercase mb-3 font-medium">Стаи</label>
                                        <div className={`custom-select-wrapper ${openDropdown === 'rooms' ? 'open' : ''}`}>
                                            <div 
                                                className={`custom-select-container ${selections.rooms === 'Стаи' ? 'placeholder' : ''} group/select hover:text-white transition-colors gap-3`}
                                                onClick={() => setOpenDropdown(openDropdown === 'rooms' ? null : 'rooms')}
                                            >
                                                <span className="select-value tracking-wide text-sm font-light truncate">{selections.rooms}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                            </div>
                                            <div className="custom-options">
                                                {options.rooms.map(opt => (
                                                    <div 
                                                        key={opt} 
                                                        className="custom-option"
                                                        onClick={() => {
                                                            setSelections({...selections, rooms: opt});
                                                            setOpenDropdown(null);
                                                        }}
                                                    >
                                                        {opt}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-auto flex justify-center lg:justify-end px-6 pb-6 lg:pb-0 lg:pr-10">
                                    <Link to="/properties" className="bg-[#D90000] text-white hover:bg-[#ff0000] focus:ring-2 focus:ring-white focus:outline-none transition-all duration-500 py-3 lg:py-4 px-10 w-full lg:w-auto flex items-center justify-center gap-3 flex-shrink-0 group z-20">
                                        <span className="text-[10px] tracking-[0.15em] group-hover:tracking-[0.3em] transition-all duration-500 uppercase font-bold">Търси</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-white group-hover:translate-x-1 transition-transform duration-500" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROPERTY GRID */}
            <section id="properties" className="bg-[#FAFAFA] pt-28 lg:pt-48 pb-20 lg:pb-32 relative z-0">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <h1 className="text-sm tracking-widest uppercase text-center mb-12 lg:mb-20 reveal">Елитни Имоти</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                        <div className="property-card reveal">
                            <div className="property-image aspect-[4/3]">
                                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" alt="Пентхаус Витоша" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium tracking-wide uppercase">Пентхаус "Витоша"</h3>
                                <p className="text-sm text-gray-500 mt-1">€ 1 250 000</p>
                                <p className="text-xs text-gray-400 mt-2">4 стаи · 210 м² · Бояна, София</p>
                            </div>
                        </div>

                        <div className="property-card reveal">
                            <div className="property-image aspect-[4/3]">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Резиденция Лозенец" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium tracking-wide uppercase">Резиденция "Лозенец"</h3>
                                <p className="text-sm text-gray-500 mt-1">€ 2 100 000</p>
                                <p className="text-xs text-gray-400 mt-2">5 стаи · 340 м² · Лозенец, София</p>
                            </div>
                        </div>

                        <div className="property-card reveal">
                            <div className="property-image aspect-[4/3]">
                                <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800" alt="Апартамент Докторски Памятник" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium tracking-wide uppercase">Апартамент "Докторски Памятник"</h3>
                                <p className="text-sm text-gray-500 mt-1">€ 780 000</p>
                                <p className="text-xs text-gray-400 mt-2">3 стаи · 162 м² · Докторски Памятник, София</p>
                            </div>
                        </div>

                        <div className="property-card reveal">
                            <div className="property-image aspect-[4/3]">
                                <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800" alt="Вила Бистрица" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium tracking-wide uppercase">Вила "Бистрица"</h3>
                                <p className="text-sm text-gray-500 mt-1">€ 3 400 000</p>
                                <p className="text-xs text-gray-400 mt-2">6 стаи · 520 м² · Бистрица, София</p>
                            </div>
                        </div>

                        <div className="property-card reveal">
                            <div className="property-image aspect-[4/3]">
                                <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800" alt="Мезонет Иван Вазов" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium tracking-wide uppercase">Мезонет "Иван Вазов"</h3>
                                <p className="text-sm text-gray-500 mt-1">€ 920 000</p>
                                <p className="text-xs text-gray-400 mt-2">4 стаи · 185 м² · Иван Вазов, София</p>
                            </div>
                        </div>

                        <div className="property-card reveal hidden md:block lg:block">
                            <div className="property-image aspect-[4/3]">
                                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800" alt="Студио Гарден" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium tracking-wide uppercase">Студио "Гарден"</h3>
                                <p className="text-sm text-gray-500 mt-1">€ 450 000</p>
                                <p className="text-xs text-gray-400 mt-2">2 стаи · 95 м² · Център, Пловдив</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16 lg:mt-20 reveal">
                        <Link to="/properties" className="ghost-btn inline-block border border-black text-[#050505] text-xs tracking-widest uppercase px-10 py-4 transition-all duration-400 w-full md:w-auto">
                            Виж Всички Имоти
                        </Link>
                    </div>
                </div>
            </section>

            {/* ABOUT US */}
            <section id="about" className="bg-[#0A0A0A] pt-12 pb-24 lg:pt-16 lg:pb-32">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-12 lg:mb-24">
                    <div className="reveal">
                        <p className="text-xs tracking-widest text-[#D90000] uppercase mb-6 lg:mb-8">Философия</p>
                        <p className="text-2xl lg:text-3xl font-light leading-relaxed text-white">
                            Ние не продаваме апартаменти.<br />
                            Ние договаряме елитни пространства.
                        </p>
                        <p className="text-sm text-gray-400 mt-8 lg:mt-10 leading-relaxed max-w-lg mb-12">
                            С над 15 години безкомпромисен опит на върха на пазара на луксозни недвижими имоти, DEMOS се
                            утвърди като абсолютен лидер в сегмента на ексклузивните резиденции в България. Нашият подход
                            надхвърля традиционното посредничество – ние създаваме персонализирани стратегии за всеки
                            клиент, гарантирайки пълна конфиденциалност и внимание към всеки детайл. От скрити градски
                            бижута до впечатляващи имения, нашето портфолио е внимателно селектирано, за да отговори на
                            най-високите изисквания на нашите локални и международни клиенти. Всяка сделка е изкуство.
                        </p>

                        <div className="border-t border-white/10 pt-8 mt-12 w-full max-w-lg">
                            <p className="text-xl text-white">Диана Лазарова</p>
                            <p className="text-sm text-[#D90000] tracking-widest uppercase mt-2">Основател & Управител</p>
                            <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-lg">
                                Като основател и управляващ партньор, Диана Лазарова носи със себе си десетилетия опит в
                                управлението на високопрофилни сделки и инвестиционни портфейли. С изтънчен усет за стойност
                                и нейното дълбоко познаване на глобалните тенденции, тя лично ръководи най-значимите
                                преговори, с елегантност и ефективност.
                            </p>
                            <Link to="/about" className="text-xs uppercase tracking-widest text-[#D90000] hover:text-white transition-colors mt-8 inline-flex items-center gap-2 group">
                                Свържете се лично
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end reveal">
                        <div className="w-full md:w-[80%] lg:w-[85%] relative overflow-hidden group shadow-2xl">
                            <img src="/2138e132-c957-41f8-866c-ba4d2b459f56.png" className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105" alt="Диана Лазарова" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services-section" className="bg-[#FAFAFA] py-24 lg:py-40 relative z-0">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-16 lg:mb-24 reveal">
                        <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Експертиза</p>
                        <h2 className="text-4xl lg:text-5xl font-light text-[#0A0A0A] leading-tight">
                            Нашите Услуги
                        </h2>
                        <p className="text-sm font-light text-gray-500 max-w-md mx-auto mt-6">
                            Комплексно обслужване, съобразено с най-високите стандарти в индустрията.
                        </p>
                    </div>

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <Link to="/services#management" className="group relative bg-white border border-black/[0.06] p-8 lg:p-10 flex flex-col justify-between min-h-[320px] overflow-hidden reveal transition-all duration-500 hover:border-black/10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                            {/* Hover background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] tracking-[0.2em] text-gray-400 group-hover:text-[#D90000] uppercase font-medium transition-colors duration-500">01</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-[#D90000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                                {/* Icon */}
                                <div className="mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A0A0A] group-hover:text-white transition-colors duration-500"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-light text-[#0A0A0A] group-hover:text-white transition-colors duration-500 mb-4 leading-tight">Управление на Собственост</h3>
                                <p className="text-sm font-light text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-500">
                                    Цялостна грижа за Вашия имот — от поддръжка до финансово отчитане.
                                </p>
                            </div>
                            <div className="relative z-10 mt-8">
                                <span className="text-[10px] tracking-[0.15em] uppercase text-[#D90000] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 inline-block">Вижте повече →</span>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link to="/services#legal" className="group relative bg-white border border-black/[0.06] p-8 lg:p-10 flex flex-col justify-between min-h-[320px] overflow-hidden reveal transition-all duration-500 hover:border-black/10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] tracking-[0.2em] text-gray-400 group-hover:text-[#D90000] uppercase font-medium transition-colors duration-500">02</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-[#D90000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                                <div className="mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A0A0A] group-hover:text-white transition-colors duration-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-light text-[#0A0A0A] group-hover:text-white transition-colors duration-500 mb-4 leading-tight">Вещно Право</h3>
                                <p className="text-sm font-light text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-500">
                                    Пълно юридическо обслужване и защита на Вашите интереси при всяка сделка.
                                </p>
                            </div>
                            <div className="relative z-10 mt-8">
                                <span className="text-[10px] tracking-[0.15em] uppercase text-[#D90000] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 inline-block">Вижте повече →</span>
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link to="/services#mortgage" className="group relative bg-white border border-black/[0.06] p-8 lg:p-10 flex flex-col justify-between min-h-[320px] overflow-hidden reveal transition-all duration-500 hover:border-black/10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] tracking-[0.2em] text-gray-400 group-hover:text-[#D90000] uppercase font-medium transition-colors duration-500">03</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-[#D90000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                                <div className="mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A0A0A] group-hover:text-white transition-colors duration-500"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-light text-[#0A0A0A] group-hover:text-white transition-colors duration-500 mb-4 leading-tight">Ипотечни Кредити</h3>
                                <p className="text-sm font-light text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-500">
                                    Персонализирани финансови решения с водещи банкови институции.
                                </p>
                            </div>
                            <div className="relative z-10 mt-8">
                                <span className="text-[10px] tracking-[0.15em] uppercase text-[#D90000] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 inline-block">Вижте повече →</span>
                            </div>
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12 lg:mt-20 reveal">
                        <Link to="/services" className="ghost-btn inline-block border border-black text-[#050505] text-xs tracking-widest uppercase px-10 py-4 transition-all duration-400 w-full md:w-auto">
                            Виж Всички Услуги
                        </Link>
                    </div>
                </div>
            </section>

            {/* SELL WITH US */}
            <section id="sell-with-us" className="bg-[#FAFAFA] py-24 lg:py-40 relative overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D90000]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center reveal relative z-10">
                    <p className="text-[10px] lg:text-xs tracking-[0.2em] text-[#D90000] uppercase mb-6 lg:mb-8 font-medium">Продай с нас</p>
                    <h2 className="text-4xl lg:text-6xl font-light text-[#0A0A0A] leading-[1.1] tracking-tight mb-8">
                        Колко струва Вашият<br className="hidden md:block" /> елитен имот?
                    </h2>
                    <p className="text-gray-500 text-base lg:text-lg font-light leading-relaxed mb-12 lg:mb-16 max-w-xl mx-auto">
                        Разберете реалната му пазарна цена онлайн за по-малко от 30 секунди. Дискретно, бързо и с нула ангажименти.
                    </p>
                    <Link to="/sell" className="inline-block bg-[#0A0A0A] text-white text-[10px] lg:text-xs tracking-[0.2em] font-medium uppercase px-12 py-5 hover:bg-[#D90000] ring-1 ring-transparent hover:ring-[#D90000] hover:shadow-[0_20px_40px_-10px_rgba(217,0,0,0.4)] transition-all duration-500 w-full md:w-auto">
                        Оцени Имота Си
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
