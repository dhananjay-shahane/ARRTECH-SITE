'use client';

import { useState, useRef } from 'react';
import { FadeIn } from '@/components/ui';
import { Mail, Phone, Send, ChevronDown, MessageCircle, MapPin, Clock, Star, Navigation } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <button 
        className="w-full flex justify-between items-center text-left hover:text-primary transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-base md:text-lg text-slate-800 tracking-tight pr-4">{question}</span>
        <ChevronDown className={`transition-transform duration-300 text-slate-400 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} size={20} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4 border-t border-slate-100 pt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Custom High-Fidelity 3D Question Mark Graphic matching the screenshot
const QuestionMarkGraphic = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform hover:scale-105 transition-transform duration-300 select-none">
    <defs>
      {/* 3D Metallic Blue Gradient */}
      <linearGradient id="blue3D" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="40%" stopColor="#2563eb" />
        <stop offset="80%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      {/* Shadow for question mark */}
      <filter id="shadow3D" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="8" stdDeviation="5" floodColor="#1e3a8a" floodOpacity="0.25" />
      </filter>
      {/* Radial shading for floating white spheres */}
      <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="55%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </radialGradient>
      {/* Soft shadow for spheres */}
      <filter id="sphereShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Floating white sphere (Left) */}
    <circle cx="26" cy="64" r="8" fill="url(#sphereGrad)" filter="url(#sphereShadow)" />
    
    {/* Floating white sphere (Right) */}
    <circle cx="94" cy="76" r="10" fill="url(#sphereGrad)" filter="url(#sphereShadow)" />

    {/* Floating white sphere (Top-Left) */}
    <circle cx="34" cy="30" r="5" fill="url(#sphereGrad)" filter="url(#sphereShadow)" />

    {/* Shiny Blue 3D Question Mark path */}
    <path
      d="M58 84C58 80.6863 60.6863 78 64 78C67.3137 78 70 80.6863 70 84C70 87.3137 67.3137 90 64 90C60.6863 90 58 87.3137 58 84ZM52.9299 37.0701C55.7001 32.88 60.05 30 65 30C73.2843 30 80 36.7157 80 45C80 50.84 76.66 55.9 71.8 58.4C67.4 60.66 65 64.92 65 69.86V72H57V69.86C57 62.2 60.9 55.76 67.36 52.42C70.24 50.94 72 48.16 72 45C72 41.134 68.866 38 65 38C62.66 38 60.58 39.14 59.28 40.94L52.9299 37.0701Z"
      fill="url(#blue3D)"
      filter="url(#shadow3D)"
    />
  </svg>
);

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      
      {/* 1. Sleek Hero Header */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
            alt="Company Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-wide">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Have questions about platforms or custom projects? Reach out to <span className="font-semibold text-white">ARRTECH</span> and build the future together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Map Section - Simplified to HQ Only (Sector 30A Vashi HQ kept) */}
      <section className="relative py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <div className="w-2 h-2 rounded-full bg-ids-orange animate-pulse" />
                <span className="text-slate-700 font-bold text-xs tracking-widest uppercase">Our Headquarters</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
                Visit Our Corporate<br/>
                <span className="italic text-ids-orange">Headquarters</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Solid HQ Info Card */}
            <FadeIn>
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      CORPORATE HQ
                    </span>
                    <span className="text-xs font-black uppercase text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      ● Open Now
                    </span>
                  </div>
                  <h3 className="font-extrabold text-2xl text-slate-900 mb-6">ARRTECH</h3>
                  
                  <div className="space-y-4 text-slate-600 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-ids-orange mt-1 shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed">
                        Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-ids-orange shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed">+91 93722 09322</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-ids-orange shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed">9:00 AM - 6:00 PM (Mon - Sat)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 border-t border-slate-100 pt-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-[#fed356] fill-[#fed356]" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-slate-700">4.9 / 5.0 (142 reviews)</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Sector%2030A%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-ids-orange hover:bg-ids-orange/90 active:scale-[0.98] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                    >
                      <Navigation size={16} /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right - Live Google Map */}
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-200 h-[450px] lg:h-full min-h-[450px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.792518386478!2d72.99621131490234!3d19.064400087094033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14e13d56d11%3A0xe54ef92bb609b52a!2sVashi%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section ref={formRef} className="relative py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column Info */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/60 border border-slate-300/50 mb-6">
                <div className="w-2 h-2 rounded-full bg-ids-orange" />
                <span className="text-slate-700 font-semibold text-xs tracking-widest uppercase">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900">
                Let&apos;s Build the <br/>
                <span className="italic text-ids-orange">Future Together</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-xl mb-12 leading-relaxed">
                Whether you have a question about our enterprise software suites, cloud migration audits, custom pricing quotes, or anything else, our team is ready to respond.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl hover:border-ids-orange/50 transition-colors group shadow-sm">
                  <Mail className="text-ids-orange mb-4" size={24} />
                  <h3 className="font-bold text-lg mb-1 text-slate-800">Sales Inquiry</h3>
                  <p className="text-sm text-slate-500 mb-2">For custom platforms & quotes</p>
                  <a href="mailto:sales@arrtech.com" className="text-ids-orange text-sm font-bold hover:underline">sales@arrtech.com</a>
                </div>
                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl hover:border-ids-orange/50 transition-colors group shadow-sm">
                  <MessageCircle className="text-ids-orange mb-4" size={24} />
                  <h3 className="font-bold text-lg mb-1 text-slate-800">Technical Support</h3>
                  <p className="text-sm text-slate-500 mb-2">For client platforms & SLAs</p>
                  <a href="mailto:support@arrtech.com" className="text-ids-orange text-sm font-bold hover:underline">support@arrtech.com</a>
                </div>
              </div>
            </FadeIn>
            
            {/* Right Column Interactive Card */}
            <FadeIn direction="left">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-ids-orange/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10 text-slate-800">Send us a Message</h3>
                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">First Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-ids-orange focus:ring-1 focus:ring-ids-orange transition-all" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Last Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-ids-orange focus:ring-1 focus:ring-ids-orange transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-ids-orange focus:ring-1 focus:ring-ids-orange transition-all" placeholder="jane@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-ids-orange focus:ring-1 focus:ring-ids-orange transition-all" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-ids-orange focus:ring-1 focus:ring-ids-orange transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-gradient-to-r from-primary via-highlight to-ids-orange hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-md">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section (Identical Double-Column UI to Screenshot) */}
      <section className="py-24 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Heading & Card (Identical to Screenshot Left Card) */}
            <div className="lg:col-span-1 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
                Frequently<br/>asked<br/>questions?
              </h2>
              
              {/* support CTA Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center w-full max-w-[340px] mx-auto lg:mx-0">
                {/* 3D Blue Question Mark Visual */}
                <div className="mb-6 flex justify-center w-full">
                  <QuestionMarkGraphic />
                </div>
                
                <p className="text-slate-800 font-bold text-sm leading-relaxed mb-6 px-2">
                  Still have any question? Please contact our sales team
                </p>
                
                {/* Royal Black Button */}
                <button 
                  onClick={scrollToForm}
                  className="w-full bg-black hover:bg-slate-900 active:scale-[0.98] text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-sm text-sm"
                >
                  Contact our sales team
                </button>
              </div>
            </div>

            {/* Right Column - Accordion List (Identical to Screenshot Right Side) */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { 
                  question: "What services does ARRTECH offer?", 
                  answer: "ARRTECH offers high-fidelity custom enterprise software development, cross-platform mobile apps (using Flutter), advanced AI & LLM integration, desktop platforms, and secure cloud & cyber infrastructure." 
                },
                { 
                  question: "How can I integrate ARRTECH technologies into my existing platforms?", 
                  answer: "Our systems engineers specialize in seamless integrations. We build custom SDKs, robust REST/GraphQL APIs, and secure middleware to sync new AI, mobile, or cloud solutions with your legacy systems." 
                },
                { 
                  question: "Is ARRTECH compliant with enterprise data protection regulations?", 
                  answer: "Yes, security and compliance are built into our DNA. We strictly adhere to SOC2, GDPR, HIPAA, and ISO 27001 standards, ensuring your enterprise and customer data are fully protected." 
                },
                { 
                  question: "How does ARRTECH ensure the security of my intellectual property?", 
                  answer: "We enforce strict NDAs and deliver full source-code ownership to our clients. All applications are designed with secure-by-default protocols, and we conduct thorough vulnerability assessments prior to deployment." 
                },
                { 
                  question: "Does ARRTECH support international projects and systems?", 
                  answer: "Absolutely. We architect globally distributed cloud platforms and localized mobile app systems that serve enterprise clients across India, North America, Europe, and Asia." 
                },
                { 
                  question: "Does ARRTECH offer support and maintenance packages after launch?", 
                  answer: "Yes, we provide dedicated post-launch support SLA packages, 24/7 technical monitoring, database optimization, and continuous feature updates to keep your systems running at peak performance." 
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <FAQItem question={item.question} answer={item.answer} />
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
          </div>
  );
}
