import React, { useEffect } from 'react';
import gsap from 'gsap';

const teamMembers = [
    { name: 'Диана Лазарова', role: 'Основател & Управител', image: '/2138e132-c957-41f8-866c-ba4d2b459f56.png' },
    { name: 'Мартин Петров', role: 'Старши Партньор', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' },
    { name: 'Елена Николова', role: 'Експерт Луксозни Имоти', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
    { name: 'Иван Георгиев', role: 'Инвестиционен Консултант', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800' },
];

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline();
        tl.fromTo('.about-reveal',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <main className="bg-black text-white min-h-screen pt-32 lg:pt-48 pb-24">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                {/* Hero / Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
                    <div className="about-reveal opacity-0">
                        <p className="text-xs tracking-widest text-[#D90000] uppercase mb-8">За Нас</p>
                        <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-10">
                            Изкуството на<br />елитните сделки.
                        </h1>
                        <div className="text-gray-400 font-light text-base lg:text-lg leading-relaxed space-y-6">
                            <p>
                                С над 15 години безкомпромисен опит на върха на пазара на луксозни недвижими имоти, DEMOS се утвърди като абсолютен лидер в сегмента на ексклузивните резиденции в България.
                            </p>
                            <p>
                                Нашият подход надхвърля традиционното посредничество – ние създаваме персонализирани стратегии за всеки клиент, гарантирайки пълна конфиденциалност и внимание към всеки детайл. От скрити градски бижута до впечатляващи имения, нашето портфолио е внимателно селектирано.
                            </p>
                        </div>
                    </div>
                    <div className="about-reveal opacity-0 w-full relative aspect-[3/4] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Interior" />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="border-t border-white/10 pt-24 mb-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 about-reveal opacity-0">
                        <div>
                            <p className="text-xs tracking-widest text-[#D90000] uppercase mb-4">Нашият Екип</p>
                            <h2 className="text-3xl lg:text-5xl font-light">Експертите зад успеха</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="about-reveal opacity-0 group">
                                <div className="aspect-[3/4] overflow-hidden mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h3 className="text-lg font-light tracking-wide">{member.name}</h3>
                                <p className="text-xs text-[#D90000] tracking-widest uppercase mt-2">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
};
export default About;
