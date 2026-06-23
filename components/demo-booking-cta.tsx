"use client";

import React from "react";
import { ArrowRight, Trophy, Star, Sparkles } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

const DemoBookingCTA: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-12 md:py-20 bg-white font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- COMPACT PURPLE CONTAINER --- */}
        <div className="relative overflow-hidden bg-[#4c1d95] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-purple-900/40">
          
          {/* Subtle White Dotted Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.12] pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)', 
              backgroundSize: '25px 25px' 
            }}
          ></div>

          {/* Glowing Background Accents */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#bf953f]/20 rounded-full blur-[80px]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            
            {/* --- LEFT: DATA & HEADLINE --- */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#fcf6ba]" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-purple-100">
                  National Instructor NI '22
                </span>
              </div>
              
              {/* HEADING: 3xl Mobile, 5xl Desktop */}
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.15] md:leading-tight">
                Unlock the <span className="text-[#fcf6ba]">Grandmaster</span> <br className="hidden xl:block" />
                Potential in Your Child
              </h2>
              
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 md:gap-8 text-purple-100/80 text-sm font-bold italic">
                 <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 md:w-5 md:h-5 text-[#bf953f]" />
                    <span className="text-xs md:text-base">FIDE Rating 1829</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-[#bf953f] fill-current" />
                    <span className="text-xs md:text-base">1000+ Tournaments</span>
                 </div>
              </div>
            </div>

            {/* --- RIGHT: THE ACTION --- */}
            <div className="shrink-0 w-full lg:w-auto">
              <button 
                onClick={openDemoModal}
                className="group relative w-full lg:w-auto flex items-center justify-center gap-4 px-8 py-5 md:px-14 md:py-8 bg-white text-[#4c1d95] rounded-[1.5rem] md:rounded-[2rem] font-black text-base md:text-xl uppercase tracking-widest transition-all duration-500 hover:bg-[#fcf6ba] hover:-translate-y-2 shadow-2xl active:scale-95 overflow-hidden"
              >
                {/* Visual Glow Effect on Button Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                
                Book Free Demo
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
              </button>
              
              <p className="text-center mt-5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Online • Offline • FIDE Certified
              </p>
            </div>

          </div>

          {/* Corner Decorative Dots (hidden on small mobile to reduce clutter) */}
          <div className="hidden sm:grid absolute top-8 left-8 grid-cols-2 gap-2 opacity-20">
             {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default DemoBookingCTA;