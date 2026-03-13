import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const benefits = [
    { icon: '📊', title: 'Пазарна Оценка', desc: 'Безплатна и точна оценка на Вашия имот, базирана на реални пазарни данни и задълбочен анализ.' },
    { icon: '📸', title: 'Премиум Маркетинг', desc: 'Професионална фотография, видео обиколки с дрон и публикации в елитни международни портали.' },
    { icon: '🤝', title: 'Персонален Подход', desc: 'Посветен брокер, който познава пазара и Вашите нужди. Всяка стъпка е съгласувана с Вас.' },
    { icon: '🔒', title: 'Конфиденциалност', desc: 'Работим с дискретни off-market листинги за клиенти, които ценят своята поверителност.' },
    { icon: '⚡', title: 'Бързи Резултати', desc: 'Средно 45 дни до затваряне на сделка при луксозни имоти — значително по-бързо от пазарното средно.' },
    { icon: '💰', title: 'Максимална Стойност', desc: 'Нашите клиенти получават средно 12% над пазарната цена благодарение на нашата стратегия.' },
];

const steps = [
    { num: '01', title: 'Консултация', desc: 'Среща с нашия експерт за оценка на имота и разбиране на Вашите цели.' },
    { num: '02', title: 'Подготовка', desc: 'Професионална фотосесия, home staging консултация и изготвяне на маркетингова стратегия.' },
    { num: '03', title: 'Излизане на Пазара', desc: 'Листване в елитни канали, целева реклама и активно търсене на квалифицирани купувачи.' },
    { num: '04', title: 'Затваряне на Сделката', desc: 'Водене на преговори, юридическа подкрепа и безпроблемно финализиране.' },
];

const Sell = () => {
    const [formStep, setFormStep] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        const tl = gsap.timeline();
        tl.fromTo('.sell-reveal',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <main className="bg-[#FAFAFA] min-h-screen">

            {/* Hero */}
            <section className="relative bg-black text-white pt-40 lg:pt-52 pb-24 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>

                <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
                    <p className="text-[10px] tracking-[0.25em] text-[#D90000] uppercase mb-6 font-medium sell-reveal opacity-0">Продай С Нас</p>
                    <h1 className="text-4xl lg:text-7xl font-light leading-tight mb-8 sell-reveal opacity-0">
                        Вашият имот заслужава<br />
                        <span className="text-[#D90000]">най-доброто.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-400 font-light max-w-2xl leading-relaxed sell-reveal opacity-0">
                        Доверете ни се да превърнем Вашия имот в успешна сделка. С DEMOS получавате не просто брокер, а стратегически партньор.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sell-reveal opacity-0">
                    <div>
                        <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Защо DEMOS</p>
                        <h2 className="text-3xl lg:text-5xl font-light text-[#0A0A0A]">Предимства</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {benefits.map((b, idx) => (
                        <div key={idx} className="sell-reveal opacity-0 bg-white p-8 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 group">
                            <span className="text-3xl mb-6 block">{b.icon}</span>
                            <h3 className="text-sm font-medium tracking-wider uppercase mb-3 group-hover:text-[#D90000] transition-colors">{b.title}</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Steps */}
            <section className="bg-[#0A0A0A] text-white py-24 lg:py-32">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="mb-16 sell-reveal opacity-0">
                        <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Процес</p>
                        <h2 className="text-3xl lg:text-5xl font-light">Как работим</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((s, idx) => (
                            <div key={idx} className="sell-reveal opacity-0 relative">
                                <span className="text-6xl lg:text-7xl font-light text-white/5 absolute -top-4 -left-2">{s.num}</span>
                                <div className="relative pt-12">
                                    <div className="w-8 h-[1px] bg-[#D90000] mb-6"></div>
                                    <h3 className="text-lg font-light tracking-wide mb-3">{s.title}</h3>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valuation Form */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="sell-reveal opacity-0">
                        <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Безплатна Оценка</p>
                        <h2 className="text-3xl lg:text-5xl font-light text-[#0A0A0A] mb-8">Разберете стойността на Вашия имот</h2>
                        <p className="text-gray-500 font-light leading-relaxed mb-8">
                            Попълнете формата и нашият експерт ще се свърже с Вас в рамките на 24 часа с детайлна пазарна оценка на Вашия имот — напълно безплатно и без ангажимент.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 font-light">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Средно време за отговор: 4 часа
                        </div>
                    </div>

                    <div className="bg-white p-8 lg:p-12 border border-gray-100 shadow-xl sell-reveal opacity-0">
                        {/* Step Indicator */}
                        <div className="flex items-center gap-4 mb-10">
                            {[1, 2, 3].map(s => (
                                <div key={s} className="flex items-center gap-2">
                                    <div className={`w-8 h-8 flex items-center justify-center text-xs font-medium border transition-all ${formStep >= s ? 'bg-black text-white border-black' : 'bg-transparent text-gray-400 border-gray-300'}`}>{s}</div>
                                    {s < 3 && <div className={`w-8 h-[1px] ${formStep > s ? 'bg-black' : 'bg-gray-300'}`}></div>}
                                </div>
                            ))}
                        </div>

                        {formStep === 1 && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-light mb-2">Основна информация</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Име</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Телефон</label>
                                        <input type="tel" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Имейл</label>
                                    <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <button onClick={() => setFormStep(2)} className="w-full bg-[#050505] text-white text-[10px] tracking-[0.2em] uppercase py-4 mt-4 hover:bg-[#D90000] transition-all duration-300">
                                    Продължи →
                                </button>
                            </div>
                        )}

                        {formStep === 2 && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-light mb-2">Информация за имота</h3>
                                <div>
                                    <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Тип имот</label>
                                    <select className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer" defaultValue="">
                                        <option value="" disabled>Изберете...</option>
                                        <option>Апартамент</option>
                                        <option>Къща / Вила</option>
                                        <option>Пентхаус</option>
                                        <option>Търговски обект</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Площ (м²)</label>
                                        <input type="number" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Локация</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" placeholder="Напр. Лозенец, София" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setFormStep(1)} className="flex-1 border border-gray-300 text-[10px] tracking-[0.2em] uppercase py-4 hover:border-black transition-all duration-300">
                                        ← Назад
                                    </button>
                                    <button onClick={() => setFormStep(3)} className="flex-1 bg-[#050505] text-white text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-[#D90000] transition-all duration-300">
                                        Продължи →
                                    </button>
                                </div>
                            </div>
                        )}

                        {formStep === 3 && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-light mb-2">Допълнителни детайли</h3>
                                <div>
                                    <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Очаквана цена (по желание)</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors" placeholder="€" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Допълнителна информация</label>
                                    <textarea rows="3" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors resize-none" placeholder="Опишете Вашия имот..."></textarea>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setFormStep(2)} className="flex-1 border border-gray-300 text-[10px] tracking-[0.2em] uppercase py-4 hover:border-black transition-all duration-300">
                                        ← Назад
                                    </button>
                                    <button className="flex-1 bg-[#D90000] text-white text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-[#b00000] transition-all duration-300">
                                        Изпрати Заявка
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Sell;
