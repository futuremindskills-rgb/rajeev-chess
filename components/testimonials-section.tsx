"use client";

import React, { useRef } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote, 
  Star, 
  Sparkles,
  Trophy
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?u=parent1", 
    name: "Dr. Sandeep Kumar",
    role: "Parent of State U-9 Champ",
    text: "Coach Rajeev's depth of knowledge is unparalleled. His experience as a FIDE National Instructor really shows in how he simplifies complex positional play for kids. My son's rating improved by 200 points in 4 months!",
    rating: 5
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?u=parent2", 
    name: "Lakshmi Prasanna",
    role: "Mother of Student (Vijayawada)",
    text: "The best chess academy in Andhra. Having a coach who is also a FIDE Arbiter gives students a huge advantage in understanding tournament rules and clock pressure. Truly professional and dedicated.",
    rating: 5
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?u=parent3", 
    name: "Ravi Teja",
    role: "Father of Senior Student",
    text: "We chose Rajeev sir because of his 18+ years of legacy at Andhra Loyola. His teaching methodology is structured and disciplined. It's not just about the game; it's about building character and focus.",
    rating: 5
  },
  {
    id: 4,
    image: "https://i.pravatar.cc/150?u=parent4", 
    name: "Srinivas Rao",
    role: "Father of FIDE Rated Student",
    text: "Exceptional coaching. Rajeev sir's background as an International Rated Player (1829) means he knows exactly what it takes to climb the professional ladder. The individual attention is fantastic.",
    rating: 5
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; 
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative py-24 bg-[#fafafa] font-sans overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4c1d95 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10">
        
        {/* --- CENTERED HEADER SECTION --- */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            Parent Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            The Wall of <span className="text-[#4c1d95]">Champions</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            See why parents across Andhra Pradesh trust Mandula Rajeev for their children's 
            journey toward Chess excellence and Grandmaster discipline.
          </p>

          {/* Navigation Buttons (Always visible but centered on mobile) */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-2xl border border-purple-100 bg-white text-[#4c1d95] flex items-center justify-center hover:bg-[#4c1d95] hover:text-white shadow-lg transition-all duration-300 active:scale-90"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-2xl border border-purple-100 bg-white text-[#4c1d95] flex items-center justify-center hover:bg-[#4c1d95] hover:text-white shadow-lg transition-all duration-300 active:scale-90"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- TESTIMONIALS CAROUSEL --- */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-12 px-4 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="relative flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] snap-center group"
              >
                {/* Card Container */}
                <div className="h-full bg-white border border-slate-100 p-8 md:p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(76,29,149,0.1)] hover:border-purple-100 flex flex-col">
                  
                  {/* Quote Icon & Rating */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-[#4c1d95] transition-colors duration-500 text-[#4c1d95] group-hover:text-white">
                      <Quote className="w-7 h-7 fill-current" />
                    </div>
                    <div className="flex gap-1 bg-amber-50 px-3 py-1.5 rounded-full">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-[#bf953f] fill-[#bf953f]" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic mb-10 flex-grow font-medium">
                    "{item.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md group-hover:border-[#bf953f] transition-colors shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-slate-900 font-black text-base md:text-lg truncate">{item.name}</h4>
                      <div className="flex items-center gap-2">
                        <Trophy size={12} className="text-[#bf953f]" />
                        <p className="text-[#4c1d95] text-xs md:text-sm font-black uppercase tracking-widest truncate">{item.role}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
        </div>

        {/* --- BOTTOM CTA HINT --- */}
        <div className="mt-8 text-center">
            <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.2em]">
                Join the <span className="text-[#bf953f]">Success Stories</span> at Rajeev International
            </p>
        </div>

      </div>
    </section>
  );
}