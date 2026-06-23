"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, ArrowRightIcon } from "./ui/BannerIcon";
// 1. Import the hook
import { useDemoModal } from "@/context/DemoContext";

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 2. Initialize the modal trigger
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Achievement", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper to open modal and close mobile menu simultaneously
  const handleBookDemoClick = () => {
    setIsMobileMenuOpen(false);
    openDemoModal();
  };

  return (
    <header
      className={`fixed z-50 left-0 right-0 transition-all duration-500 ease-out ${
        scrolled
          ? "top-4 mx-4 xl:mx-auto max-w-[90rem] rounded-2xl bg-white/90 backdrop-blur-xl shadow-lg border border-white/70"
          : "top-0 bg-transparent"
      }`}
    >
      <div className={`px-6 md:px-8 ${scrolled ? "" : "max-w-[90rem] mx-auto"}`}>
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo & Title */}
          <a href="/" className="flex items-center gap-1 group shrink-0">
            <div
              className={`relative flex items-center justify-center transition-all duration-500 ${
                scrolled ? "w-10 h-10 md:w-12 md:h-12" : "w-14 h-14 md:w-16 md:h-16"
              }`}
            >
              <img
                src="/logo5.png"
                alt="Rajeev International Chess Club"
                className="w-[85%] h-[85%] object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className={`font-black text-[#1a1a4b] tracking-tighter uppercase transition-all duration-500 ${
                  scrolled ? "text-base" : "text-lg md:text-lg"
                }`}
              >
                Rajeev International
              </span>
              <span
                className={`font-bold text-purple-600 transition-all duration-500 ${
                  scrolled ? "text-[10px]" : "text-xs"
                }`}
              >
                CHESS CLUB
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill */}
          <nav className="hidden xl:flex items-center bg-white/80 backdrop-blur-md rounded-full border border-gray-100 shadow-sm px-2 py-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#1a1a4b] hover:bg-white rounded-full transition-all duration-300 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Desktop Button - Connected to Modal */}
            <button
              onClick={openDemoModal}
              className={`hidden lg:flex items-center gap-2 bg-[#1a1a4b] hover:bg-purple-700 text-white font-semibold rounded-2xl transition-all active:scale-95 ${
                scrolled ? "px-6 py-2.5 text-sm" : "px-8 py-3 text-base"
              }`}
            >
              Book a Demo
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-3 rounded-2xl transition-all ${
                isMobileMenuOpen
                  ? "bg-red-50 text-red-600"
                  : "bg-gray-100 hover:bg-gray-200 text-[#1a1a4b]"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute left-0 right-0 mx-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "top-[calc(100%+16px)] opacity-100 max-h-[85vh]"
            : "top-0 opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <div className="p-3 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-between px-6 py-4 rounded-2xl text-[#1a1a4b] font-semibold hover:bg-purple-50 active:bg-purple-100 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <ArrowRightIcon className="w-4 h-4 text-purple-600" />
              </div>
            </a>
          ))}

          {/* Mobile CTA - Connected to Modal */}
          <div className="pt-4 px-2">
            <button
              onClick={handleBookDemoClick}
              className="block w-full text-center py-4 bg-[#1a1a4b] text-white font-semibold rounded-2xl active:scale-95 transition-all"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;