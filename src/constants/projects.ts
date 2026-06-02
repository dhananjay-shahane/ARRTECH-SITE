export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface CaseStudyData {
  client: string;
  timeline: string;
  overviewParagraphs: string[];
  features: ProjectFeature[];
  techStack: string[];
  images: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  websiteUrl?: string;
  caseStudy?: CaseStudyData;
}

export const CATEGORIES = [
  'All Projects',
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Digital Marketing',
  'Software Solution'
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Poskdhara E-Commerce Webapp',
    category: 'Web Development',
    description: 'A robust and scalable e-commerce web application with a seamless shopping experience and secure payment gateways.',
    image: '/projects/poshakdhara.png',
    slug: 'poskdhara-e-commerce-webapp',
    websiteUrl: 'https://example.com/poskdhara',
    caseStudy: {
      client: 'Retail Enterprise Group',
      timeline: '4 Months',
      images: [
        '/projects/poshakdhara.png',
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop'
      ],
      overviewParagraphs: [
        'Poskdhara is a comprehensive e-commerce platform built to streamline online retail. It integrates advanced inventory management, a seamless checkout experience, and highly secure payment gateways to provide both the merchant and the consumer with a flawless shopping experience.',
        'By focusing on user-centric design principles and leveraging a modern tech stack, we were able to significantly reduce bounce rates and increase overall conversion metrics for the client. The platform was built from the ground up to handle high traffic volumes during peak sales periods without compromising on speed or security.',
        'A critical aspect of the project was redefining the backend infrastructure to seamlessly integrate with legacy ERP systems. This bridging of old and new data environments ensured that existing warehouse stock levels, accounting data, and vendor registries were synchronized in real-time, eliminating costly manual data entry errors.',
        'Security was treated as a first-class citizen throughout the development lifecycle. By implementing advanced end-to-end encryption, multi-factor authentication for administrative access, and regular automated vulnerability scans, we delivered a platform that exceeds global data protection and privacy compliance standards.'
      ],
      features: [
        { title: 'Seamless Checkout', desc: 'A frictionless, one-page checkout process reducing cart abandonment by streamlining payment gateways and eliminating unnecessary form fields.' },
        { title: 'Real-time Inventory', desc: 'Live warehouse syncing ensuring accurate stock levels globally, preventing overselling and automating supplier reorder triggers.' },
        { title: 'AI Recommendations', desc: 'Personalized product suggestions based on behavioral patterns, previous purchases, and seasonal trends to maximize cross-selling.' },
        { title: 'Advanced Analytics', desc: 'Comprehensive admin dashboard for tracking sales, user engagement, and complex financial KPIs in beautiful real-time charts.' }
      ],
      techStack: ['React.js', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe API']
    }
  },

  {
    id: '3',
    title: 'Ontime Trading App',
    category: 'Mobile App',
    description: 'A high-performance mobile trading platform providing real-time market data, secure transactions, and intuitive analytics for traders.',
    image: '/projects/ontime-app.png',
    slug: 'ontime-trading-app',
    websiteUrl: 'https://example.com/ontime-trading',
    caseStudy: {
      client: 'Ontime Financials',
      timeline: '3 Months',
      images: [
        '/projects/ontime-app.png',
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop'
      ],
      overviewParagraphs: [
        'The Ontime Trading App is a next-generation mobile brokerage platform designed for high-frequency retail traders. It delivers institutional-grade market data, advanced charting, and lightning-fast execution speeds directly to the users smartphone.',
        'Latency was the primary enemy in this project. We implemented a robust WebSocket architecture that maintains persistent, low-overhead connections to financial exchanges, ensuring that users receive price updates and execute trades in milliseconds.',
        'Understanding that trading is highly stressful, we focused heavily on UX design. The interface employs a dark-mode-first aesthetic with high-contrast typography, ensuring that rapidly changing numbers are instantly legible even in direct sunlight.',
        'Security is paramount. The app features biometric authentication (FaceID/TouchID), mandatory multi-factor authentication for withdrawals, and end-to-end encryption for all financial transactions.'
      ],
      features: [
        { title: 'Real-time Market Feeds', desc: 'Sub-millisecond latency WebSocket feeds delivering live ticks for equities, forex, and crypto markets.' },
        { title: 'One-tap Execution', desc: 'Frictionless trade execution interface allowing users to enter and exit positions instantly without confirmation delays.' },
        { title: 'Advanced Charting', desc: 'Interactive candlestick charts with over 50 technical indicators built specifically for mobile touch interfaces.' },
        { title: 'Biometric Security', desc: 'Bank-grade security featuring FaceID integration and encrypted local key storage.' }
      ],
      techStack: ['Flutter', 'Dart', 'Node.js', 'WebSockets', 'MongoDB', 'Redis', 'AWS EC2', 'Plaid API']
    }
  },
  {
    id: '4',
    title: 'Yarn & Knots E-Commerce Website',
    category: 'Web Development',
    description: 'A beautifully crafted online storefront for artisanal yarn and craft products, featuring customized user journeys and cart management.',
    image: '/projects/yarns-and-knots.png',
    slug: 'yarn-knots-e-commerce-website',
    websiteUrl: 'https://example.com/yarn-knots',
    caseStudy: {
      client: 'Yarn & Knots Boutique',
      timeline: '3 Months',
      images: [
        '/projects/yarns-and-knots.png',
        'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1200&auto=format&fit=crop'
      ],
      overviewParagraphs: [
        'Yarn & Knots is a premium digital storefront designed for a high-end artisanal crafts boutique. The goal was to translate the tactile, cozy experience of a physical yarn store into a visually stunning online shopping experience.',
        'We utilized a headless CMS architecture to give the marketing team complete control over editorial content, lookbooks, and product narratives without needing developer intervention. This allowed the brand to frequently update their aesthetic to match seasonal craft trends.',
        'A major highlight of the project was the custom "Project Builder" feature. Users can select a knitting pattern, and the platform automatically calculates and recommends the exact amount and type of yarn required, significantly increasing average order value.',
        'The frontend is heavily optimized for image delivery, utilizing advanced modern formats (WebP) and lazy loading to ensure that the massive, high-resolution product photography loads instantly even on mobile networks.'
      ],
      features: [
        { title: 'Visual Project Builder', desc: 'An interactive wizard that helps users calculate yarn requirements based on their specific knitting patterns.' },
        { title: 'Color Matcher', desc: 'A bespoke tool allowing customers to virtually combine different yarn colors to preview their final craft.' },
        { title: 'Editorial Lookbooks', desc: 'Shoppable blog posts and lookbooks that seamlessly blend content and commerce.' },
        { title: 'Loyalty Program', desc: 'Integrated rewards system where users earn "Stitches" for purchases and social sharing.' }
      ],
      techStack: ['Next.js', 'Shopify Plus', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion', 'Vercel']
    }
  },
  {
    id: '5',
    title: 'EV Charging Station App',
    category: 'Mobile App',
    description: 'An innovative mobile solution for EV drivers to locate nearby charging stations, monitor charging status, and handle payments on the go.',
    image: '/projects/ev-charging.png',
    slug: 'ev-charging-station-app',
    websiteUrl: 'https://example.com/ev-charging',
    caseStudy: {
      client: 'EcoCharge Networks',
      timeline: '5 Months',
      images: [
        '/projects/ev-charging.png',
        'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop'
      ],
      overviewParagraphs: [
        'The EV Charging Station App is a comprehensive mobility solution designed to alleviate "range anxiety" for electric vehicle owners. It provides real-time visibility into the availability and status of thousands of charging ports across the country.',
        'A significant technical hurdle was unifying data from disparate charging network APIs into a single, cohesive map interface. We built an aggregrator microservice in Go that normalizes this data and pushes live status updates (Available, In Use, Offline) to the mobile app via MQTT.',
        'The user journey was streamlined for immediate action. Drivers can locate a station, reserve it (if supported), navigate to it, and initiate a charge with a single tap using Apple Pay or Google Pay, completely bypassing clunky RFID cards.',
        'We also integrated a smart route planner. Users input their destination and current battery level, and the app calculates the most efficient route, automatically adding necessary charging stops based on their specific vehicle model.'
      ],
      features: [
        { title: 'Live Station Map', desc: 'Interactive map displaying real-time availability, connector types, and charging speeds for all nearby stations.' },
        { title: 'Smart Route Planning', desc: 'Intelligent navigation that automatically calculates required charging stops for long-distance trips.' },
        { title: 'Tap-to-Charge Payments', desc: 'Frictionless payment integration allowing users to initiate charging via Apple Pay/Google Pay.' },
        { title: 'Vehicle Integration', desc: 'Direct API integration with popular EV models to read live battery telemetry and estimate charge times.' }
      ],
      techStack: ['Flutter', 'Dart', 'Go', 'Google Maps API', 'PostgreSQL', 'Stripe', 'MQTT', 'Kubernetes']
    }
  },
  {
    id: '6',
    title: 'Kirana Store App',
    category: 'Mobile App',
    description: 'A comprehensive mobile solution designed for local grocers to manage inventory, track sales, and handle digital payments effortlessly.',
    image: '/projects/kirana-app.png',
    slug: 'kirana-store-app',
    websiteUrl: 'https://example.com/kirana-store',
    caseStudy: {
      client: 'Local Retail Network',
      timeline: '4 Months',
      images: [
        '/projects/kirana-app.png',
        'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop'
      ],
      overviewParagraphs: [
        'The Kirana Store App was engineered specifically for small to medium-sized local grocers (Kiranas) to digitize their operations. It transforms a standard smartphone into a powerful point-of-sale and inventory management system.',
        'One of the biggest challenges local grocers face is managing hundreds of small SKUs and tracking informal customer credit (Khata). We built a hyper-localized barcode scanner that works flawlessly in low-light conditions and integrates directly with a digital ledger system.',
        'To ensure adoption among users with varying levels of tech-savviness, the interface was stripped of all unnecessary complexity. The entire app supports multiple regional languages and relies heavily on universally understood iconography.',
        'The backend architecture is highly optimized for offline-first capabilities. Store owners can continue to ring up sales and track inventory during internet outages, with the app automatically syncing to the cloud ledger once connectivity is restored.'
      ],
      features: [
        { title: 'Digital Khata', desc: 'A built-in digital ledger allowing store owners to easily track customer credit, send WhatsApp payment reminders, and manage outstanding balances.' },
        { title: 'Smart Barcode Scanner', desc: 'High-speed camera integration for rapid product scanning and instant inventory updates at checkout.' },
        { title: 'Offline Mode', desc: 'Robust local database synchronization allowing uninterrupted store operations during network outages.' },
        { title: 'Unified Payments', desc: 'Integrated UPI and QR code generation for seamless, fee-free digital transactions.' }
      ],
      techStack: ['React Native', 'SQLite', 'Node.js', 'Express', 'Firebase', 'Razorpay UPI', 'AWS S3']
    }
  }
];
