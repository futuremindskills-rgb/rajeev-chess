"use client";

import React from "react";
import { 
  Award, 
  History, 
  Sparkles, 
  Star,
  Quote,
  Medal
} from "lucide-react";

const PatronTribute: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#d4af37] to-[#b38728]";

  return (
    <section className="py-16 md:py-24 bg-[#fafafa] overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">
          
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          {/* order-2 lg:order-1 moves text below images on mobile for better visual flow */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <Sparkles className="w-4 h-4" />
                Blessings & Inspiration
              </div>

              {/* HEADING: 3xl Mobile, 5xl Desktop */}
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] md:leading-[1.05] tracking-tight uppercase italic">
                Shri <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient}`}>Bharat Singh</span> <br className="hidden sm:block" />
                Chauhan Ji
              </h2>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                 <div className="hidden md:block h-px w-12 bg-[#4c1d95]"></div>
                 <p className="text-[#4c1d95] font-black text-xs md:text-sm uppercase tracking-widest italic">
                    Chairman, FIDE Advisory Board
                 </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="relative p-6 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] border border-purple-50 shadow-xl shadow-purple-900/5 group">
              <Quote className="absolute top-6 right-8 text-[#4c1d95]/5 w-12 h-12 md:w-20 md:h-20 transition-transform group-hover:scale-110" />
              <p className="text-slate-600 text-base md:text-xl font-medium leading-relaxed italic relative z-10 text-center lg:text-left">
                "Indian Chess stands tall on the world stage today thanks to the tireless vision of Shri Bharat Singh Chauhan Ji. His leadership has transformed the lives of thousands of players."
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed text-center lg:text-left px-2 md:px-0">
                As the visionary architect of the <strong>44th Chess Olympiad</strong>, his contributions have made India a global chess powerhouse. We seek his blessings in our mission to train future champions.
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                 {[
                   { label: "FIDE Advisory Chairman", icon: Award },
                   { label: "Chess Olympiad Architect", icon: History },
                   { label: "Former Secretary AICF", icon: Medal },
                   { label: "Global Chess Mentor", icon: Star }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-[#bf953f]/30 transition-colors">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#bf953f] shrink-0" />
                      <span className="text-[10px] md:text-xs font-black text-slate-700 uppercase tracking-tight">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: STAGGERED IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 px-4 md:px-0">
            {/* Aspect Ratio Container for Balance */}
            <div className="relative w-full max-w-[500px] lg:max-w-[550px] mx-auto aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              
              {/* Image 1: Main Portrait (Back) */}
              <div className="absolute top-0 left-0 w-[85%] h-[80%] z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#bf953f] to-transparent rounded-[2rem] md:rounded-[3.5rem] opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative h-full w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/1.jpeg" 
                    alt="Shri Bharat Singh Chauhan Ji"
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  {/* Subtle Gradient for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95]/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Image 2: Secondary Shot (Front Staggered) */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[50%] z-20 group">
                <div className="relative h-full w-full p-1.5 md:p-2.5 bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3">
                  <div className="h-full w-full rounded-[1rem] md:rounded-[2rem] overflow-hidden">
                    <img 
                      src="/14.jpeg" 
                      alt="Bharat Singh Ji at Event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Gold Badge */}
                  <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#bf953f] to-[#b38728] rounded-xl md:rounded-2xl flex items-center justify-center text-[#050a18] shadow-xl border-2 border-white">
                    <Star className="w-5 h-5 md:w-7 md:h-7 fill-current" />
                  </div>
                </div>
              </div>

              {/* Decorative Background Frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[95%] border-2 border-purple-100/50 rounded-[3rem] md:rounded-[5rem] -z-10 rotate-2 hidden sm:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PatronTribute;