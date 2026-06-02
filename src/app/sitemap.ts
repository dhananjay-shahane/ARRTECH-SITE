import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arrtech.com';
  const appDirectory = path.join(process.cwd(), 'src/app');
  const currentDate = new Date().toISOString();
  
  const routesSet = new Set<string>();
  
  // 1. Recursive scanner for static routes (folders with page.tsx)
  function scanDirectory(dir: string) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip dynamic route folders, route group folders, assets, and hidden folders
        if (file.startsWith('[') || file === 'assets' || file.startsWith('.') || file === 'node_modules') {
          continue;
        }
        scanDirectory(fullPath);
      } else if (file === 'page.tsx') {
        // Resolve route path relative to src/app
        let route = path.relative(appDirectory, dir).replace(/\\/g, '/');
        
        // Remove Next.js route groups like (company) or (services)
        route = route.replace(/\([^)]+\)\/?/g, '');
        
        // Normalize leading and trailing slashes
        route = route.trim();
        if (route && !route.startsWith('/')) {
          route = '/' + route;
        } else if (!route) {
          route = '/';
        }
        
        routesSet.add(route);
      }
    }
  }

  // Scan src/app to populate static routes
  scanDirectory(appDirectory);

  // 2. Add dynamic blog slugs
  const blogSlugs = [
    'the-future-of-ai-in-enterprise-software',
    'why-nextjs-is-our-go-to-framework-in-2026',
    'scaling-cloud-infrastructure-for-high-traffic',
    'mastering-ui-ux-design-for-saas-platforms',
    'building-secure-fintech-applications',
    'the-rise-of-cross-platform-mobile-apps'
  ];
  for (const slug of blogSlugs) {
    routesSet.add(`/blog/${slug}`);
  }

  // 3. Add dynamic solutions slugs from solutionsData keys
  const solutionSlugs = [
    'citizen-identity', 'border-control', 'biometric-systems', 'mobile-id', 'enterprise-access', 'payment-systems',
    'physical-access', 'logical-access', 'visitor-management', 'time-attendance', 'fleet-management', 'asset-tracking',
    'rfid-solutions', 'ble-beacons', 'amr-systems', 'warehouse-automation', 'predictive-maintenance', 'industrial-iot',
    'security-labels', 'brand-protection', 'document-security', 'tax-stamps', 'custom-holograms', 'track-trace'
  ];
  for (const slug of solutionSlugs) {
    routesSet.add(`/solutions/${slug}`);
  }

  // 4. Add dynamic software service slugs from menu
  const softwareSlugs = [
    'poskdhara-e-commerce-webapp',
    'ontime-trading-app',
    'yarn-knots-e-commerce-website',
    'ev-charging-station-app',
    'kirana-store-app',
    'software-saas-development',
    'web-mobile-app-dev-flutter-react',
    'e-commerce-platforms',
    'ui-ux-design-branding',
    'devops-ci-cd-automation',
    'erp-crm-solutions',
    'startup-product-scaling',
    'amc-24-7-technical-support',
    'ai-ml-llm-solutions',
    'it-consulting-advisory',
    'cloud-systems-infrastructure',
    'fintech-healthcare-it',
    'government-e-governance',
    'smart-city-it-infrastructure',
    'gem-portal-bidding-tenders',
    'software-licensing-services'
  ];
  for (const slug of softwareSlugs) {
    routesSet.add(`/software/${slug}`);
  }

  // Convert routes set to MetadataRoute.Sitemap format
  const sitemapItems = Array.from(routesSet).map((route) => {
    // Determine priority and change frequency based on the route
    let priority = 0.5;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';

    if (route === '/' || route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/company' || route === '/team' || route === '/contact') {
      priority = 0.8;
      changeFrequency = 'weekly';
    } else if (route.startsWith('/solutions') || route.startsWith('/software')) {
      priority = 0.7;
      changeFrequency = 'weekly';
    } else if (route.startsWith('/blog')) {
      priority = 0.6;
      changeFrequency = 'weekly';
    }

    // Normalize URL
    const cleanRoute = route === '/' ? '' : route;
    const url = `${baseUrl}${cleanRoute}`;

    return {
      url,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });

  return sitemapItems;
}
