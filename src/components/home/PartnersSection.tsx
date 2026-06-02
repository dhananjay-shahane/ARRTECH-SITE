'use client';

import { useRef } from 'react';
import { Cloud, Cpu, Globe, Server, Code, Smartphone, Brain, Database, Terminal, Shield, HelpCircle, Layers } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

const partners = [
  { name: "Amazon Web Services", icon: Cloud, category: "Cloud & Infrastructure" },
  { name: "Microsoft Azure", icon: Server, category: "Cloud & Infrastructure" },
  { name: "Google Cloud", icon: Globe, category: "Cloud Platform" },
  { name: "React & Next.js", icon: Code, category: "Web Technologies" },
  { name: "Flutter & Dart", icon: Smartphone, category: "Mobile Frameworks" },
  { name: "OpenAI & LLMs", icon: Brain, category: "AI/ML Solutions" },
  { name: "DevOps & Docker", icon: Terminal, category: "DevOps & Automation" },
  { name: "Enterprise Databases", icon: Database, category: "Data Storage & ERP" },
  { name: "Next-Gen Security", icon: Shield, category: "Cybersecurity" },
  { name: "SaaS Systems", icon: Layers, category: "Product Development" },
  { name: "AI Integration", icon: Cpu, category: "Cognitive Systems" },
  { name: "IT Advisory", icon: HelpCircle, category: "Enterprise Consulting" },
];

export const PartnersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-[#fafafa] relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 mb-12 text-center relative z-10"
      >
        <h3 className={SECTION_HEADING_STYLES.primary}>Powered by Industry <span className="text-ids-orange">Leaders</span></h3>
      </motion.div>

      {/* Scrolling Marquee with Parallax */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.div style={{ x }} className="flex w-max animate-scroll">
          {[...partners, ...partners].map((partner, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-3 mx-8 min-w-[160px] cursor-pointer transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all shadow-lg">
                <partner.icon size={32} />
              </div>
              <div className="text-center">
                <span className="font-bold text-lg text-foreground-secondary hover:text-foreground transition-colors block">{partner.name}</span>
                <span className="text-xs text-foreground-muted uppercase tracking-wide hover:text-primary transition-colors">{partner.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
