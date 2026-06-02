/**
 * Menu Items Configuration
 * Navigation menu structure with mega menu categories
 */

import { MenuItem } from '@/types';

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Home',
    path: '/',
    description: 'ARRTECH APPS AND DATA SOLUTIONS Homepage.',
    icon: 'Home',
  },
  {
    name: 'Software and Services',
    path: '/software/software-saas-development',
    description: 'Custom software products and high-performance enterprise IT services.',
    icon: 'Code',
    megaMenu: [
      {
        title: 'Software Products',
        items: [
          { label: 'Poskdhara E-Commerce Webapp', path: '/software/poskdhara-e-commerce-webapp' },
          { label: 'Ontime Trading App', path: '/software/ontime-trading-app' },
          { label: 'Yarn & Knots E-Commerce Website', path: '/software/yarn-knots-e-commerce-website' },
          { label: 'EV Charging Station App', path: '/software/ev-charging-station-app' },
          { label: 'Kirana Store App', path: '/software/kirana-store-app' },
        ]
      },
      {
        title: 'Enterprise Services',
        items: [
          { label: 'Software & SaaS Development', path: '/software/software-saas-development' },
          { label: 'Web & Mobile App Dev (Flutter/React)', path: '/software/web-mobile-app-dev-flutter-react' },
          { label: 'E-Commerce Platforms', path: '/software/e-commerce-platforms' },
          { label: 'UI/UX Design & Branding', path: '/software/ui-ux-design-branding' },
          { label: 'DevOps, CI/CD & Automation', path: '/software/devops-ci-cd-automation' },
          { label: 'ERP & CRM Solutions', path: '/software/erp-crm-solutions' },
          { label: 'Startup Product Scaling', path: '/software/startup-product-scaling' },
          { label: 'AMC & 24/7 Technical Support', path: '/software/amc-24-7-technical-support' },
        ]
      },
      {
        title: 'Advanced & Govt IT',
        items: [
          { label: 'AI/ML & LLM Solutions', path: '/software/ai-ml-llm-solutions' },
          { label: 'IT Consulting & Advisory', path: '/software/it-consulting-advisory' },
          { label: 'Cloud Systems & Infrastructure', path: '/software/cloud-systems-infrastructure' },
          { label: 'Fintech & Healthcare IT', path: '/software/fintech-healthcare-it' },
          { label: 'Government E-Governance', path: '/software/government-e-governance' },
          { label: 'Smart City IT Infrastructure', path: '/software/smart-city-it-infrastructure' },
          { label: 'GeM Portal Bidding & Tenders', path: '/software/gem-portal-bidding-tenders' },
          { label: 'Software Licensing Services', path: '/software/software-licensing-services' },
        ]
      }
    ]
  },
  {
    name: 'Projects',
    path: '/projects',
    description: 'Our successful projects and case studies.',
    icon: 'Briefcase',
  },
  {
    name: 'Company',
    path: '/company',
    description: 'Learn about ARRTECH APPS AND DATA SOLUTIONS, our mission, and our team.',
    icon: 'Users',
    megaMenu: [
      {
        title: 'Corporate Profile',
        items: [
          { label: 'About Us', path: '/company' },
          { label: 'Team @ ARRTECH', path: '/team' },
        ]
      },
      {
        title: 'Contact & Support',
        items: [
          { label: 'Contact Us', path: '/contact' },
        ]
      }
    ]
  },
  {
    name: 'Blog',
    path: '/blog',
    description: 'Read our latest articles and insights.',
    icon: 'BookOpen',
  },
  {
    name: 'Contact Us',
    path: '/contact',
    description: 'Get in touch with us.',
    icon: 'Phone',
  }
];
