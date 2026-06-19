"use client";

import React from "react";
import { 
  BookOpen, 
  PlayCircle, 
  Search, 
  TrendingUp, 
  Users, 
  Layout, 
  Trophy, 
  ClipboardCheck,
  ChevronRight,
  Sparkles
} from "lucide-react";

const CoachingPhilosophy: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#fcf6ba] to-[#b38728]";

  const processSteps = [
    { label: "Learn", desc: "Theory & Opening Mastery", icon: BookOpen },
    { label: "Practice", desc: "Real-time Game Simulation", icon: PlayCircle },
    { label: "Analyze", desc: "Post-match Strategic Review", icon: Search },
    { label: "Improve", desc: "Targeted Technical Drills", icon: TrendingUp },
  ];

  const pillars = [
    {
      title: "Personalized Attention",
      desc: "Small batch sizes and 1-on-1 mentorship to address each student's unique strategic blindspots.",
      icon: Users,
    },
    {
      title: "Structured Curriculum",
      desc: "A FIDE-certified syllabus designed by NI Mandula Rajeev, covering Beginner to Grandmaster levels.",
      icon: Layout,
    },
    {
      title: "Tournament-Focused",
      desc: "Arbiter-led prep for State, National, and FIDE-rated events with strict clock-management training.",
      icon: Trophy,
    },
    {
      title: "Regular Assessments",
      desc: "Monthly ELO-style internal ratings and diagnostic tests to quantify mental and tactical growth.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- 1. CENTERED HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            Academy Standards
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter">
            Our Coaching <span className="text-[#4c1d95]">Philosophy</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
            "Excellence is a habit. Our methodology ensures that every move is backed by theory and refined through analysis."
          </p>
        </div>

        {/* --- 2. THE MASTER LOOP (Learn -> Practice -> Analyze -> Improve) --- */}
        <div className="relative mb-24">
           {/* Connecting Line for Desktop */}
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0"></div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="group text-center space-y-4">
                   <div className="relative inline-flex">
                      <div className="absolute -inset-4 bg-gradient-to-tr from-[#bf953f] to-[#4c1d95] rounded-full opacity-0 group-hover:opacity-20 transition duration-500 blur-xl"></div>
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-[#4c1d95] group-hover:bg-[#4c1d95] group-hover:text-white transition-all duration-500 relative">
                         <step.icon size={32} strokeWidth={2} />
                         {/* Step Counter */}
                         <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#bf953f] to-[#b38728] text-[#050a18] flex items-center justify-center text-xs font-black shadow-lg">
                            0{idx + 1}
                         </div>
                      </div>
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{step.label}</h4>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{step.desc}</p>
                   </div>
                   {idx < 3 && (
                     <div className="flex lg:hidden justify-center py-4">
                        <ChevronRight className="rotate-90 text-slate-300" />
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* --- 3. THE CORE PILLARS GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="relative p-8 rounded-[3rem] bg-white border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(76,29,149,0.08)] transition-all duration-500 group overflow-hidden"
            >
              {/* Decorative Corner Element */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#4c1d95]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-[#4c1d95] group-hover:bg-[#4c1d95] group-hover:text-white transition-colors duration-500">
                  <pillar.icon size={28} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#bf953f]"></div>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Excellence Standard</span>
                </div>
              </div>
            </div>
          ))}
        </div>

     

      </div>
    </section>
  );
};

export default CoachingPhilosophy;