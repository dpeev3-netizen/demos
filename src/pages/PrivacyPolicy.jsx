import React, { useEffect } from 'react';
import gsap from 'gsap';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.fromTo('.legal-reveal', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
    }, []);

    return (
        <main className="bg-[#FAFAFA] min-h-screen pt-32 lg:pt-48 pb-24">
            <div className="max-w-[900px] mx-auto px-6 lg:px-12">
                <div className="legal-reveal opacity-0 mb-12">
                    <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Правна информация</p>
                    <h1 className="text-3xl lg:text-5xl font-light text-[#0A0A0A]">Политика за Поверителност</h1>
                    <p className="text-sm text-gray-400 mt-4">Последна актуализация: 01.01.2025</p>
                </div>

                <div className="prose prose-sm max-w-none text-gray-600 font-light leading-relaxed space-y-8">
                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">1. Обща информация</h2>
                        <p>DEMOS ЕООД ("DEMOS", "ние", "нас") е администратор на лични данни по смисъла на Общия регламент за защита на данните (GDPR). Настоящата политика описва как събираме, използваме и защитаваме Вашите лични данни при използването на нашия уебсайт и услуги.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">2. Какви данни събираме</h2>
                        <p>Ние може да събираме следните видове лични данни:</p>
                        <ul className="list-none space-y-2 mt-4">
                            <li className="flex items-start gap-3"><div className="w-[4px] h-[4px] bg-[#D90000] rotate-45 mt-2 flex-shrink-0"></div>Имена и данни за контакт (имейл, телефон)</li>
                            <li className="flex items-start gap-3"><div className="w-[4px] h-[4px] bg-[#D90000] rotate-45 mt-2 flex-shrink-0"></div>Информация за имоти, предоставена от Вас</li>
                            <li className="flex items-start gap-3"><div className="w-[4px] h-[4px] bg-[#D90000] rotate-45 mt-2 flex-shrink-0"></div>Данни за навигация (IP адрес, бисквитки, тип браузър)</li>
                        </ul>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">3. Как използваме данните</h2>
                        <p>Вашите данни се използват единствено за целите на предоставяне на нашите услуги, връзка с Вас по Ваши запитвания, подобряване на потребителското изживяване и спазване на законови задължения.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">4. Споделяне на данни</h2>
                        <p>Ние не продаваме и не споделяме Вашите лични данни с трети страни, освен когато е необходимо за изпълнение на договорни ангажименти или по закон.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">5. Вашите права</h2>
                        <p>Имате право на достъп, коригиране, изтриване или ограничаване на обработката на Вашите данни. За упражняване на тези права, моля свържете се с нас на privacy@demos.bg.</p>
                    </section>

                    <section className="legal-reveal opacity-0">
                        <h2 className="text-lg font-medium text-black mb-4">6. Контакт</h2>
                        <p>За въпроси относно тази политика, може да се свържете с нас на: <a href="mailto:privacy@demos.bg" className="text-[#D90000] hover:underline">privacy@demos.bg</a></p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
