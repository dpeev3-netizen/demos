import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.preloader-text', {
            yPercent: -100,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: 'power4.inOut'
        })
            .to('#preloader-container', {
                yPercent: -100,
                duration: 1,
                ease: 'power4.inOut',
                onComplete: () => {
                    setIsVisible(false);
                }
            });
    }, []);

    if (!isVisible) return null;

    return (
        <div id="preloader-container" className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex items-center justify-center">
            <div className="overflow-hidden">
                <img src="/DEMOS.png" alt="DEMOS" className="h-16 lg:h-24 w-auto preloader-text" />
            </div>
        </div>
    );
};

export default Preloader;
