"use client";

import React from "react";
import { ArrowRight, Trophy, Star, Sparkles } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

const DemoBookingCTA: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- COMPACT PURPLE CONTAINER --- */}
        <div className="relative overflow-hidden bg-[#4c1d95] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-14 shadow-2xl shadow-purple-900/40">
          
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

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* --- LEFT: DATA & HEADLINE --- */}
            <div className="flex-1 text-center lg:text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <Sparkles size={14} className="text-[#fcf6ba]" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-purple-100">
                  National Instructor NI '22
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Unlock the <span className="text-[#fcf6ba]">Grandmaster</span> <br className="hidden xl:block" />
                Potential in Your Child
              </h2>
              
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-purple-100/80 text-sm font-bold italic">
                 <div className="flex items-center gap-2">
                    <Trophy size={18} className="text-[#bf953f]" />
                    <span>FIDE Rating 1829</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Star size={18} className="text-[#bf953f]" fill="currentColor" />
                    <span>1000+ Tournaments</span>
                 </div>
              </div>
            </div>

            {/* --- RIGHT: THE COMPACT ACTION --- */}
            <div className="shrink-0 w-full lg:w-auto">
              <button 
                onClick={openDemoModal}
                className="group relative w-full lg:w-auto flex items-center justify-center gap-4 px-10 py-6 md:px-14 md:py-8 bg-white text-[#4c1d95] rounded-3xl font-black text-lg md:text-xl uppercase tracking-widest transition-all duration-500 hover:bg-[#fcf6ba] hover:-translate-y-2 shadow-2xl active:scale-95 overflow-hidden"
              >
                {/* Visual Glow Effect on Button Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                
                Book Free Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
              </button>
              
              <p className="text-center mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Online • Offline • FIDE Certified
              </p>
            </div>

          </div>

          {/* Corner Decorative Dots */}
          <div className="absolute top-6 left-6 grid grid-cols-2 gap-2 opacity-20">
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