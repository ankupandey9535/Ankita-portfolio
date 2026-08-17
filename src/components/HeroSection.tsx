import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import { Menu, X } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* NAVBAR */}
      <FadeIn delay={0} y={-20} className="w-full z-40">
        <nav className="w-full flex items-center justify-between px-5 md:px-10 pt-5 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <span className="font-bold text-base md:text-xl tracking-widest text-white sm:hidden">
            ANKITA
          </span>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center justify-between w-full">
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
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-xl bg-[#1A1A1A] text-white border border-[#D7E2EA]/20 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden fixed inset-x-0 top-[70px] bg-[#141414]/95 backdrop-blur-xl border-b border-[#D7E2EA]/20 p-6 flex flex-col gap-5 z-50 text-center shadow-2xl animate-fadeIn">
            <button onClick={() => scrollTo('about')} className="py-2 text-lg uppercase tracking-wider font-medium text-[#D7E2EA]">
              About
            </button>
            <button onClick={() => scrollTo('services')} className="py-2 text-lg uppercase tracking-wider font-medium text-[#D7E2EA]">
              Services
            </button>
            <button onClick={() => scrollTo('projects')} className="py-2 text-lg uppercase tracking-wider font-medium text-[#D7E2EA]">
              Projects
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume?.();
              }}
              className="py-2 text-lg uppercase tracking-wider font-medium text-purple-400"
            >
              View Resume
            </button>
            <button onClick={() => scrollTo('contact')} className="py-2 text-lg uppercase tracking-wider font-medium text-[#D7E2EA]">
              Contact
            </button>
          </div>
        )}
      </FadeIn>

      {/* HERO HEADING - RESPONSIVE FOR ALL SCREEN SIZES */}
      <div className="w-full overflow-hidden mt-2 sm:mt-4 md:-mt-5 z-20 px-2 sm:px-4">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap w-full text-[9.5vw] sm:text-[11vw] md:text-[12.2vw] lg:text-[13vw] text-center select-none">
            Hi, i&apos;m ankita
          </h1>
        </FadeIn>
      </div>

      {/* HERO PORTRAIT - DYNAMICALLY SCALED FOR MOBILE */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] xs:w-[260px] sm:w-[340px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={120}
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

      {/* BOTTOM BAR - MOBILE STACKED FLEXBOX */}
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-between px-6 md:px-10 pb-6 sm:pb-8 md:pb-10 z-20 gap-4 text-center sm:text-left">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.7rem,1.4vw,1.5rem)] max-w-[240px] sm:max-w-[220px] md:max-w-[260px]">
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
