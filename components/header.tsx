"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, ArrowRightIcon } from "./ui/BannerIcon";
import { useDemoModal } from "@/context/DemoContext";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Branches", href: "/contact/#branches" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Achievement", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const handleBookDemoClick = () => {
    setIsMobileMenuOpen(false);
    openDemoModal();
  };

  return (
    <header
      className={`fixed z-50 left-0 right-0 transition-all duration-500 ease-in-out ${
        scrolled
          ? "top-2 md:top-4 mx-2 md:mx-4 xl:mx-auto max-w-[92rem] rounded-2xl md:rounded-[2rem] bg-white/95 backdrop-blur-xl shadow-2xl border border-white/50"
          : "top-0 bg-transparent"
      }`}
    >
      <div className={`px-4 md:px-8 lg:px-10 ${scrolled ? "" : "max-w-[104rem] mx-auto"}`}>
        {/* Adjusted Height: h-20 on mobile, h-24 on desktop when not scrolled */}
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
        }`}>
          
          {/* --- LOGO SECTION --- */}
          <a href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div
              className={`relative flex items-center justify-center transition-all duration-500 ${
                // Increased Logo Sizes
                scrolled ? "w-12 h-12 md:w-14" : "w-16 h-16 md:w-20 md:h-20"
              }`}
            >
              <img
                src="/logo5.png"
                alt="Rajeev International Chess Club"
                className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span
                className={`font-black text-[#1a1a4b] tracking-tighter uppercase transition-all duration-500 ${
                  scrolled ? "text-sm md:text-base" : "text-base md:text-xl"
                }`}
              >
                Rajeev International
              </span>
              <span
                className={`font-extrabold text-purple-600 transition-all duration-500 tracking-widest ${
                  scrolled ? "text-[9px] md:text-[10px]" : "text-[10px] md:text-xs"
                }`}
              >
                CHESS CLUB
              </span>
            </div>
          </a>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden xl:flex items-center bg-gray-50/50 hover:bg-white backdrop-blur-md rounded-full border border-gray-100 shadow-sm px-2 py-1 absolute left-1/2 -translate-x-1/2 transition-all">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2.5 text-sm font-bold text-gray-600 hover:text-[#1a1a4b] hover:bg-white rounded-full transition-all duration-300 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* --- ACTION AREA --- */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop CTA */}
            <button
              onClick={openDemoModal}
              className={`hidden lg:flex items-center gap-2 bg-[#1a1a4b] hover:bg-purple-700 text-white font-bold rounded-xl md:rounded-2xl shadow-lg shadow-purple-900/20 transition-all active:scale-95 ${
                scrolled ? "px-6 py-2.5 text-sm" : "px-8 py-3.5 text-base"
              }`}
            >
              Book a Demo
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-3 rounded-xl md:rounded-2xl transition-all shadow-sm ${
                isMobileMenuOpen
                  ? "bg-red-50 text-red-600 rotate-90"
                  : scrolled ? "bg-gray-100 text-[#1a1a4b]" : "bg-white/20 text-black backdrop-blur-md border border-white/30"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6 md:w-7 md:h-7" /> : <MenuIcon className="w-6 h-6 md:w-7 md:h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <div
        className={`xl:hidden absolute left-0 right-0 mx-2 md:mx-4 bg-white/98 backdrop-blur-3xl rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen
            ? "top-[calc(100%+12px)] opacity-100 translate-y-0"
            : "top-[-20px] opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[#1a1a4b] font-bold text-lg hover:bg-purple-50 active:bg-purple-100 transition-all ${
                isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
                <ArrowRightIcon className="w-5 h-5 text-purple-600" />
              </div>
            </a>
          ))}

          <div className="pt-6 pb-2 px-2">
            <button
              onClick={handleBookDemoClick}
              className="block w-full text-center py-5 bg-[#1a1a4b] text-white font-black text-lg uppercase tracking-widest rounded-2xl shadow-xl shadow-purple-900/20 active:scale-95 transition-all"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;