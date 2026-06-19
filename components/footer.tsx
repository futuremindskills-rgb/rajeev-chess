"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowUp,
  MessageCircle,
  Trophy,
  MapPin,
  Star,
  Moon,
  Cloud,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blogs" },
  ];

  const academyLinks = [
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book a Demo", href: "/bookdemo" },
  ];

  return (
    <footer className="relative bg-[#050a18] text-white overflow-hidden font-sans border-t border-white/5">
      
      {/* =======================
          BACKGROUND DECORATION 
         ======================= */}
      
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#bf953f]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Twinkling Stars Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Star size={10} className="absolute top-20 left-[15%] text-white animate-pulse" fill="currentColor" />
        <Star size={6} className="absolute top-40 right-[25%] text-[#bf953f] animate-pulse delay-700" fill="currentColor" />
        <Star size={14} className="absolute bottom-32 left-[40%] text-white animate-pulse delay-300" fill="currentColor" />
        <Moon size={40} className="absolute top-20 right-20 text-white/5 rotate-12" fill="currentColor" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20 pb-12 max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* --- BRAND SECTION --- */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#bf953f] to-[#b38728] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-16 h-16 bg-[#0a1128] rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                     <Trophy className="text-[#bf953f] w-8 h-8" />
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-black text-white leading-none tracking-tight">RAJEEV</h3>
                  <p className="text-[10px] font-black text-[#bf953f] tracking-[0.2em] uppercase mt-1">International Chess Club</p>
               </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of Grandmasters through FIDE-certified excellence and a legacy of 18+ years in strategic coaching.
            </p>

            <div className="flex gap-4">
                {[Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#bf953f] hover:text-[#050a18] transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
            </div>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
             <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
               <span className="w-6 h-[2px] bg-[#bf953f]"></span>
               Navigation
             </h4>
             <ul className="space-y-4">
                {usefulLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-[#bf953f] transition-all duration-300 text-sm font-bold">
                         <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* --- ACADEMY LINKS --- */}
          <div>
             <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
               <span className="w-6 h-[2px] bg-purple-500"></span>
               Academy
             </h4>
             <ul className="space-y-4">
                {academyLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-all duration-300 text-sm font-bold">
                         <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* --- CONTACT & ADDRESS --- */}
          <div className="space-y-8">
             <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
               <span className="w-6 h-[2px] bg-blue-500"></span>
               Contact
             </h4>
             
             <div className="space-y-4">
               <a href="tel:+919030308811" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-[#050a18] transition-all">
                     <Phone size={16} />
                  </div>
                  <span className="text-slate-300 text-sm font-bold group-hover:text-white transition-colors">+91 90303 08811</span>
               </a>
               <a href="mailto:rajeevinternationalchessclub@gmail.com" className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-[#050a18] transition-all">
                     <Mail size={16} />
                  </div>
                  <span className="text-slate-300 text-sm font-bold break-all group-hover:text-white transition-colors">rajeevinternationalchessclub@gmail.com</span>
               </a>
             </div>
             
             <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <MapPin className="text-[#bf953f] shrink-0 mt-1" size={20} />
                <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-black text-white block mb-1 uppercase tracking-wider">Vijayawada Center</span>
                    Yes-J Centre, Loyola College, <br />
                    Beside Kaladarshini, JP Nagar, <br />
                    Vijayawada, AP 520008
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* =======================
          BOTTOM BAR 
         ======================= */}
      <div className="border-t border-white/5 bg-[#030712]">
        <div className="container mx-auto px-6 py-8 max-w-[90rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">
                   © {new Date().getFullYear()} <span className="text-white">Rajeev International Chess Club</span>. All rights reserved.
                </p>
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
                    Designed by{" "}
                    <a 
                        href="https://wa.me/917851988964" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#bf953f] hover:text-white transition-colors"
                    >
                        jinesh mehta
                    </a>
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-[#bf953f]" />
                    FIDE Certified Academy
                  </div>
                  <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
                  <div className="flex gap-6 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                     <a href="#" className="hover:text-white transition-colors">Privacy</a>
                     <a href="#" className="hover:text-white transition-colors">Terms</a>
                  </div>
              </div>
            </div>
        </div>
      </div>

      {/* WhatsApp Floating Action */}
      <a
         href="https://wa.me/919030308811"
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-2xl shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-2 group"
      >
         <MessageCircle size={24} fill="currentColor" className="text-white" />
         <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-tighter leading-none opacity-80">Chat with Coach</span>
            <span className="font-black text-sm">WhatsApp</span>
         </div>
      </a>


    </footer>
  );
}