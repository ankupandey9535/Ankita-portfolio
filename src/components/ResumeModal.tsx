import React from 'react';
import { X, Printer, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#141414] border border-[#D7E2EA]/20 rounded-[32px] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#222222] hover:bg-[#333333] text-[#D7E2EA] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* MODAL HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#D7E2EA]/15 gap-4">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#D7E2EA]">
              Ankita Pandey
            </h2>
            <p className="text-sm uppercase tracking-widest text-purple-400 font-medium mt-1">
              Content Management Specialist &bull; 5+ Years Experience
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/10 text-sm font-medium uppercase tracking-wider transition-colors w-fit"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* RESUME BODY CONTENT */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed font-light">
          {/* CONTACT HEADER */}
          <div className="p-4 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 text-xs sm:text-sm flex flex-wrap gap-4 justify-between text-[#D7E2EA]/80">
            <span><strong>Email:</strong> ankupandey9535@gmail.com</span>
            <span><strong>Phone:</strong> +91 8910953576</span>
            <span><strong>LinkedIn:</strong> linkedin.com/in/ankita-pandey-48a8121b0</span>
          </div>

          {/* SUMMARY */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#D7E2EA] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Professional Summary
            </h3>
            <p className="text-[#D7E2EA]/80 bg-[#1A1A1A] p-5 rounded-2xl border border-[#D7E2EA]/10">
              Content Management Specialist with 5+ years of experience managing enterprise web content, digital publishing, website maintenance, content governance, and content migration across global organizations. Experienced in Adobe Experience Manager (AEM), SharePoint, Contentful, HTML, metadata management, taxonomy, content tagging, web publishing, quality assurance, and SEO optimization.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#D7E2EA] mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-400" />
              Work Experience
            </h3>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D7E2EA]/10">
                <div className="flex justify-between flex-wrap gap-2 mb-2">
                  <h4 className="font-bold text-[#D7E2EA]">Content Analyst — Deloitte Client Engagement (CloudXtreme)</h4>
                  <span className="text-xs text-purple-400 font-medium">Jan 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#D7E2EA]/75">
                  <li>Manage enterprise web content across Deloitte digital platforms using internal CMS tools.</li>
                  <li>Execute large-scale migration of legacy SharePoint content into MySupport and Contentful while maintaining governance standards.</li>
                  <li>Apply metadata standards, taxonomy, content tagging, and compliance guidelines.</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D7E2EA]/10">
                <div className="flex justify-between flex-wrap gap-2 mb-2">
                  <h4 className="font-bold text-[#D7E2EA]">Content Analyst — London Stock Exchange Group (LSEG)</h4>
                  <span className="text-xs text-purple-400 font-medium">Oct 2024 – Aug 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#D7E2EA]/75">
                  <li>Managed enterprise website content using Adobe Experience Manager (AEM) and SharePoint.</li>
                  <li>Improved publishing turnaround by 12% through workflow optimization. Winner of Star Award (Q1 2025).</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D7E2EA]/10">
                <div className="flex justify-between flex-wrap gap-2 mb-2">
                  <h4 className="font-bold text-[#D7E2EA]">Content Development Specialist — Bristlecone India Pvt Ltd</h4>
                  <span className="text-xs text-purple-400 font-medium">Aug 2021 – Jul 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#D7E2EA]/75">
                  <li>Reduced publishing errors by 18% through strengthened governance processes. Winner of Spot Award (2023).</li>
                  <li>Improved content readiness by 20% by streamlining approval documentation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* HONORS & CERTIFICATIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D7E2EA]/10">
              <h3 className="text-base font-bold uppercase tracking-wider text-[#D7E2EA] mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Honors &amp; Awards
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#D7E2EA]/80">
                <li>🏆 <strong>Star Award (Q1 2025)</strong> — LSEG</li>
                <li>🏆 <strong>Spot Award (2023)</strong> — Bristlecone India</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#D7E2EA]/10">
              <h3 className="text-base font-bold uppercase tracking-wider text-[#D7E2EA] mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                Education &amp; Credentials
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/80">
                🎓 <strong>B.A. in English &amp; Journalism</strong> — New Alipore College, Kolkata (2017 – 2020)<br />
                📜 Certifications: Coursera (Project Management), LinkedIn (Power BI), Simplilearn (Business Analysis), Udemy (HTML)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
