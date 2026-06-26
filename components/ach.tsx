"use client";

import React from "react";
import { 
  Trophy, 
  Award, 
  Medal, 
  Target, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Star,
  Users
} from "lucide-react";

const ManAchievementsSection: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#d4af37] to-[#b38728]";

  const stats = [
    { label: "Legacy of Coaching", val: "21+ Yrs", icon: Award },
    { label: "Tournaments Led", val: "1000+", icon: Trophy },
    { label: "FIDE Peak Rating", val: "1829", icon: Target },
    { label: "University Medals", val: "06", icon: Medal },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- TOP ROW: IMAGE & OBJECTIVE BALANCE --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left: Professional Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-slate-50">
               <img 
                src="/33.jpeg" 
                alt="Mandula Rajeev" 
                className="w-full h-[450px] md:h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95]/60 via-transparent to-transparent"></div>
               
               {/* Floating Title Badge */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-[#4c1d95] flex items-center justify-center text-[#bf953f] shrink-0">
                        <Star className="w-6 h-6 fill-current" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Title</p>
                        <p className="text-lg font-black text-[#4c1d95] uppercase italic">National Instructor</p>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

          {/* Right: Objective & Leadership */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <Sparkles className="w-4 h-4" />
                The Master's Profile
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.1] uppercase italic tracking-tighter">
                Strategic <span className="text-[#4c1d95]">Visionary</span> <br />
                & FIDE Arbiter
              </h2>
            </div>

            <p className="text-slate-600 text-base md:text-xl font-medium leading-relaxed italic border-l-4 border-[#bf953f] pl-6">
              "Dedicated to building a best-in-class career by exploring mental limits and fostering growth in young minds. Transforming analytical potential into professional success through disciplined coaching."
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="space-y-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3 text-[#4c1d95] font-black text-xs uppercase tracking-widest">
                    <ShieldCheck className="w-5 h-5 text-[#bf953f]" /> Administrative Leadership
                  </div>
                  <ul className="space-y-2 text-sm text-slate-500 font-bold">
                    <li>• Joint Secretary, Andhra Chess Assoc.</li>
                    <li>• Secretary, NTR District Chess Assoc.</li>
                    <li>• First Captain of Krishna University</li>
                  </ul>
               </div>
               <div className="space-y-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3 text-[#4c1d95] font-black text-xs uppercase tracking-widest">
                    <Users className="w-5 h-5 text-[#bf953f]" /> Team Management
                  </div>
                  <ul className="space-y-2 text-sm text-slate-500 font-bold">
                    <li>• CBSE South Zone Manager (12 Yrs)</li>
                    <li>• Tournament Director & Organizer</li>
                    <li>• Professional Team Strategist</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>

        {/* --- MIDDLE ROW: BALANCED STATS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[3rem] text-center border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <stat.icon className="w-8 h-8 md:w-12 md:h-12 text-[#bf953f] mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-2xl md:text-4xl font-black text-slate-900 mb-2 leading-none tracking-tighter">{stat.val}</p>
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- BOTTOM ROW: INSTITUTIONAL HALL OF FAME --- */}
        <div className="relative p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] bg-[#050a18] overflow-hidden">
           {/* Abstract background effect */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h4 className="text-[#bf953f] font-black text-xs uppercase tracking-[0.4em] mb-4">Institutional Impact</h4>
                 <p className="text-white text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-tight">
                    Official Coach for <br />
                    Premier Organizations
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                 {[
                   "Andhra Loyola College",
                   "Delhi Public School",
                   "NTR Health University",
                   "St. Johns Schools",
                   "Siddhartha Women's",
                   "Nalanda Vidyanikentan"
                 ].map((school, i) => (
                   <div key={i} className="flex items-center gap-3 group cursor-default">
                      <ChevronRight className="w-4 h-4 text-[#bf953f] group-hover:translate-x-1 transition-transform" />
                      <span className="text-white/60 group-hover:text-white font-bold text-[10px] md:text-sm uppercase tracking-wider transition-colors">
                        {school}
                      </span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ManAchievementsSection;