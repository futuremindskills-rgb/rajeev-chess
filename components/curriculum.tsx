"use client";

import React from "react";
import { 
  ChevronRight,
  Sparkles,
  Clock,
  Trophy
} from "lucide-react";

interface Course {
  level: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  color: string;
  badge: string;
}

const Curriculum: React.FC = () => {
  const courses: Course[] = [
    {
      level: "Level 01",
      badge: "Foundation",
      title: "Beginner",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800",
      description: "For young thinkers starting their journey. We focus on the joy of movement and rules.",
      features: ["Piece Movements", "Basic Checkmates", "Board Notation", "Opening Principles"],
      color: "bg-blue-500",
    },
    {
      level: "Level 02",
      badge: "Strategic",
      title: "Intermediate",
      image: "/inter.jpg",
      description: "Focusing on tactical patterns and planning to reach a 1000+ rating.",
      features: ["Tactical Puzzles", "Pawn Structures", "King Safety", "Basic Endgames"],
      color: "bg-purple-600",
    },
    {
      level: "Level 03",
      badge: "Competitive",
      title: "Advanced",
      image: "/adv.avif",
      description: "Deep theory and tournament prep. Ideal for state-level competition prep.",
      features: ["Advanced Openings", "Positional Play", "Clock Management", "Game Analysis"],
      color: "bg-[#bf953f]",
    },
    {
      level: "Level 04",
      badge: "Elite",
      title: "Master",
      image: "/mas.webp",
      description: "Personalized FIDE prep led by NI Rajeev. Targeting 1800+ ELO ratings.",
      features: ["FIDE Rating Prep", "Grandmaster Theory", "Arbiter Insights", "Psychology"],
      color: "bg-slate-900",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- CENTERED HEADER SECTION --- */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            Professional Syllabus
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            A Curriculum Crafted <br />
            for <span className="text-[#4c1d95]">Champions</span>
          </h2>
          
          <div className="inline-flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 mt-4">
            <Clock className="text-[#4c1d95] w-5 h-5" />
            <p className="text-sm font-bold text-slate-700">Flexible Batches: Weekend & Weekday Slots</p>
          </div>
        </div>

        {/* --- COURSE CARDS GRID --- */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(76,29,149,0.1)] transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className={`${course.color} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg`}>
                    {course.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6">
                  <p className="text-white/80 text-[10px] font-black uppercase tracking-widest mb-0.5">{course.level}</p>
                  <h3 className="text-white text-2xl font-black">{course.title}</h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-500 text-sm leading-relaxed mb-6 italic min-h-[60px]">
                  "{course.description}"
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Syllabus Highlights</p>
                  {course.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bf953f]" />
                      <span className="text-slate-700 text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* --- PERMANENT PURPLE BUTTON --- */}
                <button className="w-full py-4 rounded-2xl bg-[#4c1d95] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-purple-900/20 hover:bg-[#3b1675] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Learn More
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Curriculum;