"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Trophy, 
  Star, 
  Globe,
  Medal,
  Crown,
  BookOpen,
  Award,
  Users
} from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  const goldGradient = "from-[#bf953f] via-[#d4af37] to-[#b38728]";
  const purpleGradient = "from-[#2e1065] to-[#4c1d95]";

  return (
    <section className="relative min-h-screen bg-[#fafafa] flex items-center pt-12 pb-16 lg:pt-25 lg:pb-12 overflow-hidden font-sans">
      
      {/* --- ELITE BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4c1d95 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[700px] h-[700px] bg-purple-100/50 rounded-full blur-[140px] filter opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-amber-50/60 rounded-full blur-[120px] filter opacity-70 pointer-events-none"></div>

      <div className={`container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* --- TOP BRANDING BADGE --- */}
        <div className="flex justify-center lg:justify-start mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-purple-100 shadow-xl shadow-purple-900/5 text-purple-900 font-bold text-xs md:text-sm tracking-wide">
            <div className="flex items-center gap-1.5 border-r border-purple-100 pr-3 mr-1">
              <Globe size={16} className="text-purple-600" />
              <span>FIDE ID: 46600507</span>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-amber-600">
              International Rated Player (1829)
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT CONTENT: THE ACADEMY PROFILE --- */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="space-y-4">
               <h2 className="text-purple-700 font-black tracking-[0.2em] uppercase text-sm md:text-base">
                 Led by National Instructor Mandula Rajeev
               </h2>
               <h1 className="text-3xl sm:text-5xl lg:text-4rem] font-black text-slate-900 leading-[0.95] tracking-tight">
                 Elevate Your Game with <br/>
                 <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient}`}>World Class</span> Coaching
               </h1>
            </div>

            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Founded by a <span className="text-purple-800 font-bold">FIDE Arbiter</span> & <span className="text-purple-800 font-bold">National Instructor</span> with 18+ years of legacy coaching at Andhra Loyola, DPS, and 1000+ tournaments.
            </p>

            {/* STRATEGIC STATS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
               {[
                 { label: "Experience", val: "18+ Yrs", icon: Award },
                 { label: "Tournaments", val: "1000+", icon: Trophy },
                 { label: "Title", val: "NI '22", icon: Crown },
                 { label: "Schools", val: "15+", icon: BookOpen },
               ].map((stat, idx) => (
                 <div key={idx} className="flex flex-col items-center lg:items-start p-4 rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow">
                   <stat.icon size={20} className="text-amber-500 mb-2" />
                   <span className="text-2xl font-black text-slate-900">{stat.val}</span>
                   <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{stat.label}</span>
                 </div>
               ))}
            </div>

            {/* CTA ACTION BLOCK */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start">
              <button 
                onClick={openDemoModal}
                className={`group relative px-12 py-6 rounded-2xl font-black text-lg tracking-widest uppercase transition-all duration-300 shadow-2xl shadow-purple-200 hover:shadow-purple-400 hover:-translate-y-1 bg-gradient-to-r ${purpleGradient} text-white flex items-center justify-center gap-3`}
              >
                Join the Academy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <a href="/curriculum" className="px-10 py-6 rounded-2xl font-black text-purple-900 bg-white border-2 border-purple-100 hover:border-purple-200 hover:bg-purple-50 transition-all text-lg shadow-sm flex items-center justify-center">
                Our Achievement
              </a>
            </div>

            {/* INSTITUTIONAL TRUST MARQUEE TEXT */}
            <div className="pt-8 border-t border-slate-200/60">
               <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Official Coach For Premier Institutions</p>
               <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <span className="font-black text-slate-900 text-sm italic">Andhra Loyola</span>
                  <span className="font-black text-slate-900 text-sm italic">Delhi Public School</span>
                  <span className="font-black text-slate-900 text-sm italic">NTR Health University</span>
                  <span className="font-black text-slate-900 text-sm italic">St. Johns Schools</span>
               </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT: PRESTIGE VISUALS --- */}
          <div className={`lg:col-span-5 relative mt-12  lg:mt-0 transition-all duration-1000 delay-300 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            
            <div className="relative z-20">
              {/* Outer Golden Aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 via-purple-100 to-amber-200 rounded-[4rem] opacity-30 blur-2xl animate-pulse"></div>
              
              <div className="relative bottom-20 bg-white p-4 rounded-[4rem] shadow-[0_50px_100px_rgba(76,29,149,0.1)] border border-white overflow-hidden group">
                 <div className="relative h-[400px] sm:h-[450px] w-full rounded-[3.2rem] overflow-hidden">
                    <img 
                      src="20.jpeg" 
                      alt="Mandula Rajeev Chess Academy"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[2s]"
                    />
                    {/* Artistic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/60 via-transparent to-transparent"></div>
                 </div>

                 {/* FLOATING ACHIEVEMENT CARDS */}

              </div>
            </div>

            {/* Decorative Element: Rotating Background Sqaure */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[105%] border-2 border-purple-100/50 rounded-[5rem] rotate-6 -z-10 animate-[spin_20s_linear_infinite]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}