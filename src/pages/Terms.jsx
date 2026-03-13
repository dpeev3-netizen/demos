import React, { useEffect } from 'react';
import gsap from 'gsap';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.fromTo('.legal-reveal', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
    }, []);

    return (
        <main className="bg-[#FAFAFA] min-h-screen pt-32 lg:pt-48 pb-24">
            <div className="max-w-[900px] mx-auto px-6 lg:px-12">
                <div className="legal-reveal opacity-0 mb-12">
                    <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Правна информация</p>
                    <h1 className="text-3xl lg:text-5xl font-light text-[#0A0A0A]">Общи Условия</h1>
                    <p className="text-sm text-gray-400 mt-4">Последна актуализация: 01.01.2025</p>
                </div>

                <div className="prose prose-sm max-w-none text-gray-600 font-light leading-relaxed space-y-8">
                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">1. Общи разпоредби</h2>
                        <p>Настоящите Общи условия уреждат взаимоотношенията между DEMOS ЕООД и потребителите на уебсайта demos.bg. С използването на уебсайта, Вие приемате тези условия.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">2. Описание на услугите</h2>
                        <p>DEMOS предоставя услуги в областта на посредничеството с луксозни недвижими имоти, включително но не само: представителство на купувачи и продавачи, управление на наеми и собственост, пазарни оценки и консултации.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">3. Интелектуална собственост</h2>
                        <p>Всички материали на този уебсайт — текстове, изображения, логотипи, дизайн — са собственост на DEMOS ЕООД и са защитени от авторското право. Забранено е тяхното копиране, разпространение или използване без изрично писмено разрешение.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">4. Ограничение на отговорността</h2>
                        <p>Информацията на уебсайта е с информативен характер. DEMOS не носи отговорност за решения, взети въз основа на материалите в този сайт. Цените и наличността на имотите подлежат на промяна без предизвестие.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">5. Комисионни и плащания</h2>
                        <p>Комисионните на DEMOS се определят индивидуално за всяка сделка и се уточняват при сключване на договор за посредничество. Детайли се предоставят при лична консултация.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">6. Приложимо право</h2>
                        <p>Настоящите Общи условия се подчиняват на законодателството на Република България. Всички спорове ще бъдат решавани от компетентния съд в гр. София.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">7. Контакт</h2>
                        <p>За въпроси относно тези условия: <a href="mailto:legal@demos.bg" className="text-[#D90000] hover:underline">legal@demos.bg</a></p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Terms;
