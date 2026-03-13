import React, { useEffect } from 'react';
import gsap from 'gsap';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline();
        tl.fromTo('.contact-reveal',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <main className="bg-[#FAFAFA] min-h-screen pt-32 lg:pt-48 pb-24">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                <div className="mb-16 lg:mb-24 contact-reveal opacity-0">
                    <p className="text-[10px] tracking-[0.2em] text-[#D90000] uppercase mb-4 font-medium">Контакт</p>
                    <h1 className="text-4xl lg:text-6xl font-light text-[#0A0A0A] leading-tight">
                        Свържете се с нас
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
                    {/* Contact Info */}
                    <div className="contact-reveal opacity-0">
                        <div className="mb-12">
                            <h3 className="text-xs tracking-widest text-gray-400 border-b border-gray-200 pb-4 mb-6 uppercase">Офис София</h3>
                            <p className="text-2xl font-light text-black leading-relaxed mb-6">
                                бул. "Витоша" 89, ет. 4<br />
                                1000 София, България
                            </p>
                            <a href="tel:+35929876543" className="block text-lg font-light text-black hover:text-[#D90000] transition-colors mb-2">+359 2 987 6543</a>
                            <a href="mailto:info@demos.bg" className="block text-lg font-light text-black hover:text-[#D90000] transition-colors">info@demos.bg</a>
                        </div>

                        <div>
                            <h3 className="text-xs tracking-widest text-gray-400 border-b border-gray-200 pb-4 mb-6 uppercase">Работно Време</h3>
                            <p className="text-lg font-light text-black leading-relaxed">
                                Понеделник - Петък<br />
                                09:30 - 18:30
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 lg:p-12 border border-gray-100 shadow-xl contact-reveal opacity-0 lg:-mt-36 relative z-10">
                        <h2 className="text-2xl font-light mb-8 text-black">Изпратете запитване</h2>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Име</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-base font-light focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Фамилия</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-base font-light focus:outline-none focus:border-black transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Имейл</label>
                                <input type="email" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-base font-light focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Телефон</label>
                                <input type="tel" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-base font-light focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">Съобщение</label>
                                <textarea rows="4" className="w-full bg-transparent border-b border-gray-300 rounded-none py-2 text-base font-light focus:outline-none focus:border-black transition-colors resize-none"></textarea>
                            </div>

                            <button type="button" className="bg-[#050505] text-white text-[10px] tracking-[0.2em] uppercase py-5 px-12 hover:bg-[#D90000] transition-all duration-300 inline-block">
                                Изпрати
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-[400px] bg-gray-200 contact-reveal opacity-0 filter grayscale">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.684175390099!2d23.3175402154668!3d42.69082397916694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa857218ac8f09%3A0xe54d6fc24dd6bdab!2z0LHRg9C7LiDigJ7QktC40YLQvtGI0LDigJwgODksIDEwMDAg0KHQvtGE0LjRjywg0KbQtdC90YLRitGALCDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1680000000000!5m2!1sbg!2sbg"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </main>
    );
};

export default Contact;
