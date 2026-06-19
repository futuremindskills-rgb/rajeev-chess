"use client";

import React from "react";
import { 
  Medal, 
  Crown, 
  ShieldCheck, 
  Star,
  Quote,
  Facebook,
  Instagram,
  CheckCircle2,
  Award
} from "lucide-react";

const FounderSection: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#fcf6ba] to-[#b38728]";

  return (
    <section className="py-16 md:py-20 bg-[#fafafa] overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: BALANCED PORTRAIT --- */}
          <div className="lg:col-span-5 relative">
            <div className="relative group max-w-[500px] mx-auto lg:mx-0">
              {/* Luxury Aura Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#bf953f] to-[#4c1d95] rounded-[3.5rem] opacity-15 blur-2xl group-hover:opacity-25 transition duration-1000"></div>
              
              <div className="relative bg-white p-3.5 rounded-[3.5rem] border border-white shadow-2xl overflow-hidden">
                <div className="relative h-[500px] md:h-[580px] overflow-hidden rounded-[2.8rem]">
                    <img 
                      src="/32.jpeg" 
                      alt="Mandula Rajeev"
                      className="w-full h-full object-cover hover:grayscale-0 transition-all duration-[1.2s] scale-105 group-hover:scale-100"
                    />
                </div>
                
                {/* Prestige Rating Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-[2rem] shadow-xl border border-purple-50 flex flex-col items-center">
                   <Star className="text-[#bf953f] fill-[#bf953f] mb-1" size={20} />
                   <p className="text-2xl font-black text-slate-900 italic">1829</p>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">FIDE Rated</p>
                </div>

                {/* Experience Bar */}
                <div className="absolute bottom-8 left-8 right-8 bg-[#050a18]/95 backdrop-blur-xl p-5 rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-2xl">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#bf953f] to-[#b38728] rounded-2xl flex items-center justify-center text-[#050a18]">
                         <Crown size={24} />
                      </div>
                      <div>
                         <p className="text-white font-black text-lg leading-none uppercase italic">18+ Years</p>
                         <p className="text-[#bf953f] text-[10px] font-black uppercase tracking-widest mt-1">Coaching Legacy</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#bf953f] hover:text-[#050a18] transition-all">
                        <Facebook size={16}/>
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#bf953f] hover:text-[#050a18] transition-all">
                        <Instagram size={16}/>
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Header Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#4c1d95] font-black uppercase tracking-[0.4em] text-xs">
                <ShieldCheck size={18} strokeWidth={2.5} />
                <span>Founding Visionary</span>
              </div>

              {/* Fix for V cutting: overflow-visible + pr-10 */}
              <h2 className="text-4xl md:text-6xl font-black leading-[0.85] tracking-tighter uppercase italic overflow-visible pr-10 pb-1">
                <span className="text-[#0f172a]">MANDULA</span> {" "}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient} drop-shadow-sm`}>
                  RAJEEV
                </span>
              </h2>

              <div className="flex items-center gap-5">
                <div className="w-[5px] h-10 bg-gradient-to-b from-[#bf953f] to-[#b38728] rounded-full"></div>
                <h3 className="text-xl md:text-3xl font-bold text-[#5c728a] uppercase tracking-wider">
                  National Instructor <span className="text-[#bf953f]">&</span> FIDE Arbiter
                </h3>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="relative p-8 md:p-10 bg-white rounded-[3rem] border border-purple-50 shadow-[0_20px_50px_rgba(76,29,149,0.04)]">
               <Quote className="absolute top-6 right-10 text-[#4c1d95]/5" size={80} />
               <p className="text-slate-600 text-xl md:text-2xl leading-relaxed italic font-medium relative z-10">
                 "I build strategic resilience in young thinkers to create leaders on and off the board."
               </p>
            </div>

            {/* Credentials Row */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <p className="text-[#4c1d95] font-black text-[11px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <Medal size={14} className="text-[#bf953f]" /> Leadership
                  </p>
                  <ul className="space-y-3">
                    {["Joint Sec, Andhra Chess Assoc.", "Sec, NTR District Chess Association"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-500 font-bold text-xs md:text-sm uppercase italic">
                         <CheckCircle2 size={16} className="text-[#bf953f] shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="space-y-4">
                  <p className="text-[#bf953f] font-black text-[11px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <Award size={14} className="text-[#4c1d95]" /> Elite Title
                  </p>
                  <ul className="space-y-3">
                    {["NI Title Awarded 2022", "Directed 1000+ Tournaments"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-500 font-bold text-xs md:text-sm uppercase italic">
                         <CheckCircle2 size={16} className="text-[#4c1d95] shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* Institutional Footer */}
            <div className="pt-8 border-t border-slate-200">
               <div className="flex flex-wrap gap-x-12 gap-y-4 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                  {["ANDHRA LOYOLA", "DELHI PUBLIC SCHOOL", "NTR UNIVERSITY", "SIDDHARTHA COLLEGE"].map((school) => (
                    <span key={school} className="text-[#0f172a] font-black text-sm italic tracking-tighter">{school}</span>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;