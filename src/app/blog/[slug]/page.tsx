'use client';

import { use } from 'react';
import { FadeIn } from '@/components/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  // Mock data for the blog post
  // In a real application, you would fetch this based on the params.slug
  const post = {
    title: 'The Future of AI in Enterprise Software',
    category: 'Artificial Intelligence',
    date: 'May 15, 2026',
    readTime: '8 min read',
    author: 'ARRTECH Editorial Team',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop'
  };

  return (
    <div className="min-h-screen bg-slate-50 text-foreground">
      
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
              Read <span className="text-ids-orange">Article</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Deep insights and technical deep dives from the experts at <span className="text-ids-orange font-semibold">ARRTECH</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-20 md:py-24">
        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Cover Image (Sticky) */}
            <div className="w-full lg:w-5/12 order-1 lg:order-1 relative h-full">
              <div className="sticky top-32">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src={post.image} 
                    alt="Article Cover" 
                    className="w-full h-[350px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ids-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Author Info Card below image */}
                <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-ids-orange font-bold text-xl">
                    A
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Written by</p>
                    <p className="text-lg font-bold text-slate-900">{post.author}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Article Content */}
            <div className="w-full lg:w-7/12 order-2 lg:order-2">
              
              {/* Header Info */}
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8 tracking-tight">
                  The Future of AI in Enterprise <span className="text-ids-orange">Software</span>
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm md:text-base font-medium border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-ids-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {post.date}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden md:block"></div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-ids-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Prose Content */}
              <article className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-a:text-ids-orange hover:prose-a:text-ids-orange/80 prose-img:rounded-xl max-w-none">
                
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-10">
                  Artificial Intelligence is no longer just a buzzword; it is a fundamental shift in how enterprises operate. From automating routine tasks to generating complex business insights, AI is reshaping the corporate landscape at an unprecedented pace.
                </p>

                <h2>The Shift from Reactive to Predictive</h2>
                <p>
                  Historically, enterprise software has been reactive. You input data, you generate a report, and you analyze what happened last month. Today, integrated machine learning models flip that paradigm entirely. Instead of asking what happened, modern ERP and CRM systems tell you <strong>what will happen</strong>.
                </p>
                
                {/* Inline Content Banner Image */}
                <div className="my-12">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                    alt="AI Dashboard Visualization"
                    className="w-full h-auto rounded-2xl shadow-lg border border-slate-100"
                  />
                  <p className="text-sm text-center text-slate-400 mt-3 font-medium">Predictive dashboards modeling real-time analytics.</p>
                </div>

                <p>
                  By analyzing vast amounts of historical data, predictive algorithms can forecast inventory shortages before they occur, predict customer churn before the client even considers leaving, and dynamically adjust pricing models based on real-time market fluctuations.
                </p>

                <blockquote className="border-l-4 border-ids-orange bg-white shadow-sm p-6 italic text-slate-700 my-10 rounded-r-lg">
                  "The enterprises that fail to adopt AI-driven architectures over the next five years will find themselves competing against machines that never sleep, never stop learning, and never miss a data point."
                </blockquote>

                <h2>Core Areas of Impact</h2>
                <ul>
                  <li><strong>Customer Support Automation:</strong> LLM-powered chatbots that resolve 80% of Tier 1 support tickets instantly.</li>
                  <li><strong>Hyper-Personalization:</strong> Dynamic UIs that adapt to individual user workflows based on their historical behavior.</li>
                  <li><strong>Cybersecurity:</strong> AI systems that detect anomalous network behavior in milliseconds, preventing breaches before data is compromised.</li>
                </ul>

                <h2>Preparing Your Infrastructure</h2>
                <p>
                  Implementing AI isn't just about buying a new software license. It requires a robust, scalable cloud infrastructure. Data pipelines must be pristine, as machine learning models are only as good as the data they are trained on. Transitioning to scalable microservices and adopting rigorous DevOps practices are critical first steps.
                </p>

              </article>

              {/* Footer / Share Actions */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-slate-900">Share:</span>
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:border-ids-orange hover:text-ids-orange transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:border-ids-orange hover:text-ids-orange transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                  </div>
                  
                  <button onClick={() => router.push('/blog')} className="inline-flex items-center justify-center px-6 py-3 bg-white shadow-sm border border-slate-200 rounded-full font-bold text-slate-600 hover:border-ids-orange hover:text-ids-orange transition-all cursor-pointer z-10 relative">
                    ← Back to Blog
                  </button>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>

          </div>
  );
}
