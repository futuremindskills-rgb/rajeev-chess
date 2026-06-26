"use client";

import React from "react";
import { 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Trophy, 
  Sparkles,
  School,
  Coffee,
  Sun,
  Moon
} from "lucide-react";

const TrainingCenters: React.FC = () => {
  const centers = [
    {
      name: "Yes-J Center",
      location: "Loyola College Road, Vijayawada",
      timings: "06:00 AM - 07:30 AM",
      days: "Daily Morning Batches",
      type: "Elite Professional Training",
      icon: Sun,
      color: "from-amber-400 to-orange-500",
    },
    {
      name: "Popular Center",
      location: "Governorpet Area, Vijayawada",
      timings: "04:00 PM - 05:25 PM",
      days: "Monday to Thursday",
      type: "Strategic Intermediate Hub",
      icon: Trophy,
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Birla Open Minds",
      location: "Pre Play School, NTR District",
      timings: "Weekend Special",
      days: "Saturday & Sundays",
      type: "Junior Foundation Program",
      icon: School,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Fun Times Club",
      location: "Premium Recreation Hub, Vijayawada",
      timings: "05:30 PM - 08:00 PM",
      days: "Monday to Thursday",
      type: "Advanced Tournament Prep",
      icon: Coffee,
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Bhavanipuram & Ibrahimpatnam",
      location: "Regional Training Centers",
      timings: "04:00 PM - 07:30 PM",
      days: "Saturday & Sunday",
      type: "Community Growth Hub",
      icon: Moon,
      color: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
              <Sparkles className="w-4 h-4" />
              Strategic Training Hubs
            </div>
            {/* HEADING: 3xl Mobile, 6xl Desktop */}
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.1] uppercase italic tracking-tighter">
              Our Training <span className="text-[#4c1d95]">Epicenters</span>
            </h2>
            <p className="text-slate-500 text-base md:text-xl font-medium max-w-2xl">
              From early morning professional drills to weekend foundation batches, find the 
              perfect center to start your Grandmaster journey across NTR District.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
                <MapPin className="w-5 h-5 text-[#bf953f]" />
                <span className="text-sm font-black text-slate-900 uppercase tracking-widest">NTR District, AP</span>
            </div>
          </div>
        </div>

        {/* --- CENTERS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {centers.map((center, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(76,29,149,0.1)] transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${center.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-[5rem] -mr-8 -mt-8`}></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Center Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${center.color} flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500`}>
                    <center.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-1">
                    Center 0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none group-hover:text-[#4c1d95] transition-colors">
                    {center.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#bf953f] text-[10px] font-black uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" />
                    {center.type}
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-600 shrink-0" />
                      <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">{center.timings}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Session Time</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-purple-600 shrink-0" />
                      <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">{center.days}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Training Days</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-600 shrink-0" />
                      <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">{center.location}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location Hub</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between group/link">
                   <span className="text-[10px] font-black text-[#4c1d95] uppercase tracking-[0.2em]">View in Maps</span>
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#4c1d95] group-hover/link:bg-[#4c1d95] group-hover/link:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MAP NOTICE --- */}
        <div className="mt-16 p-8 rounded-[2rem] bg-[#050a18] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"></div>
           <div className="relative z-10 space-y-2 text-center md:text-left">
              <h4 className="text-xl font-black uppercase italic tracking-tighter">Not sure which center to choose?</h4>
              <p className="text-slate-400 text-sm font-medium">Contact Coach Rajeev for a free evaluation and we'll suggest the best batch for your level.</p>
           </div>
           <a 
              href="tel:+919030308811" 
              className="relative z-10 px-8 py-4 bg-[#bf953f] hover:bg-white hover:text-[#050a18] text-[#050a18] font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl shadow-amber-900/20 active:scale-95"
           >
              Consult Coach
           </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingCenters;