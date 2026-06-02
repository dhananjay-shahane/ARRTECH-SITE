'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Shield, Search, ArrowRight, Mail, FileText } from 'lucide-react';
import { MENU_ITEMS } from '@/constants';
import { Logo } from '@/components/ui';
import { SearchModal } from './SearchModal';
import type { MenuItem } from '@/types';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (e: React.MouseEvent, item: MenuItem) => {
    if (item.megaMenu) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === item.name ? null : item.name);
    } else {
      setActiveDropdown(null);
    }
  };

  const closeMenu = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const activeMenuItem = MENU_ITEMS.find(item => item.name === activeDropdown);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="fixed top-0 left-0 w-full z-[60] h-10 md:h-12 bg-[#1a1b1f] flex items-center justify-between shadow-md">
        {/* Left Orange Block */}
        <div
          className="h-full bg-[#F97316] flex items-center gap-2 sm:gap-8 pl-4 pr-6 sm:px-8 text-white text-[10px] sm:text-sm font-medium whitespace-nowrap shrink-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0% 100%)' }}
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Mail size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span className="inline">sales@arrtech.com</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <FileText size={14} />
            <span>Contact Us</span>
          </div>
        </div>

        {/* Right Info Block */}
        <div className="flex items-center justify-end px-3 sm:px-8 text-white/80 text-[10px] sm:text-xs md:text-sm whitespace-nowrap shrink overflow-hidden">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-sm sm:text-lg leading-none">🇮🇳</span>
            <span className="hidden lg:inline text-white/60">India</span> 
            <span>+91 9372209322</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav ref={navRef} className={`fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 ${isScrolled ? 'top-12 md:top-14' : 'top-14 md:top-16'}`}>
        <div
          className={`
            relative flex items-center justify-between 
            container mx-auto rounded-full
            px-6 py-3 md:py-4
            bg-white shadow-xl border border-slate-100
            transition-all duration-300
          `}
        >
          {/* Logo */}
          <Link href="/" className="z-50 relative flex-shrink-0" onClick={closeMenu}>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {MENU_ITEMS.map((item) => (
              <div key={item.name} className="relative px-2 py-2">
                <Link
                  href={item.path}
                  onClick={(e) => handleMenuClick(e, item)}
                  className={`text-sm lg:text-base font-semibold transition-colors flex items-center gap-1 ${activeDropdown === item.name || pathname === item.path ? 'text-[#F97316]' : 'text-slate-800 hover:text-[#F97316]'}`}
                >
                  {item.name}
                  {item.megaMenu && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </Link>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transition-transform origin-left duration-300 ${activeDropdown === item.name || pathname === item.path ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </div>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center gap-4 z-50 flex-shrink-0">
            <button
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#F97316]/10 flex items-center justify-center text-slate-600 hover:text-[#F97316] transition-all"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={18} />
            </button>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#F97316] hover:bg-[#ea580c] text-white font-bold text-sm tracking-wide shadow-md transition-all whitespace-nowrap"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-800 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mega Menu Dropdown */}
          {activeMenuItem?.megaMenu && (
            <div className="hidden md:block absolute top-full left-0 w-full mt-4 animate-fade-in-up z-40 origin-top">
              <div className="bg-white border border-slate-100 rounded-3xl shadow-2xl overflow-hidden p-8 mx-0">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45"></div>
                <div className="grid grid-cols-4 gap-8 relative z-10">
                  {activeMenuItem.megaMenu.map((category, idx) => (
                    <div key={idx} className="space-y-4">
                      <h4 className="text-[#F97316] font-bold text-base uppercase tracking-wider border-b border-slate-100 pb-2">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={subItem.path || activeMenuItem.path}
                              className="text-slate-600 hover:text-slate-900 text-base hover:translate-x-1 transition-all flex items-center gap-2 group py-1"
                              onClick={closeMenu}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA in Mega Menu */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center bg-slate-50 -mx-8 -mb-8 px-8 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316]">
                      <Shield size={20} />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">Need a custom security audit?</p>
                      <p className="text-slate-500 text-xs">Our experts can design a tailored solution for your facility.</p>
                    </div>
                  </div>
                  <Link href="/contact" onClick={closeMenu} className="group inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-black hover:bg-black/80 text-white font-bold text-sm shadow-md transition-all whitespace-nowrap">
                    Get in touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Overlay */}
          <div className={`
            md:hidden absolute top-full left-0 right-0 mt-4 p-4 bg-white border border-slate-100 rounded-3xl shadow-2xl
            flex flex-col gap-2 transform transition-all duration-300 origin-top
            ${mobileMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}
          `}>
            <div className="max-h-[60vh] overflow-y-auto">
              {MENU_ITEMS.map((item) => (
                <div key={item.name} className="border-b border-slate-100 last:border-0">
                  <div className="flex justify-between items-center">
                    <Link
                      href={item.path}
                      className={`p-3 font-medium transition-colors block flex-grow ${pathname === item.path ? 'text-[#F97316]' : 'text-slate-800 hover:text-[#F97316]'}`}
                      onClick={(e) => {
                        if (item.megaMenu) {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.megaMenu && (
                      <button onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)} className="p-3 text-slate-500">
                        <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <div className="bg-slate-50 p-4 space-y-6 animate-fade-in-up rounded-2xl my-2">
                      {item.megaMenu.map((cat, idx) => (
                        <div key={idx}>
                          <h5 className="text-[#F97316] text-xs font-bold uppercase mb-2">{cat.title}</h5>
                          <ul className="space-y-2 border-l-2 border-slate-200 pl-3">
                            {cat.items.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <Link href={sub.path || item.path} className="text-slate-600 text-sm block py-2 active:text-slate-900" onClick={() => setMobileMenuOpen(false)}>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="w-full mt-4 py-3 rounded-full bg-[#F97316] hover:bg-[#ea580c] text-white font-bold text-center shadow-md flex items-center justify-center gap-2 text-sm group"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              className="w-full py-3 rounded-full bg-slate-100 hover:bg-[#F97316]/10 flex items-center justify-center text-slate-600 hover:text-[#F97316] transition-all gap-2"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
            >
              <Search size={18} />
              <span className="font-medium">Search</span>
            </button>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
