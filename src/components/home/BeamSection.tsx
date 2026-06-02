'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

export const BeamSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Center Refs
  const centerRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  // 5 Cards Refs
  const webDevRef = useRef<HTMLDivElement>(null);
  const mobileAppRef = useRef<HTMLDivElement>(null);
  const aiPlaygroundRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="relative bg-[#fafafa] py-24 flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className={SECTION_HEADING_STYLES.primary}>
            A Connected Digital <span className="text-ids-orange">Infrastructure</span>
          </h2>
          <p className="mt-6 text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Our specialized services integrate seamlessly to provide a complete enterprise solution. From web and mobile applications to AI models and cloud systems, everything operates in perfect synchronization.
          </p>
        </motion.div>

        {/* -------------------- FLOWCHART PREVIEW DASHBOARD CONTAINER -------------------- */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-8xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 md:p-12 lg:p-14 relative overflow-visible"
        >

          {/* Animated Beams connecting everything directly to Center Hub */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">

            {/* 1. Left top card (Web Dev) -> Center Logo */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={webDevRef}
              toRef={centerRef}
              pathColor="#a855f7"
              pathType="orthogonal"
              midXOffset={-24}
              endYOffset={-20}
              pathWidth={1.5}
            />

            {/* 2. Left bottom card (Mobile App Dev) -> Center Logo */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={mobileAppRef}
              toRef={centerRef}
              pathColor="#22c55e"
              pathType="orthogonal"
              midXOffset={24}
              endYOffset={20}
              pathWidth={1.5}
            />

            {/* 3. Right top card (Desktop Platforms) -> Center Logo */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={desktopRef}
              toRef={centerRef}
              pathColor="#f97316"
              pathType="orthogonal"
              midXOffset={24}
              endYOffset={-20}
              pathWidth={1.5}
            />

            {/* 4. Right bottom card (Cloud & Cyber) -> Center Logo */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={cloudRef}
              toRef={centerRef}
              pathColor="#06b6d4"
              pathType="orthogonal"
              midXOffset={-24}
              endYOffset={20}
              pathWidth={1.5}
            />

            {/* 5. Purple Shield Badge -> Center Logo */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={shieldRef}
              toRef={centerRef}
              pathColor="#a855f7"
              pathType="orthogonal"
              midXOffset={0}
              endYOffset={0}
              pathWidth={1.5}
            />

            {/* 6. Orange Globe Badge -> Center Logo */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={globeRef}
              toRef={centerRef}
              pathColor="#f97316"
              pathType="orthogonal"
              midXOffset={0}
              endYOffset={0}
              pathWidth={1.5}
            />

            {/* 7. Bottom-Center card (AI Playground) -> Center Logo */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={aiPlaygroundRef}
              toRef={centerRef}
              pathColor="#eab308"
              pathType="orthogonal"
              midXOffset={0}
              endYOffset={0}
              pathWidth={1.5}
            />
          </div>

          {/* Flowchart Layout Grid (5 Cards + Badges) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-16 items-stretch">

            {/* 1. LEFT COLUMN CARDS (2 Cards) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-10">

              {/* Card 1: Web Development */}
              <div
                ref={webDevRef}
                className="rounded-2xl border border-slate-200/70 bg-white p-3 shadow-lg flex flex-col min-h-[165px] max-w-[290px] w-full mx-auto relative hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
              >
                {/* Purple Connection Dot with pulse */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-[#a855f7] rounded-full border border-white shadow-sm">
                  <div className="absolute inset-0 rounded-full bg-[#a855f7] animate-ping opacity-40 pointer-events-none" />
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-black text-slate-700 uppercase tracking-wider">Web Development</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                {/* GIF Container */}
                <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-white flex items-center justify-center p-1">
                  <img
                    src="/gif/real_website_ui_animation.gif"
                    alt="Web Development Demonstration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Card 2: Mobile App Dev */}
              <div
                ref={mobileAppRef}
                className="rounded-2xl border border-slate-200/70 bg-white p-3 shadow-lg flex flex-col min-h-[165px] max-w-[290px] w-full mx-auto relative hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
              >
                {/* Green Connection Dot with pulse */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-[#22c55e] rounded-full border border-white shadow-sm">
                  <div className="absolute inset-0 rounded-full bg-[#22c55e] animate-ping opacity-40 pointer-events-none" />
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-black text-[#15803d] uppercase tracking-wider">Mobile App Dev</span>
                </div>

                {/* GIF Container - Styled like a premium phone screen with white background to match card */}
                <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-white flex items-center justify-center p-1">
                  <img
                    src="/gif/shopping_app_mobile_only.gif"
                    alt="Mobile App Development Demonstration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

            </div>

            {/* 2. CENTER COLUMN: BADGES & MAIN LOGO & AI PLAYGROUND */}
            <div className="lg:col-span-4 flex flex-col justify-between items-center gap-10 min-h-[500px]">

              {/* Center Top Badges Row */}
              <div className="w-full flex justify-between px-8 pt-2">

                {/* Custom Premium SVG Shield Lock Badge */}
                <div
                  ref={shieldRef}
                  className="w-14 h-14 rounded-2xl bg-[#8b5cf6] flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 relative z-20"
                >
                  {/* Purple Connection Dot with pulse */}
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-[#8b5cf6] rounded-full border border-white shadow-sm">
                    <div className="absolute inset-0 rounded-full bg-[#8b5cf6] animate-ping opacity-40 pointer-events-none" />
                  </div>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm0 10.99h-.01c-.51 0-.93-.41-.93-.92s.42-.92.93-.92.93.41.93.92-.42.92-.93.92z" />
                  </svg>
                </div>

                {/* Custom Premium SVG Orange Globe Badge */}
                <div
                  ref={globeRef}
                  className="w-14 h-14 rounded-2xl bg-[#f97316] flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 relative z-20"
                >
                  {/* Orange Connection Dot with pulse */}
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-[#f97316] rounded-full border border-white shadow-sm">
                    <div className="absolute inset-0 rounded-full bg-[#f97316] animate-ping opacity-40 pointer-events-none" />
                  </div>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
              </div>

              {/* Center Logo Node (Removed dots, added square pulses) */}
              <div
                ref={centerRef}
                className="w-24 h-24 rounded-3xl bg-[#0f172a] border-2 border-slate-800 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 relative z-20 pointer-events-auto"
              >
                {/* Square Glowing Pulses Backgrounds */}
                <div className="absolute inset-[-14px] bg-[#0f172a]/10 rounded-[32px] animate-[pulse_2s_ease-in-out_infinite] pointer-events-none" />
                <div className="absolute inset-[-28px] bg-[#0f172a]/5 rounded-[40px] animate-[pulse_2.5s_ease-in-out_infinite_0.5s] pointer-events-none" />

                <div className="flex flex-col items-center justify-center select-none z-10">
                  <img
                    src="/img/thunder.png"
                    alt="ARRTECH Logo"
                    className="w-20 h-20 object-contain drop-shadow-[0_12px_28px_rgba(255,255,255,0.3)] animate-pulse"
                  />
                </div>
              </div>

              {/* Card 3: AI Playground (Bottom Center) */}
              <div
                ref={aiPlaygroundRef}
                className="w-full max-w-[290px] rounded-2xl border border-slate-200/70 bg-white p-3 shadow-lg flex flex-col min-h-[180px] relative hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 mx-auto"
              >
                {/* Yellow Connection Dot with pulse */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#eab308] rounded-full border border-white shadow-sm">
                  <div className="absolute inset-0 rounded-full bg-[#eab308] animate-ping opacity-40 pointer-events-none" />
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-black text-slate-700 uppercase tracking-wider">AI & LLM Models</span>
                </div>

                {/* GIF Container */}
                <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-white flex items-center justify-center p-1">
                  <img
                    src="/gif/ai_llm_animation_very_slow.gif"
                    alt="AI and LLM Models Demonstration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

            </div>

            {/* 3. RIGHT COLUMN CARDS (2 Cards) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-10">

              {/* Card 4: Desktop Platforms */}
              <div
                ref={desktopRef}
                className="rounded-2xl border border-slate-200/70 bg-white p-3 shadow-lg flex flex-col min-h-[165px] max-w-[290px] w-full mx-auto relative hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
              >
                {/* Orange Connection Dot with pulse */}
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-[#f97316] rounded-full border border-white shadow-sm">
                  <div className="absolute inset-0 rounded-full bg-[#f97316] animate-ping opacity-40 pointer-events-none" />
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-black text-slate-700 uppercase tracking-wider">Desktop Platforms</span>
                </div>

                {/* GIF Container */}
                <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-white flex items-center justify-center p-1">
                  <img
                    src="/gif/desktop_application_animation.gif"
                    alt="Desktop Platforms Demonstration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Card 5: Cloud & Cyber Systems */}
              <div
                ref={cloudRef}
                className="rounded-2xl border border-slate-200/70 bg-white p-3 shadow-lg flex flex-col min-h-[165px] max-w-[290px] w-full mx-auto relative hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
              >
                {/* Cyan Connection Dot with pulse */}
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-[#06b6d4] rounded-full border border-white shadow-sm">
                  <div className="absolute inset-0 rounded-full bg-[#06b6d4] animate-ping opacity-40 pointer-events-none" />
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-black text-purple-700 uppercase tracking-wider">Cloud & Cyber Systems</span>
                </div>

                {/* GIF Container */}
                <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-white flex items-center justify-center p-1">
                  <img
                    src="/gif/cloud_cyber_systems_slow.gif"
                    alt="Cloud and Cyber Systems Demonstration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
