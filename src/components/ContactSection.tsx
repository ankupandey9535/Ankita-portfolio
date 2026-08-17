import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 border-t border-[#D7E2EA]/10 relative z-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
            Contact
          </h2>
          <p className="text-[#D7E2EA]/70 mt-4 uppercase tracking-widest text-sm sm:text-base font-light">
            Open for enterprise content management opportunities &amp; consulting
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* CONTACT INFO */}
          <FadeIn delay={0.2} x={-40} y={0}>
            <div className="flex flex-col gap-6 bg-[#161616] p-8 sm:p-10 rounded-[30px] border border-[#D7E2EA]/15">
              <h3 className="text-2xl font-bold uppercase text-[#D7E2EA] mb-2">Direct Reachout</h3>
              
              <a
                href="mailto:ankupandey9535@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-900/30 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 block">Email</span>
                  <span className="text-sm sm:text-base font-medium text-[#D7E2EA]">ankupandey9535@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+918910953576"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-900/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 block">Phone / WhatsApp</span>
                  <span className="text-sm sm:text-base font-medium text-[#D7E2EA]">+91 8910953576</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ankita-pandey-48a8121b0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-900/30 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 block">LinkedIn Profile</span>
                  <span className="text-sm sm:text-base font-medium text-[#D7E2EA]">ankita-pandey-48a8121b0</span>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* CONTACT FORM */}
          <FadeIn delay={0.3} x={40} y={0}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-[#161616] p-8 sm:p-10 rounded-[30px] border border-[#D7E2EA]/15">
              <h3 className="text-2xl font-bold uppercase text-[#D7E2EA] mb-2">Send a Message</h3>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl flex items-center gap-4 text-emerald-300">
                  <CheckCircle className="w-8 h-8 flex-shrink-0" />
                  <p className="text-sm sm:text-base">Thank you! Your message has been sent successfully. Ankita will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 block mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] outline-none focus:border-[#D7E2EA] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 block mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] outline-none focus:border-[#D7E2EA] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 block mb-2 font-medium">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share role or project details..."
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] outline-none focus:border-[#D7E2EA] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-medium uppercase tracking-widest text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25)',
                    }}
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>

        <div className="mt-20 pt-8 border-t border-[#D7E2EA]/10 text-center text-xs uppercase tracking-widest text-[#D7E2EA]/40">
          &copy; 2026 Ankita Pandey &bull; Content Management Specialist
        </div>
      </div>
    </section>
  );
};
