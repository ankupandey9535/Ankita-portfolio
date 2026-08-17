import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* NAVBAR - 5 EVENLY SPACED LINKS */}
      <FadeIn delay={0} y={-20} className="w-full z-40">
        <nav className="w-full flex items-center justify-between px-3 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-[1.4rem]">
          <button onClick={() => scrollTo('about')} className="hover:opacity-70 transition-opacity duration-200">
            About
          </button>
          <button onClick={() => scrollTo('services')} className="hover:opacity-70 transition-opacity duration-200">
            Services
          </button>
          <button onClick={() => scrollTo('projects')} className="hover:opacity-70 transition-opacity duration-200">
            Projects
          </button>
          <button onClick={() => { onOpenResume?.(); }} className="hover:opacity-70 transition-opacity duration-200">
            Resume
          </button>
          <button onClick={() => scrollTo('contact')} className="hover:opacity-70 transition-opacity duration-200">
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* HERO HEADING - GUARANTEED 100% VISIBLE ON ALL MOBILE & DESKTOP SCREENS */}
      <div className="w-full mt-2 sm:mt-4 md:-mt-5 z-20 px-2 sm:px-4 text-center">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap inline-block text-[9vw] xs:text-[9.8vw] sm:text-[11.2vw] md:text-[12.2vw] lg:text-[13vw] select-none">
            Hi, i&apos;m ankita
          </h1>
        </FadeIn>
      </div>

      {/* HERO PORTRAIT - 3D FEMALE AVATAR FOR ANKITA */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/ankita_avatar.png"
              alt="Ankita Pandey - 3D Content Specialist"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-none select-none"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              }}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full flex items-end justify-between px-3 sm:px-6 md:px-10 pb-5 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.65rem,1.4vw,1.5rem)] max-w-[130px] xs:max-w-[170px] sm:max-w-[220px] md:max-w-[260px]">
            a content specialist driven by crafting striking and unforgettable web experiences
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
