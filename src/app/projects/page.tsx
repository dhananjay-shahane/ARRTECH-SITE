'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/ui';
import Link from 'next/link';
import { PROJECTS, CATEGORIES } from '@/constants/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All Projects' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-foreground overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
            alt="Company Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-wide">
              Our <span className="text-ids-orange">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of successful digital transformations and high-performance applications built by <span className="text-ids-orange font-semibold">ARRTECH</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <FadeIn>
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              
              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start w-full md:w-auto">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm ${
                      activeCategory === category
                        ? 'bg-ids-orange text-white border border-ids-orange'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-ids-orange hover:text-ids-orange'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative w-full md:w-auto min-w-[160px]">
                <select className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-md text-sm font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-ids-orange/20 focus:border-ids-orange cursor-pointer">
                  <option value="latest">Sort By: Latest</option>
                  <option value="oldest">Sort By: Oldest</option>
                  <option value="popular">Sort By: Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              
            </div>
          </FadeIn>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.05}>
                <article className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 group h-full flex flex-col">
                  
                  {/* Project Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Link href={`/software/${project.slug}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain bg-slate-50/50 transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    {/* View Project Icon Overlay (Always visible) */}
                    <Link href={`/software/${project.slug}`} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg text-ids-orange opacity-100 transition-all duration-300 flex items-center justify-center group-hover:scale-110 hover:bg-ids-orange hover:text-white cursor-pointer" title="View Project">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <span className="text-ids-orange text-xs font-bold mb-3 tracking-wide uppercase">
                      {project.category}
                    </span>
                    
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ids-orange transition-colors">
                      <Link href={`/software/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <Link href={`/software/${project.slug}`} className="inline-flex items-center text-ids-orange font-bold text-sm group-hover:translate-x-1 transition-transform">
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* View More Button */}
          <FadeIn delay={0.2}>
            <div className="mt-16 flex justify-center">
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-ids-orange text-ids-orange font-bold rounded-md hover:bg-ids-orange hover:text-white transition-all tracking-wide text-sm"
              >
                VIEW MORE PROJECTS
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

          </div>
  );
}
