"use client";

import React from "react";
import { 
  Target, 
  Eye, 
  Compass, 
  ShieldCheck, 
  Award, 
  Trophy,
  Sparkles,
  ArrowRight
} from "lucide-react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- 1. HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <Compass className="w-4 h-4" />
            Our Strategic Purpose
          </div>
          
          {/* HEADING: 3xl Mobile, 5xl Desktop */}
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase italic">
            Defining the <span className="text-[#4c1d95]">Future</span> <br className="hidden sm:block" />
            of Indian Chess
          </h2>
          
          <p className="text-slate-500 text-base md:text-xl font-medium max-w-2xl mx-auto px-2">
            Under the guidance of FIDE National Instructor Mandula Rajeev, we define 
            clear pathways for the thinkers of tomorrow.
          </p>
        </div>

        {/* --- 2. MISSION & VISION DUAL CARDS --- */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* --- THE MISSION CARD --- */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-purple-100 rounded-[2.5rem] md:rounded-[3.5rem] opacity-0 group-hover:opacity-50 transition duration-500 blur-xl"></div>
            <div className="relative bg-[#4c1d95] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden h-full flex flex-col shadow-2xl">
              
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 space-y-6 md:space-y-8 flex-grow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20">
                   <Target className="w-6 h-6 md:w-8 md:h-8 text-[#fcf6ba]" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter">Our Mission</h3>
                  <p className="text-purple-100 text-base md:text-xl leading-relaxed font-medium">
                    To provide world-class, FIDE-standard chess mentorship that transforms 
                    analytical potential into professional success. We aim to foster the 
                    discipline and strategic resilience required to compete in the 
                    International arena.
                  </p>
                </div>

                <ul className="space-y-4 pt-6 md:pt-8 border-t border-white/10">
                   {[
                     "Precision-led FIDE Standard Training",
                     "Character Building & Mental Fortitude",
                     "Tournament-ready Psychological Prep"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start md:items-center gap-3 text-purple-200 font-bold text-[11px] md:text-sm uppercase tracking-wide">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#bf953f] shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
              </div>
            </div>
          </div>

          {/* --- THE VISION CARD --- */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-amber-100 rounded-[2.5rem] md:rounded-[3.5rem] opacity-0 group-hover:opacity-50 transition duration-500 blur-xl"></div>
            <div className="relative bg-slate-50 border border-slate-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden h-full flex flex-col shadow-xl">
              
              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 border-t-2 border-r-2 border-[#bf953f]/10 rounded-tr-[3rem] md:rounded-tr-[5rem]"></div>
              
              <div className="relative z-10 space-y-6 md:space-y-8 flex-grow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4c1d95] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                   <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#bf953f]" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter">Our Vision</h3>
                  <p className="text-slate-500 text-base md:text-xl leading-relaxed font-medium">
                    To establish Vijayawada as a global epicenter for chess excellence, 
                    producing the next generation of International Grandmasters who lead 
                    with integrity and strategic foresight on the world stage.
                  </p>
                </div>

                <ul className="space-y-4 pt-6 md:pt-8 border-t border-slate-200">
                   {[
                     "Producing 500+ FIDE Rated Champions",
                     "State-of-the-art Strategic Research",
                     "A Global Network of Elite Strategists"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start md:items-center gap-3 text-slate-600 font-bold text-[11px] md:text-sm uppercase tracking-wide">
                        <Award className="w-4 h-4 md:w-5 md:h-5 text-[#4c1d95] shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. CORE VALUES BAR --- */}
        <div className="mt-8 md:mt-16 bg-[#050a18] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
           {/* Gold Accent */}
           <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-[#bf953f] to-transparent"></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left space-y-1">
                 <h4 className="text-[#bf953f] font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">The Rajeev Philosophy</h4>
                 <p className="text-white text-xl md:text-2xl font-black italic uppercase tracking-tighter">Focus • Foresight • Fortitude</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                 {[
                   { label: "Integrity", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
                   { label: "Excellence", icon: <Trophy className="w-3.5 h-3.5" /> },
                   { label: "Innovation", icon: <Sparkles className="w-3.5 h-3.5" /> }
                 ].map((value, idx) => (
                   <div key={idx} className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap">
                      <span className="text-[#bf953f]">{value.icon}</span>
                      {value.label}
                   </div>
                 ))}
              </div>

              <button className="group flex items-center gap-2 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] border-b border-[#bf953f] pb-1 hover:text-[#bf953f] transition-all">
                Learn our Legacy <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;