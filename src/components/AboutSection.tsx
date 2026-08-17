import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-4 sm:px-8 md:px-10 py-16 sm:py-20 overflow-hidden">
      {/* 4 DECORATIVE 3D CORNER IMAGES - RESPONSIVE SIZES */}
      {/* Top-left Moon Icon */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none opacity-60 sm:opacity-100">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon Icon"
            className="w-[70px] xs:w-[90px] sm:w-[160px] md:w-[210px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-left 3D Object */}
      <div className="absolute bottom-[4%] left-[2%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none opacity-60 sm:opacity-100">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Object"
            className="w-[60px] xs:w-[80px] sm:w-[140px] md:w-[180px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* Top-right Lego Icon */}
      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none opacity-60 sm:opacity-100">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego Icon"
            className="w-[70px] xs:w-[90px] sm:w-[160px] md:w-[210px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-right 3D Group */}
      <div className="absolute bottom-[4%] right-[2%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none opacity-60 sm:opacity-100">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Group"
            className="w-[75px] xs:w-[95px] sm:w-[170px] md:w-[220px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* CENTERED CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl w-full">
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="mb-8 sm:mb-14 md:mb-16">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,10vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* CHARACTER-BY-CHARACTER ANIMATED TEXT */}
        <div className="mb-12 sm:mb-20 md:mb-24 px-2 sm:px-4">
          <AnimatedText
            text="With more than five years of experience in content management and digital publishing, i focus on AEM, SharePoint, Contentful, and user experience. I truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-[clamp(0.95rem,2vw,1.35rem)] mx-auto"
          />
        </div>

        {/* CONTACT BUTTON */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
