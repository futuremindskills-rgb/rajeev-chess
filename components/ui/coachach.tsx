"use client";

import React from "react";
import { 
  Trophy, 
  Medal, 
  Award, 
  Crown, 
  Globe, 
  ShieldCheck, 
  Users, 
  Star,
  Sparkles,
  BookOpen
} from "lucide-react";

const CoachAchievements: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#fcf6ba] to-[#b38728]";

  const milestones = [
    {
      title: "University Gold Medalist",
      desc: "Winner of 3 Gold, 2 Silver, and 1 Bronze medals at ANU Inter-Collegiate Universities (2006-2011).",
      icon: <Medal className="w-8 h-8" />,
      tag: "ANU Excellence"
    },
    {
      title: "South-Zone Representative",
      desc: "Participated in one All-India and four South-Zone Inter-University championships representing Krishna University.",
      icon: <Globe className="w-8 h-8" />,
      tag: "Inter-University"
    },
    {
      title: "National Instructor '22",
      desc: "Officially awarded the 'National Instructor' title in 2022 by the World Chess Federation (FIDE).",
      icon: <Crown className="w-8 h-8" />,
      tag: "FIDE Certified"
    },
    {
      title: "Tournament Director",
      desc: "Served as a FIDE Arbiter and Director for over 1,000 professional chess tournaments across India.",
      icon: <ShieldCheck className="w-8 h-8" />,
      tag: "1000+ Events"
    },
    {
      title: "State Leadership",
      desc: "Joint Secretary of Andhra Chess Association & Secretary of NTR District Chess Association.",
      icon: <Users className="w-8 h-8" />,
      tag: "Administrative"
    },
    {
      title: "Academic Coach",
      desc: "Official Coach & Manager for CBSE South Zone Inter-School Games for the past 12 consecutive years.",
      icon: <BookOpen className="w-8 h-8" />,
      tag: "CBSE Legacy"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            Professional Accolades
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter">
            A Legacy of Strategic <span className="text-[#4c1d95]">Excellence</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Explore the professional milestones of Mandula Rajeev—an International 
            Rated Player and National Instructor with a 21+ year coaching legacy.
          </p>
        </div>

        {/* --- 2. THE ACHIEVEMENTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#fafafa] rounded-[3rem] p-10 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_rgba(76,29,149,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Invisible Large Icon Background */}
              <div className="absolute -right-4 -bottom-4 text-[#4c1d95]/5 group-hover:text-[#4c1d95]/10 transition-colors duration-500 rotate-12 scale-150">
                 {item.icon}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                   <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#4c1d95] group-hover:bg-[#4c1d95] group-hover:text-white transition-all duration-500">
                      {item.icon}
                   </div>
                   <span className="px-4 py-1.5 bg-amber-50 text-[#bf953f] text-[10px] font-black uppercase tracking-widest rounded-full border border-amber-100 group-hover:bg-[#bf953f] group-hover:text-white transition-all">
                      {item.tag}
                   </span>
                </div>

                <div className="space-y-3">
                   <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight group-hover:text-[#4c1d95] transition-colors">
                      {item.title}
                   </h3>
                   <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                      {item.desc}
                   </p>
                </div>

                <div className="pt-4 flex items-center gap-2">
                   <div className="h-[2px] w-8 bg-[#bf953f]"></div>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Milestone</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. THE "FIDE PROOF" STRIP --- */}
        <div className="mt-16 bg-[#050a18] rounded-[3rem] p-10 md:p-14 relative overflow-hidden">
           {/* Gold Decorative Corner */}
           <div className="absolute top-0 right-0 w-48 h-48 border-b-2 border-l-2 border-[#bf953f]/20 rounded-bl-[5rem]"></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                 <div className="relative">
                    <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#bf953f] to-[#b38728] flex items-center justify-center shadow-2xl rotate-3">
                       <Award size={48} className="text-[#050a18]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                       <Star size={16} fill="#bf953f" className="text-[#bf953f]" />
                    </div>
                 </div>
                 
                 <div className="text-center md:text-left space-y-1">
                    <h4 className={`text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${goldGradient} italic uppercase tracking-tighter`}>
                      FIDE ID: 46600507
                    </h4>
                    <p className="text-purple-300 font-bold uppercase tracking-[0.2em] text-xs">International Rated Player • Peak Rating: 1829</p>
                 </div>
              </div>

              <div className="h-[1px] w-full lg:w-[1px] lg:h-20 bg-white/10"></div>

              <div className="text-center lg:text-right">
                 <p className="text-white font-black text-4xl italic">21+</p>
                 <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest mt-1">Years of Coaching Legacy</p>
                 <div className="mt-4 flex gap-2 justify-center lg:justify-end">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#bf953f" className="text-[#bf953f]" />)}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default CoachAchievements;