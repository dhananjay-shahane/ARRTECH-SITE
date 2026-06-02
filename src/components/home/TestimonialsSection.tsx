'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

const testimonials = [
  {
    id: 1,
    quote: "Working with ARRTECH APPS AND DATA SOLUTIONS gave us back valuable time, reduced expenses, and simplified everything. Their team understood our challenges from day one and delivered solutions that truly work. The level of professionalism is unmatched.",
    name: 'Rajesh Kumar',
    role: 'CTO, State Transport',
    rating: 5.0,
  },
  {
    id: 2,
    quote: "Their expertise gave us the clarity to make smarter decisions and accelerate our digital transformation. The implementation was seamless and the support has been exceptional. We are profoundly organized now.",
    name: 'Priya Sharma',
    role: 'Director, National ID',
    rating: 4.8,
  },
  {
    id: 3,
    quote: "What impressed us most was how quickly their strategies turned into real results across the organization. We saw measurable improvements within the first quarter. Highly recommended for enterprise projects.",
    name: 'Anil Mehta',
    role: 'CEO, Manufacturing Corp',
    rating: 4.5,
  },
  {
    id: 4,
    quote: "Their biometric solutions gave us the security we needed with minimal friction for our employees. The integration was smooth and adoption was remarkably fast. Excellent partner for long-term growth.",
    name: 'Sunita Patel',
    role: 'CHRO, Tech Enterprise',
    rating: 4.9,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const roleParts = testimonial.role.split(',');
  const title = roleParts[0];
  const company = roleParts[1] || testimonial.name;

  // Star rendering logic
  const fullStars = Math.floor(testimonial.rating);
  const hasHalfStar = testimonial.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="group flex-shrink-0 w-[350px] sm:w-[420px] md:w-[480px]">
      <div className="relative h-[280px] sm:h-[260px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        
        {/* Orange L-Shape Decorative Border */}
        <div className="absolute top-0 left-0 w-24 h-full border-t-[4px] border-l-[4px] border-[#F97316] pointer-events-none" />

        {/* Header Row */}
        <div className="flex justify-between items-center mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5 text-[#F97316]">
              {/* Full Stars */}
              {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} size={16} fill="currentColor" strokeWidth={0} />
              ))}
              {/* Half Star */}
              {hasHalfStar && (
                <div className="relative">
                  <Star size={16} className="text-slate-200" fill="currentColor" strokeWidth={0} />
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star size={16} fill="currentColor" strokeWidth={0} />
                  </div>
                </div>
              )}
              {/* Empty Stars */}
              {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} size={16} className="text-slate-200" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-bold text-sm text-slate-800">{testimonial.rating.toFixed(1)}</span>
          </div>
          <div className="text-right text-[11px] md:text-xs">
            <span className="font-bold text-slate-900">{title}</span>
            <span className="text-slate-600 italic">, {company}</span>
          </div>
        </div>

        <hr className="border-slate-100 mb-5 relative z-10" />

        {/* Quote */}
        <div className="flex-1 relative z-10">
          <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed font-medium">
            {testimonial.quote}
          </p>
        </div>

        {/* Verified Badge */}
        <div className="mt-4 flex justify-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50/80 rounded-full border border-slate-100">
            <CheckCircle2 size={14} className="text-green-500" />
            <span className="text-[11px] font-bold text-slate-700 tracking-wide">Verified Review</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const xRef = useRef(0);

  // Auto-scroll using useAnimationFrame for smooth animation
  useAnimationFrame(() => {
    if (!scrollRef.current || isPaused || isDragging) return;
    
    const scrollContainer = scrollRef.current;
    const maxScroll = scrollContainer.scrollWidth / 3; // Since we have 3x testimonials
    
    xRef.current += 0.5; // Speed of scroll
    
    if (xRef.current >= maxScroll) {
      xRef.current = 0;
    }
    
    scrollContainer.scrollLeft = xRef.current;
  });

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    xRef.current = scrollRef.current.scrollLeft;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    xRef.current = scrollRef.current.scrollLeft;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  return (
    <section 
      className="py-16 md:py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className={SECTION_HEADING_STYLES.primary}>
            What Our <span className="text-ids-orange font-semibold">Clients</span> Say
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Read what our partners and clients have to say about their experience working with our dedicated team of professionals.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Auto-Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto pb-10 pt-4 px-4 md:px-8 select-none"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Triple testimonials for seamless loop */}
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};
