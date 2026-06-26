"use client";

import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Trophy,
  MapPin,
  Star,
  Moon,
  ChevronRight,
  ShieldCheck,
  Clock
} from "lucide-react";

export default function Footer() {
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

  const branches = [
    {
      name: "Yes-J Center",
      time: "06:00 AM - 07:30 AM",
      days: "Daily Morning Batch",
    },
    {
      name: "Popular Center",
      time: "04:00 PM - 05:25 PM",
      days: "Monday to Thursday",
    },
    {
      name: "Birla Open Minds",
      time: "Weekend Special",
      days: "Saturday & Sundays",
    },
    {
      name: "Fun Times Club",
      time: "05:30 PM - 08:00 PM",
      days: "Monday to Thursday",
    },
    {
      name: "Bhavanipuram & Ibrahimpatnam",
      time: "04:00 PM - 07:30 PM",
      days: "Saturday & Sunday",
    },
  ];

  return (
    <footer className="relative bg-[#050a18] text-white overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-[400px] md:h-[400px] bg-[#bf953f]/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-12 max-w-[90rem]">
        
        {/* --- TOP SECTION: LINKS & BRAND --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4">
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#bf953f] to-[#b38728] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#0a1128] rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                     <Trophy className="text-[#bf953f] w-7 h-7 md:w-8 md:h-8" />
                  </div>
               </div>
               <div>
                  <h3 className="text-lg md:text-xl font-black text-white leading-none tracking-tight uppercase">Rajeev</h3>
                  <p className="text-[9px] md:text-[10px] font-black text-[#bf953f] tracking-[0.2em] uppercase mt-1">International Chess Club</p>
               </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of Grandmasters through FIDE-certified excellence and a legacy of 21+ years.
            </p>
            <div className="flex gap-4">
                {[Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#bf953f] hover:text-[#050a18] transition-all duration-300">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ))}
            </div>
          </div>

          <div className="sm:pl-4">
             <h4 className="text-xs md:text-sm font-black text-white uppercase tracking-[0.2em] mb-6 md:mb-8 flex items-center gap-2">
               <span className="w-6 h-[2px] bg-[#bf953f]"></span> Navigation
             </h4>
             <ul className="space-y-3 md:space-y-4">
                {usefulLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-[#bf953f] transition-all duration-300 text-sm font-bold">
                         <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          <div className="sm:pl-4">
             <h4 className="text-xs md:text-sm font-black text-white uppercase tracking-[0.2em] mb-6 md:mb-8 flex items-center gap-2">
               <span className="w-6 h-[2px] bg-purple-500"></span> Academy
             </h4>
             <ul className="space-y-3 md:space-y-4">
                {academyLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-all duration-300 text-sm font-bold">
                         <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          <div className="space-y-6 md:space-y-8">
             <h4 className="text-xs md:text-sm font-black text-white uppercase tracking-[0.2em] mb-6 md:mb-8 flex items-center gap-2">
               <span className="w-6 h-[2px] bg-blue-500"></span> Contact
             </h4>
             <div className="space-y-4">
               <a href="tel:+919030308811" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-[#050a18] transition-all shrink-0">
                     <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 text-sm font-bold">+91 90303 08811</span>
               </a>
               <a href="mailto:rajeevinternationalchessclub@gmail.com" className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-[#050a18] transition-all shrink-0">
                     <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 text-sm font-bold truncate max-w-[180px] sm:max-w-none">rajeevinternationalchessclub@gmail.com</span>
               </a>
             </div>
          </div>
        </div>

        {/* --- BRANCHES & TIMINGS SECTION --- */}
        <div className="pt-12 border-t border-white/5">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div className="space-y-1">
                <h4 className="text-sm md:text-base font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#bf953f]" /> Training Centers & Timings
                </h4>
                <p className="text-[10px] md:text-xs text-[#bf953f] font-bold uppercase tracking-widest pl-6">NTR District, Andhra Pradesh</p>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {branches.map((branch, idx) => (
                <div key={idx} className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl hover:bg-white/[0.06] transition-all group">
                   <h5 className="text-[#bf953f] font-black text-xs uppercase tracking-wider mb-3 leading-tight group-hover:text-white transition-colors">
                     {branch.name}
                   </h5>
                   <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-300">
                         <Clock className="w-3.5 h-3.5 text-purple-500" />
                         <span className="text-[11px] font-bold">{branch.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                         <ShieldCheck className="w-3.5 h-3.5" />
                         <span className="text-[10px] font-bold uppercase tracking-tighter">{branch.days}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="border-t border-white/5 bg-[#030712]">
        <div className="container mx-auto px-6 py-8 max-w-[90rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-slate-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                   © {new Date().getFullYear()} <span className="text-white">Rajeev International Chess Club</span>. All rights reserved.
                </p>
                <p className="text-[9px] md:text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
                    Designed by{" "}
                    <a href="https://wa.me/917851988964" target="_blank" rel="noopener noreferrer" className="text-[#bf953f] hover:text-white transition-colors">jinesh mehta</a>
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2 text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                    <ShieldCheck className="text-[#bf953f] w-3.5 h-3.5" />
                    FIDE Certified Academy
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
         className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 md:px-5 md:py-4 rounded-2xl shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-2 group"
      >
         <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" />
         <div className="flex flex-col">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter leading-none opacity-80">Chat with Coach</span>
            <span className="font-black text-xs md:text-sm">WhatsApp</span>
         </div>
      </a>
    </footer>
  );
}