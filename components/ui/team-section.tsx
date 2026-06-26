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
    <section className="py-16 md:py-24 bg-[#fafafa] overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: PORTRAIT --- */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative group max-w-[500px] mx-auto lg:mx-0">
              {/* Luxury Aura Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#bf953f] to-[#4c1d95] rounded-[3.5rem] opacity-15 blur-2xl group-hover:opacity-25 transition duration-1000"></div>
              
              <div className="relative bg-white p-2.5 md:p-3.5 rounded-[3rem] md:rounded-[3.5rem] border border-white shadow-2xl overflow-hidden">
                <div className="relative h-[420px] sm:h-[500px] md:h-[580px] overflow-hidden rounded-[2.4rem] md:rounded-[2.8rem]">
                    <img 
                      src="/32.jpeg" 
                      alt="Mandula Rajeev"
                      className="w-full h-full object-cover hover:grayscale-0 transition-all duration-[1.2s] scale-105 group-hover:scale-100"
                    />
                </div>
                
                {/* Prestige Rating Badge - Scaled for mobile */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-purple-50 flex flex-col items-center">
                   <Star className="text-[#bf953f] fill-[#bf953f] mb-1 w-4 h-4 md:w-5 md:h-5" />
                   <p className="text-xl md:text-2xl font-black text-slate-900 italic">1829</p>
                   <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">FIDE Rated</p>
                </div>

                {/* Experience Bar - Responsive padding and layout */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-[#050a18]/95 backdrop-blur-xl p-4 md:p-5 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-2xl">
                   <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#bf953f] to-[#b38728] rounded-xl md:rounded-2xl flex items-center justify-center text-[#050a18]">
                         <Crown className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                         <p className="text-white font-black text-base md:text-lg leading-none uppercase italic">21+ Years</p>
                         <p className="text-[#bf953f] text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1">Coaching Legacy</p>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#bf953f] hover:text-[#050a18] transition-all">
                        <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#bf953f] hover:text-[#050a18] transition-all">
                        <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 order-1 lg:order-2">
            
            {/* Header Block */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 text-[#4c1d95] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                <span>Founding Visionary</span>
              </div>

              {/* HEADING: 3xl Mobile, 6xl Desktop */}
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-black leading-[1.1] md:leading-[0.85] tracking-tighter uppercase italic overflow-visible lg:pr-10 pb-1">
                <span className="text-[#0f172a]">MANDULA</span> {" "}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient} drop-shadow-sm inline-block`}>
                  RAJEEV
                </span>
              </h2>

              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-5">
                <div className="w-[4px] md:w-[5px] h-8 md:h-10 bg-gradient-to-b from-[#bf953f] to-[#b38728] rounded-full shrink-0"></div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#5c728a] uppercase tracking-wider leading-tight">
                  National Instructor <span className="text-[#bf953f]">&</span> FIDE Arbiter
                </h3>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="relative p-7 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3rem] border border-purple-50 shadow-[0_20px_50px_rgba(76,29,149,0.04)]">
               <Quote className="absolute top-4 right-6 md:top-6 md:right-10 text-[#4c1d95]/5 w-12 h-12 md:w-20 md:h-20" />
               <p className="text-slate-600 text-lg md:text-xl lg:text-2xl leading-relaxed italic font-medium relative z-10 text-center lg:text-left">
                 "I build strategic resilience in young thinkers to create leaders on and off the board."
               </p>
            </div>

            {/* Credentials Row */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
               <div className="space-y-4">
                  <p className="text-[#4c1d95] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-2 flex items-center justify-center lg:justify-start gap-2">
                    <Medal className="text-[#bf953f] w-3.5 h-3.5" /> Leadership
                  </p>
                  <ul className="space-y-3">
                    {["Joint Sec, Andhra Chess Assoc.", "Sec, NTR District Chess Association"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-500 font-bold text-xs md:text-sm uppercase italic justify-center lg:justify-start">
                         <CheckCircle2 className="text-[#bf953f] shrink-0 w-4 h-4" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="space-y-4">
                  <p className="text-[#bf953f] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-2 flex items-center justify-center lg:justify-start gap-2">
                    <Award className="text-[#4c1d95] w-3.5 h-3.5" /> Elite Title
                  </p>
                  <ul className="space-y-3">
                    {["NI Title Awarded 2022", "Directed 1000+ Tournaments"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-500 font-bold text-xs md:text-sm uppercase italic justify-center lg:justify-start">
                         <CheckCircle2 className="text-[#4c1d95] shrink-0 w-4 h-4" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* Institutional Footer */}
            <div className="pt-8 border-t border-slate-200">
               <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 lg:gap-x-12 gap-y-4 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                  {["ANDHRA LOYOLA", "DELHI PUBLIC SCHOOL", "NTR UNIVERSITY", "SIDDHARTHA COLLEGE"].map((school) => (
                    <span key={school} className="text-[#0f172a] font-black text-[10px] md:text-sm italic tracking-tighter">{school}</span>
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