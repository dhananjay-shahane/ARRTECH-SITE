'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

const caseStudies = [
  {
    id: 1,
    category: 'WEB DEVELOPMENT',
    industry: 'CLOTHING & CUSTOM RETAIL',
    title: 'Poshakdhara — A Premium Multi-Vendor E-Commerce Web App',
    description: 'Engineered a highly responsive multi-tenant e-commerce web application featuring optimized storefront speeds, real-time inventories, integrated multi-vendor dashboards, and customized secure payment checkouts.',
    image: '/projects/poshakdhara.png',
    link: '/software/poskdhara-e-commerce-webapp',
  },
  {
    id: 2,
    category: 'MOBILE & FINTECH SOLUTIONS',
    industry: 'FINANCIAL MARKETS',
    title: 'Ontime Trading App — High-Performance Real-Time Trading Platform',
    description: 'Constructed a low-latency trading application with interactive charts, sub-millisecond stock and crypto tickers, highly secure wallets, and decentralized transaction engines serving active traders daily.',
    image: '/projects/ontime-app.png',
    link: '/software/ontime-trading-app',
  },
];

const CaseStudyCard = ({
  study,
  index,
  range,
  targetScale,
  progress
}: {
  study: typeof caseStudies[0];
  index: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}) => {
  const cardRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Alternate content/image position: Card 1 (even index) has content left, image right. Card 2 (odd index) has image left, content right.
  const isLeftContent = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className="h-[75vh] flex items-center justify-center sticky top-[15vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 30}px)`,
        }}
        className="relative w-full max-w-6xl mx-auto group"
      >
        <Link href={study.link} className="block w-full">
          <div className="relative min-h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border bg-card flex flex-col lg:flex-row w-full">

            {/* Left Content Column for Card 1 / Right Content Column for Card 2 */}
            <div className={`flex-1 p-8 md:p-12 flex flex-col justify-between ${isLeftContent ? 'order-1' : 'order-2'}`}>
              <div className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold bg-primary/10 text-primary uppercase tracking-wide border border-primary/20">
                    {study.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold bg-secondary text-foreground uppercase tracking-wide border border-border">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground leading-tight group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                <p className="text-foreground-secondary text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
                  {study.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/80 font-bold text-sm md:text-base transition-all group-hover:translate-x-1">
                  Explore Case Study <ArrowUpRight size={16} />
                </span>
              </div>
            </div>

            {/* Right Image Column for Card 1 / Left Image Column for Card 2 */}
            <div className={`flex-1 relative min-h-[200px] lg:min-h-full overflow-hidden ${isLeftContent ? 'order-2' : 'order-1'}`}>
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-contain bg-slate-50/50 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export const ProvenResultsSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-white relative scroll-smooth">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-4 pt-16 md:pt-20">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className={SECTION_HEADING_STYLES.primary}>
            Proven Results Across <span className="text-ids-orange">Industries</span>
          </h2>
          <p className="text-foreground-secondary text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore how we&apos;ve helped organizations transform their digital presence, automate their processes, and achieve measurable business outcomes through our tailored IT solutions.
          </p>
        </motion.div>
      </div>

      {/* Case Study Cards - Sticky Stack */}
      <div ref={containerRef} className="relative px-4 pb-20">
        {caseStudies.map((study, index) => {
          const targetScale = 1 - ((caseStudies.length + 1 - index) * 0.05);
          const rangeStart = index / (caseStudies.length + 1);
          const rangeEnd = 1;

          return (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={index}
              range={[rangeStart, rangeEnd]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}

        {/* Final "View More Projects" Card */}
        {(() => {
          const index = caseStudies.length;

          return (
            <div
              className="h-[75vh] flex items-center justify-center sticky top-[15vh]"
              style={{ zIndex: index + 1 }}
            >
              <motion.div
                style={{
                  scale: 1,
                  top: `calc(${index * 30}px)`,
                }}
                className="relative w-full max-w-6xl mx-auto group"
              >
                <Link href="/projects" className="block">
                  <div className="relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border bg-white flex flex-col lg:flex-row">

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-between order-1">
                      <div className="space-y-6">
                        <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold bg-[#fed356]/20 text-neutral-800 uppercase tracking-wide border border-[#fed356]/40">
                          Explore Complete Portfolio
                        </span>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
                          Looking for a Custom Solution for Your Business?
                        </h3>

                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                          We have engineered over 150+ custom digital platforms, responsive mobile applications, and enterprise-grade cloud infrastructures. Let&apos;s build your next big product.
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8">
                        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-black/90 font-bold text-sm md:text-base transition-all group-hover:translate-x-1 shadow-lg">
                          View All Projects <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>

                    {/* Right Mockup Showcase */}
                    <div className="flex-1 relative min-h-[200px] lg:min-h-full overflow-hidden order-2 flex items-center justify-center p-8 bg-slate-50">
                      <div className="relative w-full h-full max-h-[300px] rounded-2xl border border-slate-200 overflow-hidden shadow-2xl bg-white p-6 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                          <div className="flex gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            <span className="w-3 h-3 rounded-full bg-green-400"></span>
                          </div>
                          <span className="text-xs text-slate-400 font-semibold">arrtech-dashboard-v2.tsx</span>
                        </div>
                        <div className="space-y-3 py-4 flex-1 justify-center flex flex-col">
                          <div className="h-4 w-3/4 rounded bg-slate-100 animate-pulse"></div>
                          <div className="h-4 w-1/2 rounded bg-slate-100 animate-pulse"></div>
                          <div className="h-4 w-5/6 rounded bg-slate-100 animate-pulse"></div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-primary font-bold">100% PRODUCTION READY</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
