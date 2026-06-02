'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

export const ProjectsShowcaseSection = () => {
  return (
    <section className="relative bg-[#fafafa] overflow-hidden" style={{
      backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
      backgroundSize: '24px 24px'
    }}>
      {/* Top Banner (Orange/Red Gradient) */}
      <div className="relative bg-gradient-to-r from-[#e63946] via-[#f77f00] to-[#f4a261] pt-16 md:pt-24 pb-48 px-4 overflow-hidden">
        {/* Decorative Circle Lines */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="150" cy="50" r="100" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="150" cy="50" r="140" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="150" cy="50" r="180" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container mx-auto max-w-[1536px] relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 px-4 md:px-8">
            <div className="max-w-4xl">
              <h2 className={SECTION_HEADING_STYLES.light}>
                When <span className="font-bold">Passion</span> Meets <span className="font-bold">Profession</span>, an <span className="font-bold">Amazing Result</span> Generates
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-2xl leading-relaxed">
                Check out our work that would help you to believe in our work, research, and experience. We make sure to get our clients and work for them for fully dedicatedly.
              </p>
            </div>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-[#f77f00] transition-colors text-sm font-medium whitespace-nowrap"
            >
              view all our projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlapping Grid Cards */}
      <div className="container mx-auto max-w-[1536px] px-4 md:px-8 relative z-20 -mt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1: Text Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#1a1c23] p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[400px] group relative overflow-hidden"
          >
            {/* Subtle background icon/pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="white">
                <rect x="20" y="20" width="60" height="60" rx="10" />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-white/70 text-xs md:text-sm font-semibold tracking-wide mb-4">
                <span className="text-white">Construction Project</span> | United States
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                Construction Project Management Software
              </h3>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-4">
                PlanTech, a well-established US based construction company with huge projects
              </p>
            </div>
            <div className="relative z-10 mt-auto">
              <Link 
                href="#"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea680e] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-lg"
              >
                view all our projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: App Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white h-[350px] md:h-[400px] relative overflow-hidden group shadow-lg"
          >
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
              alt="Dashboard Project"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold bg-[#F97316] px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Details</span>
            </div>
          </motion.div>

          {/* Card 3: Mobile Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white h-[350px] md:h-[400px] relative overflow-hidden group shadow-lg"
          >
            <Image 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600"
              alt="Mobile App Project"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold bg-[#F97316] px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Details</span>
            </div>
          </motion.div>

          {/* Card 4: Mobile Mockup 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white h-[350px] md:h-[400px] relative overflow-hidden group shadow-lg"
          >
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
              alt="Finance App Project"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold bg-[#F97316] px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Details</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
