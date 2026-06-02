export interface ServiceProcess {
  title: string;
  desc: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  heroImage: string;
  overview: string[];
  benefits: string[];
  process: ServiceProcess[];
  techStack: string[];
}

// Helper to generate a generic service if not fully fleshed out
const createGenericService = (title: string, slug: string, category: string): ServiceData => ({
  slug,
  title,
  category,
  shortDesc: `Professional ${title} solutions tailored for enterprise growth and digital transformation.`,
  heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop',
  overview: [
    `Our ${title} services are designed to help businesses navigate the complexities of the modern digital landscape. We leverage cutting-edge methodologies to deliver robust, scalable, and highly secure solutions.`,
    `By partnering with us, you gain access to a dedicated team of experts who seamlessly integrate with your operations, ensuring that every technological investment directly contributes to your strategic business goals.`,
    `We believe in a user-first approach. Every solution we architect is built with scalability and future-proofing in mind. From initial prototyping to full-scale deployment, our rigorous quality assurance processes guarantee a flawless end product.`,
    `Furthermore, our commitment does not end at deployment. We provide continuous monitoring, regular updates, and strategic consulting to ensure your technology stack remains competitive and fully optimized for emerging market demands.`
  ],
  benefits: [
    'Enhanced Operational Efficiency',
    'Enterprise-Grade Security',
    'Scalable Architecture',
    '24/7 Dedicated Support',
    'Seamless Integration Capabilities'
  ],
  process: [
    { title: 'Discovery & Strategy', desc: 'We analyze your business requirements and technical ecosystem.' },
    { title: 'Architecture Design', desc: 'Creating a blueprint for scalable and secure implementation.' },
    { title: 'Agile Execution', desc: 'Iterative development and deployment with constant feedback loops.' },
    { title: 'Maintenance & Scaling', desc: 'Ongoing support and infrastructure scaling as your business grows.' }
  ],
  techStack: ['Cloud Native', 'Microservices', 'Enterprise Architecture', 'Agile/Scrum']
});

export const SERVICES: ServiceData[] = [
  {
    slug: 'software-saas-development',
    title: 'Software & SaaS Development',
    category: 'Enterprise Services',
    shortDesc: 'Build highly scalable, secure, and multi-tenant SaaS platforms tailored to your business model.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    overview: [
      'In today\'s subscription economy, a robust SaaS platform is the lifeblood of digital enterprises. We specialize in engineering multi-tenant architectures that guarantee data isolation, high availability, and rapid scaling.',
      'From zero-to-one MVP development to re-architecting legacy monolithic systems into agile microservices, our engineering team ensures your software product is built to handle millions of requests without breaking a sweat. We handle everything from complex billing integrations to user role management.',
      'Our development methodology prioritizes security and performance. We utilize best-in-class cloud infrastructure and advanced caching strategies to deliver sub-second response times, ensuring a seamless experience for your end users globally.',
      'Beyond just code, we act as your strategic technical partners. We help you navigate product roadmaps, optimize cloud expenditure, and implement continuous integration pipelines that allow your team to deploy new features multiple times a day with complete confidence.'
    ],
    benefits: [
      'Secure Multi-Tenant Architecture',
      'Stripe/Braintree Billing Integration',
      'Automated Onboarding Workflows',
      'Real-time Analytics Dashboards',
      '99.99% Guaranteed Uptime'
    ],
    process: [
      { title: 'Product Discovery', desc: 'Mapping user journeys and defining the core MVP feature set.' },
      { title: 'System Architecture', desc: 'Designing the database schema and microservices infrastructure.' },
      { title: 'Iterative Sprints', desc: 'Agile development cycles delivering testable features every two weeks.' },
      { title: 'Launch & Iterate', desc: 'Production deployment followed by data-driven feature iterations.' }
    ],
    techStack: ['Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Stripe']
  },
  {
    slug: 'web-mobile-app-dev-flutter-react',
    title: 'Web & Mobile App Development',
    category: 'Enterprise Services',
    shortDesc: 'Cross-platform mobile and web applications delivering native-like performance using Flutter and React.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop',
    overview: [
      'Users expect a flawless experience whether they are on a desktop browser or a mobile device. Our Web & Mobile App development services utilize modern frameworks like React and Flutter to build single-codebase applications that run perfectly everywhere.',
      'By utilizing cross-platform technologies, we cut development time and costs in half while still delivering fluid, 60-FPS animations, deep hardware integration, and offline-first capabilities.',
      'Our UI/UX designers work hand-in-hand with our engineers to ensure that every pixel is perfectly aligned and every interaction feels intuitive. We focus heavily on accessibility, responsiveness, and creating interfaces that drive user engagement and retention.',
      'We also implement robust backend architectures and APIs to power your applications. Whether you need real-time chat, complex data synchronization, or secure payment processing, our team delivers a complete, end-to-end solution that scales effortlessly with your growing user base.'
    ],
    benefits: [
      'Single Codebase for iOS & Android',
      'Native Hardware Integration (Camera, GPS)',
      'Offline-First Data Syncing',
      'High-Performance Animations',
      'Rapid Go-to-Market Timeline'
    ],
    process: [
      { title: 'UX/UI Prototyping', desc: 'Creating high-fidelity Figma prototypes for mobile and web.' },
      { title: 'Cross-Platform Coding', desc: 'Writing modular code using Flutter or React Native.' },
      { title: 'Rigorous QA Testing', desc: 'Automated testing across hundreds of real devices.' },
      { title: 'App Store Deployment', desc: 'Managing the strict Apple and Google review processes.' }
    ],
    techStack: ['Flutter', 'React Native', 'React.js', 'TypeScript', 'Firebase', 'GraphQL', 'Fastlane']
  },
  createGenericService('E-Commerce Platforms', 'e-commerce-platforms', 'Enterprise Services'),
  createGenericService('UI/UX Design & Branding', 'ui-ux-design-branding', 'Enterprise Services'),
  createGenericService('DevOps, CI/CD & Automation', 'devops-ci-cd-automation', 'Enterprise Services'),
  createGenericService('ERP & CRM Solutions', 'erp-crm-solutions', 'Enterprise Services'),
  createGenericService('Startup Product Scaling', 'startup-product-scaling', 'Enterprise Services'),
  createGenericService('AMC & 24/7 Technical Support', 'amc-24-7-technical-support', 'Enterprise Services'),
  
  createGenericService('AI/ML & LLM Solutions', 'ai-ml-llm-solutions', 'Advanced & Govt IT'),
  createGenericService('IT Consulting & Advisory', 'it-consulting-advisory', 'Advanced & Govt IT'),
  createGenericService('Cloud Systems & Infrastructure', 'cloud-systems-infrastructure', 'Advanced & Govt IT'),
  createGenericService('Fintech & Healthcare IT', 'fintech-healthcare-it', 'Advanced & Govt IT'),
  createGenericService('Government E-Governance', 'government-e-governance', 'Advanced & Govt IT'),
  createGenericService('Smart City IT Infrastructure', 'smart-city-it-infrastructure', 'Advanced & Govt IT'),
  createGenericService('GeM Portal Bidding & Tenders', 'gem-portal-bidding-tenders', 'Advanced & Govt IT'),
  createGenericService('Software Licensing Services', 'software-licensing-services', 'Advanced & Govt IT')
];
