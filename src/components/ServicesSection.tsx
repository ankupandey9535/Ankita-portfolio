import React from 'react';
import { FadeIn } from './FadeIn';

const servicesData = [
  {
    num: "01",
    name: "Enterprise CMS Management",
    desc: "End-to-end management of enterprise web platforms including Adobe Experience Manager (AEM), SharePoint, Contentful, and MySupport to maintain digital presence.",
  },
  {
    num: "02",
    name: "Content Migration & Tagging",
    desc: "Large-scale migration of legacy SharePoint documentation and digital portals into headless Contentful and MySupport CMS while ensuring 100% data accuracy.",
  },
  {
    num: "03",
    name: "Content Governance & QA",
    desc: "Multi-tier quality assurance checks, taxonomy standardization, metadata tagging, and compliance auditing that reduced publishing errors by 18%.",
  },
  {
    num: "04",
    name: "SEO & Web Optimization",
    desc: "Keyword research, structured metadata formatting, descriptive page taxonomy, and web accessibility checks designed to maximize content discoverability.",
  },
  {
    num: "05",
    name: "Analytics & Process Workflow",
    desc: "Monitoring digital publishing performance using Power BI and Google Analytics to optimize approval workflows, reduce turnaround time by 12%, and meet strict SLAs.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="font-black uppercase text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Services
          </h2>
        </FadeIn>

        {/* SERVICES LIST */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {servicesData.map((item, index) => (
            <FadeIn key={item.num} delay={index * 0.1} y={30}>
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 gap-6 md:gap-12 group hover:bg-[#0C0C0C]/[0.02] transition-colors px-2 rounded-xl">
                {/* NUMBER */}
                <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none flex-shrink-0 select-none group-hover:translate-x-2 transition-transform duration-300">
                  {item.num}
                </div>

                {/* NAME & DESCRIPTION STACKED */}
                <div className="flex flex-col gap-2 flex-grow">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                    {item.name}
                  </h3>
                  <p className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
