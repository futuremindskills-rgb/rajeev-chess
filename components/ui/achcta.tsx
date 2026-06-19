"use client";

import React from "react";
import { ArrowRight, Trophy, Crown, Sparkles } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

const CompactAchievementCTA: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const goldGradient = "from-[#bf953f] via-[#fcf6ba] to-[#b38728]";

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- COMPACT PRESTIGE BOX --- */}
        <div className="relative overflow-hidden bg-[#050a18] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-white/5">
          
          {/* Subtle Background Ambience */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#bf953f]/5 rounded-full blur-[80px] -z-0"></div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* --- LEFT: TEXT CONTENT --- */}
            <div className="max-w-2xl text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Sparkles size={14} className="text-[#bf953f]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-200">
                  Join the elite 1%
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic tracking-tighter">
                Be Our Next <br className="hidden md:block" />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient}`}>Rated Champion</span>
              </h2>
              
              <p className="text-blue-100/60 text-base md:text-lg font-medium leading-relaxed">
                Mentorship by National Instructor <span className="text-white font-bold">Mandula Rajeev</span>. 
                Start your journey from the Vijayawada center or via elite online batches.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2">
                 <div className="flex items-center gap-2 text-white/30 font-bold text-[10px] uppercase tracking-widest">
                    <Trophy size={16} className="text-[#bf953f]" />
                    <span>200+ Rated Students</span>
                 </div>
                 <div className="flex items-center gap-2 text-white/30 font-bold text-[10px] uppercase tracking-widest">
                    <Crown size={16} className="text-[#bf953f]" />
                    <span>FIDE Certified</span>
                 </div>
              </div>
            </div>

            {/* --- RIGHT: THE CTA ACTION --- */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col items-center gap-4">
              <button 
                onClick={openDemoModal}
                className={`group relative w-full lg:w-auto flex items-center justify-center gap-4 px-10 py-6 md:px-12 md:py-8 bg-gradient-to-r ${goldGradient} text-[#050a18] rounded-3xl font-black text-lg md:text-xl uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-[0_20px_40px_rgba(191,149,63,0.2)] active:scale-95`}
              >
                Book Free Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
              </button>
              
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                Limited Slots Available for 2024
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CompactAchievementCTA;