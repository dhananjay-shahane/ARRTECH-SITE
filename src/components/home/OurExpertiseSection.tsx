'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Gamepad2, 
  TrendingUp, 
  Landmark, 
  Coins, 
  FileSpreadsheet, 
  ShoppingCart, 
  ChevronRight
} from 'lucide-react';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

const industries = [
  {
    id: 'fintech',
    label: 'Fintech',
    title: 'Fintech Solutions',
    description: 'Empower digital wallets, lending systems, and payment portals with bulletproof security, compliant KYC pipelines, and high-performance financial microservices.',
    points: [
      'Instant Digital Onboarding',
      'Compliant Bank Grade KYC Integrations',
      'Fraud Detection Protocols',
      '24/7 Threat Protection'
    ],
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'gaming',
    label: 'Gaming',
    title: 'Gaming & Platforms',
    description: 'Build real-time multiplayer backend architectures, in-app microtransactions, secure player enrollment platforms, and game analytical dashboards.',
    points: [
      'Low-Latency Backend Engines',
      'Multiplayer Sync Services',
      'Secure In-App Trophies & Store',
      'Behavioral Player Analytics'
    ],
    icon: Gamepad2,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'trading',
    label: 'Trading Systems',
    title: 'Trading & Markets',
    description: 'Launch low-latency stock trading portals, cryptocurrency exchange dashboards, high-volume real-time tickers, and robust transaction engines.',
    points: [
      'Live Stock / Crypto Feeds',
      'Sub-millisecond Transaction Speeds',
      'Secure Wallet Encryptions',
      'Advanced Analytical Charts'
    ],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'banks',
    label: 'Banks',
    title: 'Digital Banking',
    description: 'Secure traditional banking sectors with state-of-the-art multi-factor biometric systems, cloud databases, and certified e-governance API portals.',
    points: [
      'Multi-Factor Biometric Security',
      'Cloud-Native Encrypted DBs',
      'Federal API Integrations',
      'Strict Compliance Auditing'
    ],
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'crypto',
    label: 'Crypto',
    title: 'Crypto & Blockchain',
    description: 'Develop decentralized finance protocols, secure cold-storage wallet dashboards, and automated smart-contract pipelines with ultimate cryptography.',
    points: [
      'Decentralized App (DApp) Auditing',
      'Cold-Storage Wallet Solutions',
      'Automated Smart Contracts',
      'Cross-Chain Transfer Pipelines'
    ],
    icon: Coins,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'nbfc',
    label: 'NBFC',
    title: 'NBFC Services',
    description: 'Accelerate NBFC loan approvals, dynamic credit risk checks, asset management platforms, and distributed regional accounting systems.',
    points: [
      'Instant Automated Verification',
      'Credit Scoring Metrics',
      'Decentralized Ledgers',
      'High-Scale Loan Processing'
    ],
    icon: FileSpreadsheet,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    title: 'E-commerce',
    description: 'Boost trust in your e-commerce platform with premium checkout flows, secure transaction gateways, high-speed product catalogs, and optimized PWA storefronts.',
    points: [
      'Surepass Secure Verification',
      'Instant Cart & Checkout Engines',
      'Rich Multi-Vendor Dashboards',
      'Tailored Product Recommendations'
    ],
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
  }
];

export const OurExpertiseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section from your screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className={SECTION_HEADING_STYLES.title}>
            Tailored For Every <span className="text-ids-orange">Industry</span>.
          </h2>
          <p className="text-foreground-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            From start to end, we&apos;ve got your back—streamlined, secure, and never a lack.
          </p>
        </div>

        {/* Interactive Vertical Accordion Flex Row */}
        <div className="flex flex-col md:flex-row h-[850px] md:h-[550px] w-full gap-3 md:gap-4 overflow-hidden py-4">
          {industries.map((industry) => {
            const isActive = activeTab === industry.id;
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                layout
                onClick={() => setActiveTab(industry.id)}
                onMouseEnter={() => setActiveTab(industry.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-border/10
                  ${isActive 
                    ? 'flex-[5] h-[350px] md:h-full min-w-full md:min-w-[320px]' 
                    : 'flex-[1.2] h-[65px] md:h-full min-w-full md:min-w-[90px] md:max-w-[110px]'
                  }`}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Background Image Showcase */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">                  <img
                    src={industry.image}
                    alt={industry.label}
                    className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${isActive ? 'brightness-[0.85]' : 'brightness-[1.25]'}`}
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-black/75 transition-opacity duration-500" />
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {isActive ? (
                    /* Expanded Content State */
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute inset-0 z-10 p-6 md:p-10 flex flex-col justify-between text-white"
                    >
                      {/* Top Icon Badge & Expanded Title */}
                      <div>
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner mb-6">
                          <Icon size={28} className="text-white animate-pulse" />
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-3">
                          {industry.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
                          {industry.description}
                        </p>
                      </div>

                      {/* Read More trigger */}
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-black text-[#fed356] hover:text-[#fed356]/90 transition-colors uppercase tracking-wider">
                          Read More <ChevronRight size={16} />
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    /* Collapsed Card Side-Label Text State */
                    <div className="absolute inset-0 z-10 flex flex-row md:flex-col items-center justify-between md:justify-center p-4 md:p-6 text-white select-none">
                      <div className="w-9 h-9 rounded-full bg-black/45 backdrop-blur-md flex items-center justify-center border border-white/15 shadow-md">
                        <Icon size={16} className="text-white" />
                      </div>
                      <h3 className="text-xs md:text-sm font-black tracking-widest uppercase md:rotate-90 origin-center whitespace-nowrap text-white bg-black/45 px-3 py-1.5 rounded-full backdrop-blur-[2px] border border-white/15 shadow-xl md:mt-24">
                        {industry.label}
                      </h3>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
