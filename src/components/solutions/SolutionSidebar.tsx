'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

interface SidebarItem {
  label: string;
  path: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface SolutionSidebarProps {
  menuTitle?: string;
  sections?: SidebarSection[];
  currentSlug?: string;
}

// Software & Platforms Menu (The single active solutions ecosystem)
export const softwarePlatformsMenu: SidebarSection[] = [
  {
    title: 'Software Solutions & Platforms',
    items: [
      { label: 'Township Management System (TMS)', path: '/solutions/tms' },
      { label: 'Visitor Management System (VMS)', path: '/solutions/vms-software' },
      { label: 'Water & Amusement Park System', path: '/solutions/park-system' },
      { label: 'Race Report & Time Management', path: '/solutions/race-management' },
      { label: 'Bar Council Management System', path: '/solutions/bar-council' },
      { label: 'Smart Attendance Management', path: '/solutions/smart-attendance' },
      { label: 'Access Management Software', path: '/solutions/access-software' },
      { label: 'Driving Test Track & RTO Software', path: '/solutions/rto-software' },
      { label: 'RFID Card Management Dashboard', path: '/solutions/rfid-dashboard' },
      { label: 'Citizen Enrollment Platform', path: '/solutions/citizen-enrollment' },
    ]
  },
  {
    title: 'E-Governance Solutions',
    items: [
      { label: 'Aadhaar-Based Identity & KYC', path: '/solutions/aadhaar-kyc' },
      { label: 'Driving License & RC Issuance', path: '/solutions/dl-rc-issuance' },
      { label: 'Automated Driving Test Tracks', path: '/solutions/automated-test-tracks' },
      { label: 'Border & Immigration Control', path: '/solutions/border-control' },
      { label: 'One Identity, One Verification', path: '/solutions/one-identity' },
      { label: 'RFID-Based Governance Cards', path: '/solutions/governance-cards' },
    ]
  },
  {
    title: 'Digital & Creative Services',
    items: [
      { label: 'Website Development', path: '/solutions/web-development' },
      { label: 'E-Commerce Development', path: '/solutions/ecommerce' },
      { label: 'UI/UX Design', path: '/solutions/ui-ux' },
      { label: 'Search Engine Optimization (SEO)', path: '/solutions/seo' },
      { label: 'Graphic Design', path: '/solutions/graphic-design' },
      { label: 'Digital Marketing and Analytics', path: '/solutions/digital-marketing' },
    ]
  }
];

// Legacy menu aliases to ensure absolute compilation stability across the solutions directory
export const identityAccessMenu: SidebarSection[] = softwarePlatformsMenu;
export const iotRoboticsMenu: SidebarSection[] = softwarePlatformsMenu;
export const hologramPrintingMenu: SidebarSection[] = softwarePlatformsMenu;

// Helper function to return software platforms menu as default
function getMenuFromSlug(): { title: string; sections: SidebarSection[] } {
  return { title: 'Software & Platforms', sections: softwarePlatformsMenu };
}

export function SolutionSidebar({ menuTitle, sections }: SolutionSidebarProps) {
  const pathname = usePathname();
  
  // Use provided sections or fallback to Software Platforms menu
  const menu = sections ? { title: menuTitle || 'Solutions', sections } : getMenuFromSlug();
  const finalTitle = menuTitle || menu.title;
  const finalSections = sections || menu.sections;

  return (
    <aside className="w-full lg:w-1/4 flex-shrink-0 order-2 lg:order-1">
      <div className="sticky top-28 bg-[#1e293b]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6 text-ids-blue font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-4">
          <Menu size={16} />
          {finalTitle} Menu
        </div>
        <div className="space-y-8">
          {finalSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-white mb-3 text-sm">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item, i) => {
                  const isActive = pathname === item.path;
                  return (
                    <li key={i}>
                      <Link
                        href={item.path}
                        className={`block text-sm py-2 px-3 rounded-lg transition-all ${
                          isActive
                            ? 'bg-white/10 text-white font-bold border-l-2 border-ids-blue'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
