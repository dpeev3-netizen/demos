import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const services = [
    {
        id: 'buying',
        title: 'Представителство на Купувачи',
        subtitle: 'Купуване',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
        desc: 'Откриваме идеалния имот за Вас — от скъпоценни off-market възможности до внимателно подбрани листинги. Нашата услуга включва:',
        points: ['Анализ на Вашите изисквания и бюджет', 'Достъп до off-market имоти', 'Водене на преговори за оптимална цена', 'Пълна юридическа подкрепа до нотариален акт'],
    },
    {
        id: 'selling',
        title: 'Представителство на Продавачи',
        subtitle: 'Продаване',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
        desc: 'Максимални резултати при продажба. Ние създаваме стратегия, която привлича правилните купувачи и осигурява най-добрата цена.',
        points: ['Безплатна пазарна оценка', 'Професионална фото и видео обиколка', 'Целеви маркетинг в 15+ международни канала', 'Преговори от позиция на сила'],
    },
    {
        id: 'rentals',
        title: 'Луксозни Наеми',
        subtitle: 'Наемане',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
        desc: 'Управляваме наемни отношения за най-престижните имоти в България, осигурявайки безпроблемен процес за собственици и наематели.',
        points: ['Подбор на квалифицирани наематели', 'Изготвяне на наемни договори', 'Управление на плащания и комуникация', 'Периодични инспекции на имота'],
    },
    {
        id: 'management',
        title: 'Управление на Собственост',
        subtitle: 'Управление',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800',
        desc: 'За собственици, които желаят цялостна грижа за своя имот — от поддръжка до финансово отчитане.',
        points: ['Координация на ремонти и поддръжка', 'Управление на комунални услуги', 'Месечни финансови отчети', 'Застрахователно консултиране'],
    },
    {
        id: 'legal',
        title: 'Вещно Право',
        subtitle: 'Юридически',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
        desc: 'Пълно юридическо обслужване и защита на Вашите интереси при всяка сделка с недвижим имот.',
        points: ['Детайлна проверка на собствеността', 'Изготвяне на договори и нотариални актове', 'Консултации по вещно-правни въпроси', 'Представителство пред институции'],
    },
    {
        id: 'mortgage',
        title: 'Ипотечни Кредити',
        subtitle: 'Финансиране',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
        desc: 'Персонализирани финансови решения за Вашата инвестиция. Сътрудничим си с водещи банкови институции за най-добрите условия.',
        points: ['Сравнителен анализ на банкови оферти', 'Преговори за преференциални лихвени проценти', 'Пълно съдействие при подготовка на документи', 'Ускорена процедура по одобрение'],
    },
];

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const tl = gsap.timeline();
        tl.fromTo('.serv-reveal',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <main className="bg-[#FAFAFA] min-h-screen pt-32 lg:pt-48 pb-24">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-20 lg:mb-28 serv-reveal opacity-0 text-center flex flex-col items-center">
                    <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Услуги</p>
                    <h1 className="text-4xl lg:text-6xl font-light text-[#0A0A0A] leading-tight mb-8">
                        Пълен спектър от<br />имотни услуги.
                    </h1>
                    <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        От вашата първа консултация до финалния нотариален акт — и отвъд. DEMOS предлага цялостно обслужване за всяка стъпка от Вашето имотно пътешествие.
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-24 lg:space-y-32">
                    {services.map((service, idx) => (
                        <div key={service.id} id={service.id} className={`serv-reveal opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image */}
                            <div className={`aspect-[4/3] overflow-hidden ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>

                            {/* Content */}
                            <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                                <p className="text-[10px] tracking-[0.25em] text-[#D90000] uppercase mb-4 font-medium">{service.subtitle}</p>
                                <h2 className="text-2xl lg:text-4xl font-light text-[#0A0A0A] mb-6">{service.title}</h2>
                                <p className="text-gray-500 font-light leading-relaxed mb-8">{service.desc}</p>
                                <ul className="space-y-3 mb-10">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-700">
                                            <div className="w-[4px] h-[4px] bg-[#D90000] rotate-45 mt-2 flex-shrink-0"></div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="inline-block bg-[#050505] text-white text-[10px] tracking-[0.2em] uppercase py-4 px-10 hover:bg-[#D90000] transition-all duration-300">
                                    {service.id === 'legal' || service.id === 'mortgage' ? 'Вижте повече' : 'Заявете Консултация'}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 border-t border-gray-200 pt-24 text-center serv-reveal opacity-0">
                    <h2 className="text-3xl lg:text-5xl font-light text-[#0A0A0A] mb-6">Не знаете откъде да започнете?</h2>
                    <p className="text-gray-500 font-light max-w-xl mx-auto mb-10">
                        Нашият екип е на разположение за безплатна консултация — без ангажимент, без притеснение.
                    </p>
                    <Link to="/contact" className="inline-block bg-[#D90000] text-white text-xs tracking-[0.2em] uppercase py-5 px-14 hover:bg-[#b00000] transition-all duration-300">
                        Свържете Се С Нас
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default Services;
