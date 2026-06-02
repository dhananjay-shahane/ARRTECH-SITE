'use client';

import React from 'react';
import { SECTION_HEADING_STYLES } from '@/constants/theme';
import { motion } from 'framer-motion';


export const AboutSection = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Image with Decorative Shapes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full flex justify-center"
          >
            {/* Decorative Background Lines */}
            <div className="absolute -top-12 -right-8 w-64 h-8 bg-[#F97316] rounded-full rotate-45 z-0" />
            <div className="absolute top-4 -right-16 w-32 h-6 bg-[#fbbf24] rounded-full rotate-45 z-0" />
            <div className="absolute -bottom-16 -left-12 w-80 h-10 bg-[#fbbf24] rounded-full rotate-45 z-0" />

            {/* Image Container */}
            <div className="relative z-10 w-full max-w-[480px] aspect-[4/5] rounded-[2rem] p-2 border-2 border-[#F97316] bg-white shadow-2xl">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Arrtech Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="text-[#F97316] font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="tracking-widest">{'//'}</span> About Company
            </div>

            <h2 className={SECTION_HEADING_STYLES.primary}>
              We are <span className="text-ids-orange">ARRTECH</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 text-base md:text-lg">
              We provide the most economical and consumer-friendly solutions for app and web development at a cutthroat cost. We believe in committing with the clients for long-term by providing the best services for app and web design. Our goal is to integrate cutting-edge IT solutions with the greatest internet marketing services and creative web design to help organizations function at a high level. We concentrate on positive outcomes for our clients.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { number: '12+', label: 'Successful Projects' },
                { number: '3', label: 'Enterprise Apps' },
                { number: '15', label: 'Happy Customers' },
                { number: '10', label: 'Team Members' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="relative bg-white border border-slate-100 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group"
                >
                  {/* Decorative faint circles inside stat box */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#F97316]/5 rounded-full" />
                  <div className="absolute top-2 left-8 w-4 h-4 bg-[#F97316]/10 rounded-full" />
                  <div className="absolute bottom-2 right-4 w-8 h-8 bg-[#F97316]/5 rounded-full" />

                  <div className="relative z-10 text-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.number}</h3>
                    <p className="text-slate-600 font-medium text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
