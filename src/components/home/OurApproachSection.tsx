'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Code, 
  Server,
  CheckCircle2,
  Brain,
  Smartphone
} from 'lucide-react';
import { ShineBorder } from '@/components/ui/shine-border';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

const categories = [
  { id: 'web-dev', label: 'Web Development', icon: Code },
  { id: 'ai-llm', label: 'AI & LLM Solutions', icon: Brain },
  { id: 'software-apps', label: 'Software & Mobile Dev', icon: Smartphone },
  { id: 'cloud-enterprise', label: 'Cloud & Enterprise', icon: Server },
  { id: 'govt-support', label: 'Govt Projects & Support', icon: Shield },
];

const categoryContent: Record<string, {
  heading: string;
  subheading: string;
  description: string;
  features: { title: string; description: string }[];
  image: string;
  path: string;
}> = {
  'web-dev': {
    heading: 'High-Performance Web Development',
    subheading: '& Immersive E-Commerce Platforms',
    description: 'We engineer state-of-the-art web architectures using React, Next.js, and specialized storefront systems to deliver lightning-fast loading speeds, solid SEO, and immersive user experiences.',
    features: [
      { title: 'Custom Web & PWA Development', description: 'Interactive, responsive web experiences with offline capabilities.' },
      { title: 'Next.js & React App Architectures', description: 'Modern frontend setups leveraging Server-Side Rendering (SSR) and static generation.' },
      { title: 'E-Commerce storefronts & platforms', description: 'Secure checkout systems, cart management, and inventory integration.' },
      { title: 'SEO, Analytics & Optimization', description: 'Advanced search indexing, Google Core Web Vitals optimizations, and page tracking.' },
    ],
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop',
    path: '/software-platforms',
  },
  'ai-llm': {
    heading: 'Enterprise AI Engineering,',
    subheading: 'Custom LLM models & RAG Systems',
    description: 'Unlock the future of corporate efficiency with tailored neural networks, generative AI workflows, intelligent document processors, and custom business agent integration.',
    features: [
      { title: 'Generative AI & Custom GPT Integration', description: 'Build conversational interfaces, automated writers, and internal support bots.' },
      { title: 'Custom LLM Fine-Tuning', description: 'Adapt open-source models (Llama, Mistral) to your enterprise domain context.' },
      { title: 'Retrieval-Augmented Generation (RAG)', description: 'Search and question your internal databases and files safely with semantic context.' },
      { title: 'Predictive ML & Decision Dashboards', description: 'Machine learning classifiers and regressors for precise forecasting.' },
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop',
    path: '/software-platforms',
  },
  'software-apps': {
    heading: 'Custom Desktop & Mobile Apps',
    subheading: 'Cross-Platform App Development',
    description: 'We construct beautiful native and cross-platform desktop and mobile software (using Flutter, Swift, React Native) that scale to millions of active users.',
    features: [
      { title: 'Cross-Platform Mobile Dev (Flutter & React Native)', description: 'One single codebase delivering high-performance iOS and Android apps.' },
      { title: 'Custom Desktop Software Development', description: 'Windows and macOS enterprise administrative applications.' },
      { title: 'SaaS Platforms & Multi-Tenant Architectures', description: 'Scalable subscription models with secure user roles and isolation.' },
      { title: 'AMC & System Maintenance Services', description: 'Continuous support, telemetry reporting, and proactive hotfixes.' },
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    path: '/software-platforms',
  },
  'cloud-enterprise': {
    heading: 'Cloud Services Infrastructure',
    subheading: '& Custom Enterprise ERP Systems',
    description: 'Consolidate complex databases, microservices, secure private networks, and unified workflow dashboards tailored for businesses.',
    features: [
      { title: 'Cloud Provisioning & DevOps Systems', description: 'AWS, Azure, and Google Cloud management with fully automated CI/CD.' },
      { title: 'Enterprise Resource Planning (ERP)', description: 'Custom logistics, asset tracking, stock inventories, and task systems.' },
      { title: 'Customer Relationship Management (CRM)', description: 'Client pipelines, automated sales followups, and marketing funnels.' },
      { title: 'Fintech & Healthcare IT Integration', description: 'HIPAA-compliant records, secure transaction logs, and ledger audits.' },
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    path: '/software-platforms',
  },
  'govt-support': {
    heading: 'Government E-Governance,',
    subheading: 'GeM Bidding & Technical Support',
    description: 'Proven technical developers for public sector e-governance initiatives, Smart City architectures, federal verification portals, and bidding.',
    features: [
      { title: 'Govt E-Governance & Smart City Systems', description: 'Driving license platforms, RTO check-points, and citizen record directories.' },
      { title: 'GeM Portal Procurement Bidding', description: 'Rigorous bid planning, documentation, and submissions.' },
      { title: 'Enterprise Software Provisioning', description: 'Authorized federal software provisioning, key delivery, and installations.' },
      { title: 'System Auditing & Support contracts', description: 'Full system health metrics, physical setups, and technical consulting.' },
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    path: '/software-platforms',
  },
};

export const OurApproachSection = () => {
  const [activeCategory, setActiveCategory] = useState('web-dev');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const content = categoryContent[activeCategory];

  return (
    <section 
      className="bg-[#fafafa] relative scroll-smooth overflow-hidden py-16 md:py-24"
      style={{
        backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className={SECTION_HEADING_STYLES.secondary + " max-w-4xl mx-auto"}>
            Custom Software & Enterprise Platforms <span className="text-ids-orange">Solutions</span>
          </h2>
          <p className="text-foreground-secondary text-base md:text-lg max-w-2xl mx-auto mt-4">
            ARRTECH APPS AND DATA SOLUTIONS makes it easy for organizations to build scalable digital ecosystems, automate processes, and accelerate growth with confidence.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium
                  transition-all duration-300 border
                  ${isActive 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                    : 'bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary'
                  }
                `}
              >
                {category.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          >
            {/* Left - Image */}
            <div className="lg:w-[45%] w-full">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                <ShineBorder
                  shineColor="#8A2BFF"
                  borderWidth={2}
                  duration={10}
                />
                <img
                  src={content.image}
                  alt={content.heading}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl md:rounded-3xl"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl md:rounded-3xl" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const IconComponent = categories.find(c => c.id === activeCategory)?.icon || Shield;
                        return <IconComponent className="w-8 h-8 text-accent" />;
                      })()}
                      <div>
                        <p className="text-xs text-muted-foreground">Currently viewing</p>
                        <p className="font-semibold text-foreground">
                          {categories.find(c => c.id === activeCategory)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {content.heading}
                <br />
                <span className="text-foreground-secondary">{content.subheading}</span>
              </h3>
              
              <p className="text-foreground-secondary text-base md:text-lg mt-4 mb-8">
                {content.description}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {content.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm md:text-base">
                          {feature.title}
                        </h4>
                        <p className="text-foreground-secondary text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href={content.path}
                  className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-500 overflow-hidden border-2 border-foreground hover:border-transparent hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                >
                  {/* Default black background */}
                  <span className="absolute inset-0 bg-foreground transition-opacity duration-500 group-hover:opacity-0" />
                  {/* Gradient background on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-highlight to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Text content */}
                  <span className="relative z-10 text-background group-hover:text-white transition-colors duration-500">
                    Explore {categories.find(c => c.id === activeCategory)?.label}
                  </span>
                  <svg className="relative z-10 w-4 h-4 text-background group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
