'use client';

import { FadeIn } from '@/components/ui';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: 'the-future-of-ai-in-enterprise-software',
      title: 'The Future of AI in Enterprise Software',
      excerpt: 'Discover how Artificial Intelligence and Machine Learning are reshaping the landscape of enterprise resource planning and customer relationship management.',
      category: 'Artificial Intelligence',
      date: 'May 15, 2026',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      slug: 'why-nextjs-is-our-go-to-framework-in-2026',
      title: 'Why Next.js is Our Go-To Framework in 2026',
      excerpt: 'An in-depth look at the performance benefits, SEO advantages, and developer experience that makes Next.js the ultimate choice for modern web apps.',
      category: 'Web Development',
      date: 'April 28, 2026',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      slug: 'scaling-cloud-infrastructure-for-high-traffic',
      title: 'Scaling Cloud Infrastructure for High Traffic',
      excerpt: 'Learn the best practices and architectural patterns required to scale your cloud infrastructure securely and efficiently during traffic spikes.',
      category: 'Cloud & DevOps',
      date: 'March 10, 2026',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      slug: 'mastering-ui-ux-design-for-saas-platforms',
      title: 'Mastering UI/UX Design for SaaS Platforms',
      excerpt: 'A comprehensive guide on creating intuitive, frictionless, and highly engaging user interfaces that increase customer retention and reduce churn.',
      category: 'Design & UX',
      date: 'February 22, 2026',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      slug: 'building-secure-fintech-applications',
      title: 'Building Secure Fintech Applications',
      excerpt: 'Security cannot be an afterthought in financial technology. Explore our top security protocols, compliance measures, and architecture designs for fintech.',
      category: 'Security',
      date: 'January 18, 2026',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      slug: 'the-rise-of-cross-platform-mobile-apps',
      title: 'The Rise of Cross-Platform Mobile Apps',
      excerpt: 'Analyzing the cost-benefits of using Flutter and React Native versus native development for startups and enterprise clients.',
      category: 'Mobile Apps',
      date: 'December 05, 2025',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-foreground">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop" 
            alt="Blog Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-wide">
              Our <span className="text-ids-orange">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and the latest tech updates from <span className="text-ids-orange font-semibold">ARRTECH</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Filters Bar */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <span className="text-slate-500 font-medium text-sm whitespace-nowrap">Filter by:</span>
                
                {/* Category Filter */}
                <div className="relative min-w-[140px]">
                  <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ids-orange/20 focus:border-ids-orange cursor-pointer">
                    <option value="all">All Categories</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="web">Web Development</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="design">Design & UX</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Month Filter */}
                <div className="relative min-w-[130px]">
                  <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ids-orange/20 focus:border-ids-orange cursor-pointer">
                    <option value="all">All Months</option>
                    <option value="may">May 2026</option>
                    <option value="apr">April 2026</option>
                    <option value="mar">March 2026</option>
                    <option value="feb">February 2026</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Date/Sort Filter */}
                <div className="relative min-w-[130px]">
                  <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ids-orange/20 focus:border-ids-orange cursor-pointer">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-[300px]">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-2.5 pl-10 pr-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ids-orange/20 focus:border-ids-orange"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <article className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 group h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-ids-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-slate-400 mb-4 font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-ids-orange transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-ids-orange font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Read Full Article
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          
          {/* Pagination (Visual Only) */}
          <div className="mt-20 flex justify-center items-center space-x-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-ids-orange hover:text-ids-orange transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-ids-orange text-white font-bold flex items-center justify-center shadow-md">1</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:border-ids-orange hover:text-ids-orange transition-colors">2</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:border-ids-orange hover:text-ids-orange transition-colors">3</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-ids-orange hover:text-ids-orange transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
          </div>
  );
}
