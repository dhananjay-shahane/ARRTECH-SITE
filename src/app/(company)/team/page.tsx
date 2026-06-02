'use client';

import { FadeIn } from '@/components/ui';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Hero Section */}
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
              Our <span className="text-ids-orange">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Meet the brilliant minds and strategic leaders driving innovation behind <span className="text-[#F97316] font-semibold">ARRTECH</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="relative py-20 md:py-32 bg-[#fffaf8] overflow-hidden">
        {/* The curved graphic in the middle */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-full hidden lg:block z-0 pointer-events-none">
          <svg viewBox="0 0 200 800" preserveAspectRatio="none" className="w-full h-full drop-shadow-lg opacity-90">
            <defs>
              <linearGradient id="swoosh" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
            <path 
              d="M 50,0 C 50,200 180,300 180,400 C 180,500 50,600 50,800 L 10,800 C 10,600 100,500 100,400 C 100,300 10,200 10,0 Z" 
              fill="url(#swoosh)" 
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
            
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 lg:pr-16 z-10">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                  Why join <span className="text-ids-orange">ARRTECH?</span>
                </h2>
                
                <div className="space-y-6 text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  <p>
                    ARRTECH promotes a culture of impacting users' lives with our innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness and equal opportunities.
                  </p>
                  <p>
                    We're passionate about constantly expanding and forever keen to find dynamic talent. Join us to level up not just the company's benchmarks but your own as well.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Image and Red Circle */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10 w-full mt-12 lg:mt-0">
              <FadeIn direction="left" className="relative w-full max-w-[450px] flex justify-center">
                {/* Background Red Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-[#ff5536] rounded-full z-0 shadow-lg"></div>
                
                {/* Portrait Image inside a Pill shape */}
                <img 
                  src="/img/team-page-model.png" 
                  alt="Join ARRTECH Team" 
                  className="relative z-10 w-[260px] md:w-[320px] h-[380px] md:h-[480px] object-cover object-top rounded-t-full rounded-b-full shadow-2xl border-4 border-white"
                />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Core <span className="text-ids-orange">Capabilities</span></h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                We deliver exceptional results across a wide range of technologies, driven by a team of dedicated experts passionate about solving complex enterprise problems.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { domain: 'Enterprise E-Commerce Solutions', projects: '4 Delivered', stack: 'Next.js, Node.js, Stripe' },
                { domain: 'AI & Machine Learning', projects: '2 Delivered', stack: 'Python, TensorFlow, OpenAI' },
                { domain: 'Cross-Platform Mobile Apps', projects: '3 Delivered', stack: 'Flutter, React Native' },
                { domain: 'Custom ERP/CRM Systems', projects: '1 Delivered', stack: 'React, PostgreSQL' },
                { domain: 'UI/UX Product Design', projects: '4 Delivered', stack: 'Figma, Adobe CC, Framer' },
                { domain: 'Cloud & DevOps Infrastructure', projects: '2 Delivered', stack: 'AWS, Docker, Kubernetes' },
                { domain: 'Fintech & Secure Platforms', projects: '3 Delivered', stack: 'Java, Spring Boot, Auth0' },
              ].map((item, i) => (
                <div key={i} className="group relative flex flex-col md:flex-row items-center justify-between p-5 md:p-6 bg-white border border-slate-200 hover:border-slate-300 rounded-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  
                  {/* Left Edge Accent Polygon */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#ffe4d6]" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                  
                  {/* Left Side: Domain */}
                  <div className="w-full md:w-1/3 mb-4 md:mb-0 pl-6 md:pl-8">
                    <h3 className="font-bold text-slate-800 text-base md:text-lg group-hover:text-ids-orange transition-colors">{item.domain}</h3>
                  </div>

                  {/* Middle: Projects & Stack */}
                  <div className="w-full md:w-1/2 flex flex-row items-center justify-start gap-12 md:gap-16 px-6 md:px-0 mb-6 md:mb-0">
                    <div className="min-w-[120px]">
                      <p className="text-xs text-slate-400 mb-1 font-medium">Projects</p>
                      <p className="font-semibold text-slate-800 text-sm">{item.projects}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1 font-medium">Core Stack</p>
                      <p className="font-semibold text-slate-800 text-sm">{item.stack}</p>
                    </div>
                  </div>

                  {/* Right Side: Button */}
                  <div className="w-full md:w-auto text-left md:text-right px-6 md:px-0">
                    <button className="bg-gradient-to-r from-[#ff7a55] to-[#f97316] text-white text-xs font-bold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all w-full md:w-auto tracking-wide flex justify-center items-center gap-2">
                      EXPLORE ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Our Work Process Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Work <span className="text-ids-orange">Process</span></h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                A structured, transparent, and collaborative approach to transforming your ideas into powerful digital solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {[
                {
                  title: 'Requirement Analysis',
                  desc: 'We start by deeply understanding your business needs, target audience, and project goals to create a solid foundation.',
                  bgClass: 'bg-process-blue',
                  borderClass: 'border-process-blue',
                  borderLeftClass: 'border-l-process-blue',
                },
                {
                  title: 'Strategic Planning',
                  desc: 'Our experts design the system architecture, create wireframes, and outline a comprehensive project roadmap.',
                  bgClass: 'bg-process-green',
                  borderClass: 'border-process-green',
                  borderLeftClass: 'border-l-process-green',
                },
                {
                  title: 'Agile Development',
                  desc: 'We build your solution using modern technologies and agile methodologies, ensuring transparency and flexibility.',
                  bgClass: 'bg-process-teal',
                  borderClass: 'border-process-teal',
                  borderLeftClass: 'border-l-process-teal',
                },
                {
                  title: 'Testing & Delivery',
                  desc: 'Rigorous QA testing guarantees a bug-free experience before we deploy the final product to your live environment.',
                  bgClass: 'bg-process-yellow',
                  borderClass: 'border-process-yellow',
                  borderLeftClass: 'border-l-process-yellow',
                }
              ].map((step, i) => (
                <div key={i} className="relative pl-10 pb-12 group">
                  {/* The vertical line with perfectly aligned bump */}
                  <div className="absolute left-0 top-0 bottom-0 w-8">
                    {/* Top line */}
                    <div className={`absolute left-[24px] top-0 h-10 w-[2px] ${step.bgClass}`}></div>
                    {/* Bump */}
                    <div className={`absolute left-[12px] top-10 w-[13px] h-[48px] border-l-[2px] border-y-[2px] rounded-l-full transition-all duration-300 ${step.borderClass}`}></div>
                    {/* Bottom line */}
                    <div className={`absolute left-[24px] top-[88px] bottom-0 w-[2px] ${step.bgClass}`}></div>
                  </div>

                  {/* Banner */}
                  <div className={`relative mt-10 h-[48px] text-white font-bold flex items-center px-4 w-[90%] md:w-[85%] shadow-md rounded-l-sm transition-transform duration-300 group-hover:-translate-y-1 cursor-default ${step.bgClass}`}>
                    <span className="text-sm tracking-wide z-10 relative">{step.title}</span>
                    <div className={`absolute right-[-16px] top-0 w-0 h-0 border-y-[24px] border-y-transparent border-l-[16px] transition-all duration-300 ${step.borderLeftClass}`}></div>
                  </div>

                  {/* Text Description */}
                  <div className="mt-8 pr-4">
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
          </div>
  );
}
