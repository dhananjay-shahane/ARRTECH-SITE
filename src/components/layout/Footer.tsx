import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'About',
    links: ['About us', 'Career', 'Contact Us', 'Blog', 'Case Study', 'Video', 'Portfolio']
  },
  {
    title: 'Services',
    links: ['Website Development', 'CakePHP Development', 'Angular JS Development', 'Node JS Development', 'React js Development', 'CRM Customization', 'Mobile App Development Company in Dubai', 'Nearshore Software Outsourcing Company']
  },
  {
    title: 'Mobile App',
    links: ['iPhone Development', 'Android Application', 'iOS Swift App', 'Social Networking App', 'Travel App Development', 'Loyalty App Development', 'Live Video Streaming App']
  },
  {
    title: 'On-Demand Solutions',
    links: ['Food Delivery Solutions', 'Grocery Delivery Apps', 'Taxi Booking Apps', 'Healthcare Solutions', 'E-Learning Platforms', 'Real Estate Portals', 'Fitness & Wellness Apps', 'Logistics Solutions', 'E-Commerce Platforms']
  },
  {
    title: 'Technologies',
    links: ['React', 'Next.js', 'Node.js', 'Flutter', 'Python', 'AWS', 'Docker', 'Kubernetes', 'Cybersecurity']
  }
];

export const Footer = () => {
  return (
    <footer className="bg-[#0b101e] text-white relative overflow-hidden pt-16 pb-6 border-t border-white/5">
      
      {/* Abstract Constellation/Dot Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Faint blue glow in background */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Bar: Button and Contact */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#ff6b35] hover:bg-[#ff5511] text-white px-6 py-3 rounded-md font-bold text-sm transition-colors shadow-lg"
          >
            Get a Free Quote <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>

          <div className="flex items-center gap-3 border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="p-1.5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[11px] font-bold">For HR Inquiry</span>
              <span className="text-white/80 text-[11px]">+91 9372209322</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-12">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="font-bold text-white text-sm mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href="#" 
                      className="text-white/50 hover:text-white transition-colors text-[13px]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* First Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <Link href="#" className="text-white hover:text-[#ff6b35] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h2.097c2.32-.127 2.395-3.14 0-3.328h-2.097v3.328zm0 5.964h2.527c2.45-.145 2.574-3.805 0-4.078h-2.527v4.078z" />
            </svg>
          </Link>
          <Link href="#" className="text-white hover:text-[#ff6b35] transition-colors"><Facebook size={20} fill="currentColor" strokeWidth={0} /></Link>
          <Link href="#" className="text-white hover:text-[#ff6b35] transition-colors"><Instagram size={20} /></Link>
          <Link href="#" className="text-white hover:text-[#ff6b35] transition-colors"><Twitter size={20} fill="currentColor" strokeWidth={0} /></Link>
          <Link href="#" className="text-white hover:text-[#ff6b35] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.401.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.923 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link href="#" className="text-white hover:text-[#ff6b35] transition-colors"><Linkedin size={20} fill="currentColor" strokeWidth={0} /></Link>
          <Link href="#" className="text-white hover:text-[#ff6b35] transition-colors"><Youtube size={24} fill="currentColor" strokeWidth={0} /></Link>
        </div>

        {/* Second Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/50">
          <p>{new Date().getFullYear()} © Copyright ARRTECH APPS AND DATA SOLUTIONS. All Rights Reserved</p>
          <div className="flex gap-4">
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
