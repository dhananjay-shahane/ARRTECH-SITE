'use client';

import { FadeIn } from '@/components/ui';
import { CheckCircle2, Heart, Zap, Target, BarChart2, Repeat, Cpu, Shield, Server, Wifi, Lightbulb, ShieldCheck, ArrowRight, Code2, Briefcase, ShoppingCart, Laptop, Users, Smartphone, TrendingUp, MonitorSmartphone, Award, BookOpen, Settings, Trophy, Star } from 'lucide-react';

export default function CompanyPage() {


  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
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
              About <span className="text-[#F97316]">ARRTECH</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              We are a designer & development company specializing in designing clean and easy-to-use websites.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 md:py-32 bg-[#FAFAFA] overflow-hidden">
        {/* Background SVGs Overlay */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="150" r="250" stroke="#F0F0F0" strokeWidth="40" />
          <circle cx="750" cy="-50" r="150" stroke="#F0F0F0" strokeWidth="30" />
          <circle cx="1500" cy="750" r="300" stroke="#F0F0F0" strokeWidth="50" />
          <path d="M-100 800 L1500 -200" stroke="#F0F0F0" strokeWidth="2" opacity="0.6" />
          <path d="M-100 850 L1500 -150" stroke="#F0F0F0" strokeWidth="2" opacity="0.6" />
        </svg>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* Left Content */}
            <FadeIn direction="right" className="flex-1 w-full">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest mb-0">
                We Are
              </h2>
              <h3 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black text-[#F97316] uppercase mb-8 tracking-tighter leading-none">
                ARRTECH
              </h3>
              
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-[15px] md:text-base">
                <p>
                  ARRTECH, established recently provides the most economical and consumer friendly solutions at a cutthroat cost. The company focuses on long-term bonds with its customers by providing lucrative web design services. Our aim of integrating progressive IT solutions along with best Internet Marketing services and innovative Web Design that help businesses to grow another level of performance. We focus on the production of web solutions for businesses to put forward them consistently with good end results.
                </p>
                <p>
                  Our mission is always to present lucrative, original quality solutions that target your goals. Commercially, the company&apos;s web application platform products have many customers worldwide. We are a website design company that has built the unlimited number of websites ranging from straightforward HTML websites to intricate database e-commerce websites.
                </p>
              </div>
            </FadeIn>

            {/* Right Image */}
            <FadeIn direction="left" className="flex-[1.1] w-full relative">
              <div className="relative z-10 w-full max-w-[650px] mx-auto lg:ml-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
                  alt="Professional at laptop" 
                  className="w-full h-auto object-cover border-[10px] border-white shadow-sm"
                />
                
                {/* Floating Experience Card */}
                <div className="absolute -bottom-8 lg:-bottom-12 left-4 lg:-left-12 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] py-4 px-6 md:py-5 md:px-8 flex items-center gap-4 z-20">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-50 rounded-full flex-shrink-0 text-3xl shadow-inner">
                    🏆
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-black text-[#F97316] leading-none mb-1">12+</span>
                    <span className="text-slate-600 font-medium text-sm md:text-base leading-none">Projects Delivered</span>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 200 C 300 100, 500 800, 1500 400" stroke="#E2E8F0" strokeWidth="40" />
            <path d="M-100 400 C 300 300, 500 1000, 1500 600" stroke="#F1F5F9" strokeWidth="60" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {[
              { year: "2025", text: <><b>GenAI & LLM Integration:</b> Deployed high-performance generative AI models and dashboards to Fortune 500 networks.</>, color: "#F97316" },
              { year: "2026", text: <><b>Enterprise Multi-Cloud:</b> Pioneered serverless federated database infrastructures using AWS & GCP.</>, color: "#FBBF24" },
            ].map((item, index, arr) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={item.year} className="flex w-full relative pb-12">
                  {/* Vertical Line */}
                  {index < arr.length - 1 && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 top-8 bottom-[-32px] w-[3px] z-0" 
                      style={{ backgroundColor: item.color }} 
                    />
                  )}

                  {/* Left Side */}
                  <div className="w-1/2 pr-8 md:pr-12 lg:pr-24 flex justify-end relative">
                    {isLeft && (
                      <FadeIn direction="right" delay={index * 100}>
                        <div className="relative w-full max-w-sm pt-8">
                          <div 
                            className="absolute right-[-32px] md:right-[-48px] lg:right-[-96px] top-8 w-[calc(100%+32px)] md:w-[calc(100%+48px)] lg:w-[calc(100%+96px)] h-[calc(100%-32px)] border-t-[3px] border-l-[3px] border-b-[3px] rounded-l-xl pointer-events-none"
                            style={{ borderColor: item.color }}
                          />
                          <div className="p-5 pl-6 relative z-10 text-slate-700 text-[15px] font-medium leading-relaxed bg-white/50 backdrop-blur-sm rounded-l-xl rounded-r-sm">
                            {item.text}
                          </div>
                        </div>
                      </FadeIn>
                    )}
                  </div>

                  {/* Center Diamond */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                    <FadeIn delay={index * 100}>
                      <div className="w-16 h-16 bg-white border-4 border-slate-300 rotate-45 flex items-center justify-center shadow-[0_4px_15px_-3px_rgba(0,0,0,0.1)] rounded-sm">
                        <span className="font-black text-slate-800 -rotate-45 text-lg">{item.year}</span>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Right Side */}
                  <div className="w-1/2 pl-8 md:pl-12 lg:pl-24 flex justify-start relative">
                    {!isLeft && (
                      <FadeIn direction="left" delay={index * 100}>
                        <div className="relative w-full max-w-sm pt-8">
                          <div 
                            className="absolute left-[-32px] md:left-[-48px] lg:left-[-96px] top-8 w-[calc(100%+32px)] md:w-[calc(100%+48px)] lg:w-[calc(100%+96px)] h-[calc(100%-32px)] border-t-[3px] border-r-[3px] border-b-[3px] rounded-r-xl pointer-events-none"
                            style={{ borderColor: item.color }}
                          />
                          <div className="p-5 pr-6 relative z-10 text-slate-700 text-[15px] font-medium leading-relaxed bg-white/50 backdrop-blur-sm rounded-r-xl rounded-l-sm">
                            {item.text}
                          </div>
                        </div>
                      </FadeIn>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-24 bg-white relative overflow-hidden min-h-[600px] flex items-center">
        {/* Hand Image (Positioned absolutely on the left edge of the full section) */}
        <div className="absolute left-0 bottom-0 z-10 w-[240px] md:w-[350px] lg:w-[450px]">
          <FadeIn>
            <img 
              src="/img/hand-png.png" 
              alt="Hand holding medals" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] origin-bottom-left"
            />
          </FadeIn>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-20">
          <div className="flex flex-col lg:flex-row items-stretch justify-end">
            
            {/* Left Side (Vertical Text & Line) */}
            <div className="flex-1 w-full flex items-center justify-center lg:justify-end pr-8 lg:pr-12 mb-16 lg:mb-0 min-h-[450px]">
              
              <FadeIn className="flex items-center">
                {/* Vertical Text */}
                <div 
                  className="flex flex-col"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'right' }}
                >
                  <span className="block text-6xl md:text-7xl lg:text-[5.5rem] font-black text-black tracking-widest leading-none">
                    ACHIEVEMENT
                  </span>
                  <span className="block text-xl md:text-2xl text-slate-800 font-medium tracking-wider mr-2 md:mr-4">
                    in 2026
                  </span>
                </div>
                
                {/* Curved Orange Line */}
                <div className="h-[350px] lg:h-[450px] w-12 lg:w-16 ml-4 lg:ml-8">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 400" fill="none">
                    <path d="M0,0 Q100,200 0,400" stroke="#ea580c" strokeWidth="2.5" />
                  </svg>
                </div>
              </FadeIn>
            </div>

            {/* Right Side - List */}
            <div className="flex-[1.2] w-full lg:pl-16 flex flex-col justify-center space-y-4 md:space-y-5">
              {[
                { 
                  title: "Next.js Development", 
                  desc: "We are known among the top enterprise Next.js development companies.",
                  icon: Server,
                  iconColor: "text-[#3b82f6]"
                },
                { 
                  title: "Generative AI Integration", 
                  desc: "Pioneering custom AI and LLM solutions for cutting-edge enterprise workflows.",
                  icon: Cpu,
                  iconColor: "text-[#d97706]"
                },
                { 
                  title: "Intelligent E-commerce", 
                  desc: "Deploying AI-driven, highly scalable headless e-commerce architectures.",
                  icon: ShoppingCart,
                  iconColor: "text-[#ec4899]"
                },
                { 
                  title: "Development", 
                  desc: "Flexible and agile development methodologies",
                  icon: Laptop,
                  iconColor: "text-[#475569]"
                },
                { 
                  title: "Flutter App Development", 
                  desc: "Developing highly responsive cross-platform Flutter application packages for iOS and Android.",
                  icon: Smartphone,
                  iconColor: "text-[#6366f1]"
                }
              ].map((achievement, i) => (
                <FadeIn key={i} delay={i * 100} direction="left" className="flex items-stretch gap-4 md:gap-6 group h-[88px] md:h-[96px]">
                  {/* Icon */}
                  <div className="w-16 md:w-20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <achievement.icon className={`w-12 h-12 md:w-14 md:h-14 ${achievement.iconColor} drop-shadow-sm`} strokeWidth={1.5} />
                  </div>
                  
                  {/* Banner */}
                  <div 
                    className="relative flex-1 bg-[#F05C35] text-white py-2 px-5 md:py-3 md:px-6 shadow-sm transition-all duration-300 group-hover:translate-x-2 flex flex-col justify-center"
                    style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 50%, 100% 100%, 0 100%)' }}
                  >
                    <h4 className="text-base md:text-lg font-bold mb-0.5 tracking-wide">{achievement.title}</h4>
                    <p className="text-white/95 text-xs md:text-sm leading-snug pr-8 lg:pr-12">{achievement.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
                Why join <span className="text-[#ea580c]">ARRTECH?</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                Do you think you have the skills and passion to be part of the growing IT industry ? Reach out to us.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                title: "Personal Growth",
                desc: "Learn new skills while working with us and grow. Help our clients overcome their challenges and elevate yourself in the process.",
                icon: TrendingUp
              },
              {
                title: "Dynamic Environment",
                desc: "Learn new skills while working with us and grow. Help our clients overcome their challenges and elevate yourself in the process.",
                icon: MonitorSmartphone
              },
              {
                title: "New Opportunities",
                desc: "We always strive to enter new markets, work for different industries and reach new horizons. Working with us will enhance your career.",
                icon: Lightbulb
              },
              {
                title: "Creating Leaders",
                desc: "We believe in creating next generation leaders of the IT industry. Working with us will provide you an exposure to all the latest development in the industry.",
                icon: Award
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="relative group h-full">
                {/* Orange rotated background for border effect */}
                <div className="absolute inset-0 bg-[#ea580c] transform rotate-2 transition-transform duration-300 group-hover:rotate-0" />
                
                {/* White Card */}
                <div className="relative h-full bg-white p-8 lg:px-6 lg:py-10 shadow-sm transition-transform duration-300 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg lg:text-xl font-bold text-black pr-2">{item.title}</h3>
                    <item.icon className="w-8 h-8 text-[#ea580c] flex-shrink-0" strokeWidth={1.5} />
                  </div>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left Half - Dark */}
        <div className="w-full lg:w-1/2 relative bg-[#0f172a] text-white py-20 px-6 lg:px-12 xl:px-0">
          {/* Subtle Dartboard/Target Background Overlay */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
            <svg width="800" height="800" viewBox="0 0 100 100" className="w-[400px] h-[400px] md:w-[800px] md:h-[800px]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="5" fill="white" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          
          <div className="relative z-10 w-full xl:max-w-[600px] xl:ml-auto xl:pr-16 flex flex-col justify-center h-full min-h-[400px]">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Vision & Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed md:text-left">
                ARRTECH is one of the major software companies that helps other organizations digitize their work. Our main aim is to constantly develop and become a leading performer in this field of Information Technology. Our mission is to optimize the business processes of our customers by building high-quality solutions that help them achieve their business growth and harness their true potential.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right Half - Light */}
        <div className="w-full lg:w-1/2 bg-[#f8f9fa] py-20 px-6 lg:px-12 xl:px-0">
          <div className="w-full xl:max-w-[600px] xl:mr-auto xl:pl-16 flex flex-col justify-center h-full space-y-10">
            {[
              {
                title: "Continual Growth",
                desc: "Create a work atmosphere that can facilitate growth, where each and every employee can better themselves in terms of monetary gain, career, knowledge and skills related to the job."
              },
              {
                title: "Work Culture",
                desc: "To provide a conducive work environment to employees that bring out the best in them. Encourage work-related innovative inputs and creative ideas from the team members."
              },
              {
                title: "Customer Satisfaction",
                desc: "To offer top-notch services that create lifelong customers. To offer quick services through our effective communication channels. To extend highly reliable services that guarantee a high success rate for businesses."
              },
              {
                title: "Contribution To The Society",
                desc: "Through our firm, we offer Industrial Training to college students so as to offer them exposure to various niches that exist."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <h3 className="text-2xl font-bold text-[#ea580c] mb-3">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
                Our core <span className="text-[#ea580c]">Values</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto">
                At ARRTECH, we follow, practice, and celebrate a few core values that define our entire organization.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Continuous AI Learning",
                desc: "We continuously upskill our teams in cutting-edge domains like Generative AI and modern frameworks to stay ahead of the curve.",
                icon: BookOpen,
                iconColor: "text-blue-500",
                iconBg: "bg-blue-50",
                blobColor: "bg-blue-100"
              },
              {
                title: "Excellence & Agility",
                desc: "We foster a fast-paced culture that rewards innovation, proactive problem solving, and a dependable engineering mindset.",
                icon: Award,
                iconColor: "text-yellow-500",
                iconBg: "bg-yellow-50",
                blobColor: "bg-yellow-100"
              },
              {
                title: "Engineering Innovation",
                desc: "We build highly scalable, resilient enterprise solutions utilizing bleeding-edge cloud technologies to drive transformative value.",
                icon: Settings,
                iconColor: "text-indigo-500",
                iconBg: "bg-indigo-50",
                blobColor: "bg-indigo-100"
              }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 100} className="h-full group">
                <div className="bg-[#f8f9fa] border-t-[5px] border-[#ea580c] p-8 md:p-10 text-center h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Decorative Icon Wrapper to simulate illustration */}
                  <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
                    <div className={`absolute inset-0 rounded-full ${value.blobColor} opacity-50 blur-xl transform scale-110 group-hover:scale-125 transition-transform duration-500`} />
                    <div className={`relative w-24 h-24 rounded-2xl ${value.iconBg} flex items-center justify-center shadow-sm rotate-3 group-hover:rotate-6 transition-transform duration-300`}>
                      <value.icon className={`w-12 h-12 ${value.iconColor}`} strokeWidth={1.5} />
                    </div>
                    {/* Tiny floating decorative elements */}
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-orange-400 opacity-70 animate-pulse" />
                    <div className="absolute bottom-4 left-2 w-2 h-2 rounded-full bg-sky-400 opacity-60" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



      
    </div>
  );
}
