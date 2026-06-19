"use client";

import React from "react";
import { BookOpen, Star, Trophy, Facebook, Instagram, Globe, Sparkles } from "lucide-react";

const CurriculumBanner: React.FC = () => {
  return (
    <section className="py-8 md:pt-7 md:pb-12 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- MAIN BANNER CONTAINER --- */}
        {/* Changed h-[400px] to h-auto for mobile and md:h-[540px] for desktop */}
        <div className="relative w-full h-auto md:h-[540px] bg-[#fafafa] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] flex flex-col md:flex-row border border-slate-100">
          
          {/* --- IMAGE SECTION --- */}
          <div className="relative w-full md:w-[60%] h-[280px] sm:h-[350px] md:h-full overflow-hidden">
            {/* The Signature Diagonal Clip Path (Desktop Only) */}
            <div 
              className="absolute inset-0 z-10 hidden md:block bg-[#fafafa]" 
              style={{ clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 72% 100%)' }}
            ></div>
            
            <img 
              src="/6.jpeg" 
              alt="Chess Strategy and Planning"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Soft Royal Purple Overlay */}
            <div className="absolute inset-0 bg-[#4c1d95]/10 mix-blend-multiply"></div>

            {/* Floating Syllabus Badge - Positioned responsively */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-10 z-20 bg-white/95 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3 md:gap-4">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4c1d95] rounded-lg md:rounded-xl flex items-center justify-center text-[#bf953f]">
                  <BookOpen size={18} />
               </div>
               <div>
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Structured Study</p>
                  <p className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-tight">4-Tier Excellence</p>
               </div>
            </div>
          </div>

          {/* --- CONTENT SECTION --- */}
          <div className="relative w-full md:w-[50%] md:-ml-[10%] bg-[#fafafa] z-20 flex flex-col justify-center p-6 sm:p-10 md:p-16">
            
            <div className="space-y-6 md:space-y-8">
              {/* Prestige Badge */}
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">
                <Sparkles size={14} className="shrink-0" />
                The Blueprint of Victory
              </div>

              {/* Main Heading - Fluid text sizing */}
              <div>
                <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[0.9] md:leading-[0.85] uppercase tracking-tighter">
                  ACADEMY <br />
                  <span className="text-[#4c1d95]">PATHWAY</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium max-w-sm md:max-w-md">
                A FIDE-certified curriculum spanning from <span className="text-slate-900 font-bold italic">Foundations</span> to <span className="text-slate-900 font-bold italic">Elite Mastery</span>. Built on 18+ years of coaching success.
              </p>

              {/* Bottom Footer Section: Socials & Rating */}
              <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-200">
                
                {/* Minimalist Round Social Icons */}
                <div className="flex gap-3">
                  {[Facebook, Instagram, Globe].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#4c1d95] hover:text-[#fcf6ba] transition-all shadow-lg active:scale-90"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>

                {/* Rating / Accreditation */}
                <div className="flex flex-col items-start sm:items-end">
                   <div className="flex text-[#bf953f] mb-1">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                     NI Certified Syllabus
                   </span>
                </div>
              </div>
            </div>

            {/* Subtle Dotted Decoration - Hidden on very small screens for clarity */}
            <div 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-16 md:w-24 md:h-24 opacity-10 pointer-events-none hidden sm:block" 
              style={{ backgroundImage: 'radial-gradient(#4c1d95 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
            ></div>
          </div>
        </div>

        {/* --- LOWER ACTION BAR: BATCH DETAILS --- */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <div className="bg-[#4c1d95] p-5 md:p-6 rounded-2xl md:rounded-[2rem] text-white flex items-center justify-between group cursor-default shadow-xl shadow-purple-900/10">
              <span className="font-black uppercase tracking-[0.2em] text-[10px] text-purple-200">National Instructor</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#bf953f] transition-colors">
                <Trophy size={14} className="text-white" />
              </div>
           </div>

           <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-2xl md:rounded-[2rem] text-slate-900 flex items-center justify-between">
              <span className="font-black uppercase tracking-[0.2em] text-[10px] text-[#bf953f]">Rating Prep: 1829 ELO</span>
              <div className="flex gap-1">
                <Star size={12} fill="#bf953f" className="text-[#bf953f]" />
                <Star size={12} fill="#bf953f" className="text-[#bf953f]" />
              </div>
           </div>

           {/* Mobile: Full width on small, 1 column on md */}
           <div className="bg-slate-900 p-5 md:p-6 rounded-2xl md:rounded-[2rem] text-white flex items-center justify-between sm:col-span-2 md:col-span-1">
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">Weekend & Weekday Batches</span>
              <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumBanner;