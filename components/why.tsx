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
      desc: "Developing the mental stamina required for long, high-stakes tournament play.",
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
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* --- LEFT SIDE: THE ASYMMETRICAL IMAGE --- */}
          <div className="w-full lg:w-[45%] relative group">
            {/* The signature shape from your reference image */}
            <div className="relative h-[450px] md:h-[650px] w-full rounded-t-[6rem] rounded-br-[6rem] overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/raj5.jpeg" // Replace with a focused student/board action shot
                alt="Strategic Chess Focus"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Soft Royal Purple Tint Overlay */}
              <div className="absolute inset-0 bg-[#4c1d95]/5 mix-blend-multiply"></div>
            </div>

            {/* Decorative Gold Floating Plus/Pawn */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#4c1d95] rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-12 group-hover:rotate-0 transition-all duration-500">
              <Plus className="text-[#bf953f] w-12 h-12" strokeWidth={3} />
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT & GRID --- */}
          <div className="w-full lg:w-[55%] space-y-10">
            
            {/* Heading Block matching reference style */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#4c1d95] font-black uppercase tracking-[0.3em] text-xs">
                <div className="w-8 h-[2px] bg-[#bf953f]"></div>
                Why Chess Matters
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase italic">
                Building <span className="inline-block px-4 py-1 bg-[#4c1d95] text-white rounded-2xl transform rotate-1">Elite</span> <br />
                Future <span className="inline-block px-4 py-1 bg-[#bf953f] text-[#4c1d95] rounded-2xl mt-2">Minds</span>
              </h2>

              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl italic">
                Guided by National Instructor <strong>Mandula Rajeev</strong>, we use chess as a gymnasium for the mind—transforming young thinkers into strategic leaders.
              </p>
            </div>

            {/* The 6-Card Grid mimicking the reference layout */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 pt-4">
              {points.map((point, index) => (
                <div key={index} className="flex gap-5 group">
                  {/* Icon with reference-style vertical bar */}
                  <div className="shrink-0 space-y-2">
                    <point.icon className="text-[#4c1d95] w-8 h-8 group-hover:text-[#bf953f] transition-colors" strokeWidth={2.5} />
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-[#bf953f] transition-all duration-500"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-lg uppercase italic tracking-tighter">
                      {point.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
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