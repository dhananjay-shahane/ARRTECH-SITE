'use client';

import { FadeIn } from '@/components/ui';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { PROJECTS } from '@/constants/projects';
import { SERVICES } from '@/constants/services';

export default function SoftwareServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  
  // Find project data or service data from constants
  const projectData = PROJECTS.find(p => p.slug === slug);
  const serviceData = SERVICES.find(s => s.slug === slug);
  const caseStudy = projectData?.caseStudy;

  // Convert slug to a readable title as fallback
  const title = projectData?.title || (slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Software & Services');

  // ==========================================
  // SERVICE UI LAYOUT
  // ==========================================
  if (serviceData) {
    return (
      <div className="min-h-screen bg-white text-foreground overflow-hidden">
        {/* Service Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={serviceData.heroImage} 
              alt={serviceData.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <FadeIn>
              <div className="inline-block bg-ids-orange text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                {serviceData.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-wide">
                {serviceData.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {serviceData.shortDesc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Service Content Layout */}
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Left Column: Overview & Process */}
              <div className="lg:w-2/3">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Service <span className="text-ids-orange">Overview</span></h2>
                  <div className="prose prose-lg prose-slate max-w-none mb-16">
                    {serviceData.overview.map((paragraph, idx) => (
                      <p key={idx} className={idx === 0 ? "text-xl text-slate-600 leading-relaxed font-light mb-6" : "mb-6"}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Our <span className="text-ids-orange">Process</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceData.process.map((step, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-ids-orange transition-colors">
                        <div className="absolute -right-4 -top-4 text-8xl font-black text-slate-50 group-hover:text-ids-orange/5 transition-colors">
                          {idx + 1}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10">{step.title}</h4>
                        <p className="text-sm text-slate-500 relative z-10">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Right Column: Benefits & Tech Stack */}
              <div className="lg:w-1/3 space-y-10">
                <FadeIn delay={0.1}>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Core Benefits</h3>
                    <ul className="space-y-4">
                      {serviceData.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-ids-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-slate-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="bg-slate-900 p-8 rounded-3xl shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceData.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

              </div>
    );
  }

  // ==========================================
  // PROJECT CASE STUDY UI LAYOUT
  // ==========================================
  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
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
              {title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive solutions for {title} provided by <span className="text-ids-orange font-semibold">ARRTECH</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Split Layout: Images (Left) & Deep Content (Right) */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative SVG Overlay */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-[0.03]">
          <svg className="absolute -top-24 -right-24 w-96 h-96 text-slate-900" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg className="absolute top-1/2 -left-32 w-[500px] h-[500px] text-ids-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <path d="M0 100 L100 0 M0 0 L100 100" />
          </svg>
          <svg className="absolute -bottom-24 right-20 w-80 h-80 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              
              {/* Left Side: Project Images (Sticky) */}
              <div className="w-full lg:w-5/12 order-1 lg:order-1 relative h-full">
                <div className="sticky top-32 space-y-8">
                  {caseStudy?.images && caseStudy.images.length > 0 ? (
                    caseStudy.images.map((img, idx) => (
                      <div key={idx} className={`rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group relative cursor-pointer ${idx > 0 ? 'hidden md:block shadow-xl' : ''}`} onClick={() => setLightboxImg(img)}>
                        <img 
                          src={img} 
                          alt={`${title} Showcase ${idx + 1}`} 
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-full h-full">
                          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 text-ids-orange font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                            View Image
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-full h-64 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400">
                      No Images Available
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: Deep Content */}
              <div className="w-full lg:w-7/12 order-2 lg:order-2">
                <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-ids-orange hover:prose-a:text-ids-orange/80">
                  
                  {/* Meta Info Mini-Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-10 border-b border-slate-100 mb-10 not-prose">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Category</p>
                      <p className="text-sm font-semibold text-slate-800">{projectData?.category || 'Software Solution'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Client</p>
                      <p className="text-sm font-semibold text-slate-800">{caseStudy?.client || 'Confidential'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Timeline</p>
                      <p className="text-sm font-semibold text-slate-800">{caseStudy?.timeline || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Live Website</p>
                      {projectData?.websiteUrl ? (
                        <a href={projectData.websiteUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-ids-orange hover:underline">View Live Site ↗</a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-500">Internal</span>
                      )}
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Project <span className="text-ids-orange">Overview</span></h2>
                  
                  {caseStudy?.overviewParagraphs ? (
                    caseStudy.overviewParagraphs.map((paragraph, idx) => (
                      <p key={idx} className={idx === 0 ? "text-xl text-slate-600 leading-relaxed font-light mb-8" : ""}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                      We provide cutting-edge architecture and design for {title}. Our expert team leverages industry best practices to deliver secure, scalable, and beautifully designed systems that meet your enterprise needs.
                    </p>
                  )}

                  {caseStudy?.features && (
                    <>
                      <h3 className="text-2xl font-bold mt-12 mb-6">Key <span className="text-ids-orange">Features Provided</span></h3>
                      <div className="not-prose flex flex-col gap-4 mb-12">
                        {caseStudy.features.map((feature, i) => (
                          <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-5">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-ids-orange/10 flex items-center justify-center">
                              <svg className="w-6 h-6 text-ids-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {caseStudy?.techStack && (
                    <>
                      <h3 className="text-2xl font-bold mt-12 mb-6">Technology <span className="text-ids-orange">Stack</span></h3>
                      <p>
                        To achieve maximum performance, security, and scalability, we utilized a state-of-the-art modern technology stack tailored for enterprise-grade applications.
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mt-8 not-prose">
                        {caseStudy.techStack.map((tech, i) => (
                          <span key={i} className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full shadow-md hover:bg-ids-orange transition-colors cursor-default border border-slate-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      
      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md transition-all duration-300" onClick={() => setLightboxImg(null)}>
          <button 
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-ids-orange transition-colors rounded-full hover:bg-white/10"
            onClick={() => setLightboxImg(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img 
            src={lightboxImg} 
            alt="Full size project showcase" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
          />
        </div>
      )}
    </div>
  );
}
