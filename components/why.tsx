"use client";

import React from "react";
import { 
  Brain, 
  Target, 
  Focus, 
  Zap, 
  Trophy, 
  ShieldCheck, 
  Plus 
} from "lucide-react";

const WhyChessMatters: React.FC = () => {
  const points = [
    {
      title: "Critical Thinking",
      desc: "Analyzing complex patterns and anticipating opponent moves with precision.",
      icon: Brain,
    },
    {
      title: "Problem Solving",
      desc: "Navigating difficult board states and finding creative tactical solutions.",
      icon: Target,
    },
    {
      title: "Concentration",
      desc: "Developing the mental stamina required for high-stakes tournament play.",
      icon: Focus,
    },
    {
      title: "Decision Making",
      desc: "Learning to calculate risks and execute the best move under time pressure.",
      icon: Zap,
    },
    {
      title: "Confidence Building",
      desc: "Believing in one’s own strategic calculations and competitive abilities.",
      icon: ShieldCheck,
    },
    {
      title: "Competitive Spirit",
      desc: "Fostering resilience, sportsmanship, and the inner drive to achieve victory.",
      icon: Trophy,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          
          {/* --- LEFT SIDE: THE ASYMMETRICAL IMAGE --- */}
          <div className="w-full lg:w-[45%] relative group px-4 md:px-0">
            {/* The signature shape: Adjusted border radius for mobile */}
            <div className="relative h-[380px] sm:h-[500px] md:h-[650px] w-full rounded-t-[4rem] md:rounded-t-[6rem] rounded-br-[4rem] md:rounded-br-[6rem] overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/raj5.jpeg" 
                alt="Strategic Chess Focus"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Soft Royal Purple Tint Overlay */}
              <div className="absolute inset-0 bg-[#4c1d95]/5 mix-blend-multiply"></div>
            </div>

            {/* Decorative Gold Floating Plus - Responsive sizing */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-[#4c1d95] rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-12 group-hover:rotate-0 transition-all duration-500 z-10">
              <Plus className="text-[#bf953f] w-8 h-8 md:w-12 md:h-12" strokeWidth={3} />
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT & GRID --- */}
          <div className="w-full lg:w-[55%] space-y-8 md:space-y-10 mt-8 lg:mt-0">
            
            {/* Heading Block */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-[#4c1d95] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <div className="w-6 md:w-8 h-[2px] bg-[#bf953f]"></div>
                Why Chess Matters
              </div>

              {/* HEADING: 3xl Mobile, 5xl Desktop */}
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] md:leading-[1.1] tracking-tighter uppercase italic">
                Building <span className="inline-block px-3 py-1 md:px-4 md:py-1 bg-[#4c1d95] text-white rounded-xl md:rounded-2xl transform rotate-1">Elite</span> <br />
                Future <span className="inline-block px-3 py-1 md:px-4 md:py-1 bg-[#bf953f] text-[#4c1d95] rounded-xl md:rounded-2xl mt-2 md:mt-3">Minds</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
                Guided by National Instructor <strong>Mandula Rajeev</strong>, we use chess as a gymnasium for the mind—transforming young thinkers into strategic leaders.
              </p>
            </div>

            {/* Benefit Grid: 1 column mobile, 2 columns sm+ */}
            <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-12 pt-4">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4 md:gap-5 group">
                  {/* Icon with reference-style vertical bar */}
                  <div className="shrink-0 space-y-2">
                    <point.icon className="text-[#4c1d95] w-7 h-7 md:w-8 md:h-8 group-hover:text-[#bf953f] transition-colors" strokeWidth={2.5} />
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-[#bf953f] transition-all duration-500"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-base md:text-lg uppercase italic tracking-tighter group-hover:text-[#4c1d95] transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChessMatters;