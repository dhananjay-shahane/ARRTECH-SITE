'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

const blogPosts = [
  {
    id: 1,
    title: '10 Best MVP Development Companies for Startups in 2025',
    category: 'Web Development',
    date: '7/11/2025',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'Top 5 Strategies for Enterprise Digital Transformation',
    category: 'Android Development',
    date: '6/15/2025',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=600',
    featured: false,
  },
  {
    id: 3,
    title: 'How AI and Machine Learning are Reshaping Mobile Apps',
    category: 'Mobile App',
    date: '5/22/2025',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600',
    featured: false,
  }
];

export const BlogSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className={SECTION_HEADING_STYLES.primary}>
            Latest Technology <span className="text-ids-orange font-semibold">News</span> And <span className="text-ids-orange font-semibold">Blog</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Discover All That's Trending In Technology, Business, Enterprises, And Outside
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Featured Post (Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative h-[400px] md:h-[500px] rounded-sm overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Image 
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Category Pill */}
            <div className="absolute top-6 left-6 z-20 bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
              {blogPosts[0].category}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight group-hover:text-[#F97316] transition-colors">
                {blogPosts[0].title}
              </h3>
              <div className="flex items-center text-white/80 text-sm font-medium">
                <span>{blogPosts[0].date}</span>
                <span className="mx-2">|</span>
                <span className="hover:text-white transition-colors">Continue Reading</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Stacked Posts) */}
          <div className="flex flex-col gap-6">
            {blogPosts.slice(1).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="group relative h-[190px] md:h-[238px] rounded-sm overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-20 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {post.category}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 flex flex-col justify-end p-5">
                  <h3 className="text-white text-base md:text-lg font-bold mb-2 leading-snug group-hover:text-[#F97316] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-xs font-medium">
                    <span>{post.date}</span>
                    <span className="mx-2">|</span>
                    <span className="hover:text-white transition-colors">Continue Reading</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
