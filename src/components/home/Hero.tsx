'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight, Globe, Smartphone, Users, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    titleLine1: "We believe in",
    highlight: "delivering success",
    titleLine3: "with every step we take",
    stats: [
      { label: '12+ Projects' },
      { label: '15 Happy Clients' },
      { label: '10 Team Members' }
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    titleLine1: "Innovating your",
    highlight: "digital future",
    titleLine3: "through cutting-edge tech",
    stats: [
      { label: '3 Enterprise Apps' },
      { label: '99.9% Uptime' },
      { label: '24/7 Support' }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    titleLine1: "Accelerating your",
    highlight: "business growth",
    titleLine3: "with smart AI solutions",
    stats: [
      { label: 'Custom AI Models' },
      { label: '10x Efficiency' },
      { label: 'Client First' }
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-[#060b19] pt-36 md:pt-40 pb-16 md:pb-0 flex flex-col justify-center overflow-visible min-h-[90vh]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F97316]/5 rounded-full blur-[150px] opacity-50 transition-all duration-1000" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-30 transition-all duration-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-12 md:pb-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            
            {/* Left Text Content */}
            <div className="flex-1 w-full text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-white leading-[1.1]">
                {slide.titleLine1} <br className="hidden lg:block" />
                <span className="text-[#F97316]">{slide.highlight}</span> <br className="hidden lg:block" />
                {slide.titleLine3}
              </h1>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-8 md:mt-10">
                {slide.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-sm md:text-base font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    {stat.label}
                  </div>
                ))}
              </div>

              {/* Review Badges */}
              <div className="mt-8 md:mt-10 inline-flex flex-row items-center gap-4 sm:gap-6 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-sm w-full sm:w-auto">
                {/* Clutch */}
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 border-r border-white/10 pr-4 sm:pr-6 w-1/2 sm:w-auto">
                  <span className="text-xl sm:text-3xl font-black text-white tracking-tighter">Clutch</span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5 sm:gap-1 text-[#F97316]">
                      {'★★★★★'.split('').map((star, i) => <span key={i} className="text-[10px] sm:text-sm">{star}</span>)}
                    </div>
                    <span className="text-white/60 text-[9px] sm:text-xs mt-0.5 whitespace-nowrap">5.0 (15 Reviews)</span>
                  </div>
                </div>

                {/* Upwork */}
                <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 w-1/2 sm:w-auto pl-2 sm:pl-0">
                  <span className="text-xl sm:text-3xl font-bold text-[#14a800] tracking-tight">upwork</span>
                  <div className="flex flex-col">
                    <span className="text-white text-[10px] sm:text-sm font-semibold whitespace-nowrap">98% Job Success</span>
                    <span className="text-[#F97316] text-[8px] sm:text-xs flex items-center gap-1 whitespace-nowrap mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[10px] sm:h-[10px]">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      Top Rated Plus
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 text-center"
                >
                  Tell us about your project
                  <ArrowUpRight size={18} />
                </Link>
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all hover:-translate-y-1 text-center"
                >
                  See use cases
                </Link>
              </div>

            </div>

            {/* Right Image Content */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0 mb-8 md:mb-0">
              {/* Custom Decorative Border/Shape behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[110%] md:h-[110%] max-w-[480px] border-2 border-white/20 rounded-[30px] md:rounded-[40px] rotate-6 md:rotate-12 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[110%] md:h-[110%] max-w-[480px] border-2 border-[#F97316]/60 rounded-[30px] md:rounded-[40px] -rotate-3 md:-rotate-6 pointer-events-none" />
              
              {/* Sparkle Icon */}
              <div className="absolute -top-4 left-0 md:-top-10 md:left-10 text-[#F97316] animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>

              <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[3/4] z-10 mx-auto">
                <img 
                  src={slide.image} 
                  alt={slide.highlight} 
                  className="w-full h-full object-cover rounded-[30px] shadow-2xl"
                />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-40 text-white/50 hover:text-white transition-colors hidden md:block hover:scale-110 transform"
      >
        <ChevronLeft size={56} strokeWidth={1} />
      </button>

      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-40 text-white/50 hover:text-white transition-colors hidden md:block hover:scale-110 transform"
      >
        <ChevronRight size={56} strokeWidth={1} />
      </button>

      {/* Floating Bottom Pills Navigation */}
      <div className="relative md:absolute mt-8 md:mt-0 md:-bottom-10 left-0 w-full px-4 z-30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { title: 'Website Development', icon: Globe },
              { title: 'Mobile App Development', icon: Smartphone },
              { title: 'Hire Dedicated Resources', icon: Users },
              { title: 'Open Source & Ecommerce', icon: ShoppingCart },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="bg-white rounded-2xl md:rounded-full p-3 md:p-2 md:pr-6 flex flex-col md:flex-row items-center gap-2 md:gap-3 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all cursor-pointer border border-slate-100 text-center md:text-left"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F97316] flex items-center justify-center shrink-0 mb-1 md:mb-0">
                  <item.icon size={20} className="text-white" />
                </div>
                <span className="text-slate-800 font-bold text-[11px] md:text-sm leading-tight">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};


