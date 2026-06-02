'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { FadeIn } from '@/components/ui';
import { motion } from 'framer-motion';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

export const CTASection = () => {
  return (
    <section 
      className="py-12 md:py-16 relative z-20 overflow-visible bg-gradient-to-r from-[#e63946] via-[#f77f00] to-[#f4a261]"
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent z-[1]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[280px] md:min-h-[340px]">
            {/* Left - Content */}
              <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-6">
                <h2 className={SECTION_HEADING_STYLES.light}>
                  Secure your <br />
                  Digital Future
                </h2>
                
                <p className="text-base md:text-lg text-white mb-8 max-w-lg font-light">
                  Join our happy clients leveraging ARRTECH APPS AND DATA SOLUTIONS for next-gen software and digital platform solutions across India.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://calendly.com/dhananjayshahane24/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-foreground font-bold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                  >
                    Schedule Meeting <Calendar size={18} />
                  </a>
                  <Link href="/software-platforms" className="bg-transparent border-2 border-white text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-foreground transition-all text-center">
                    Explore Platforms
                  </Link>
                </div>
              </div>

              {/* Right - Thunder Image */}
              <div className="relative flex items-center justify-center lg:block min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-visible mt-8 lg:mt-0">
                <div className="relative lg:absolute right-auto lg:right-0 lg:-right-16 xl:-right-24 top-0 lg:-top-64 xl:-top-80 w-[340px] sm:w-[440px] md:w-[540px] lg:w-[800px] xl:w-[920px] z-30">
                  <motion.img 
                    src="/img/thunder.png" 
                    alt="ARRTECH Thunder" 
                    className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.25)] lg:drop-shadow-[0_40px_80px_rgba(255,255,255,0.35)]"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [-3, 3, -3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
