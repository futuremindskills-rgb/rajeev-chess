"use client";

import React, { useState } from "react";
import { 
  ChevronUp,
  Sparkles,
  Award,
  MessageSquare
} from "lucide-react";

const faqData = [
  {
    question: "Who will be the lead coach?",
    answer:
      "All elite batches are led by Mandula Rajeev personally. He is an International Rated Player (FIDE ID: 46600507) with a peak rating of 1829 and holds the 'National Instructor' title awarded in 2022.",
  },
  {
    question: "What makes the Academy unique?",
    answer:
      "We bring 18+ years of legacy coaching from top institutions like Andhra Loyola and DPS. As a Joint Secretary of the Andhra Chess Association, Coach Rajeev provides students with exclusive tournament pathways.",
  },
  {
    question: "Is there a certificate provided?",
    answer:
      "Yes. Every student receives a certificate of completion for their specific level (Beginner to Master) signed by our FIDE National Instructor.",
  },
  {
    question: "What is the ideal age to start?",
    answer:
      "Ages 5 to 7 is the golden window. Chess at this stage significantly boosts concentration, logical reasoning, and academic performance in school.",
  },
  {
    question: "Will the coach guide in tournaments?",
    answer:
      "Absolutely. Having directed 1000+ tournaments, Coach Rajeev provides 'Arbiter-level' insights into rules, clock management, and tournament psychology.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#fafafa] py-16 md:py-24 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-purple-100/30 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[400px] md:h-[400px] bg-amber-100/30 rounded-full blur-[60px] md:blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-8 max-w-[90rem] relative z-10">
        
        {/* --- 1. CENTERED HEADING --- */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <Sparkles className="w-4 h-4" />
            Academy Support
          </div>
          
          {/* HEADING: 3xl Mobile, 5xl Desktop */}
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            Frequently Asked <span className="text-[#4c1d95]">Questions</span>
          </h2>
          
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-4">
            Find answers to common queries about our FIDE-certified coaching levels, 
            tournament participation, and club membership.
          </p>
        </div>

        {/* --- 2. GRID: QUESTIONS | IMAGE --- */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 border ${
                  openIndex === index 
                    ? "bg-white border-purple-100 shadow-[0_30px_60px_rgba(76,29,149,0.06)]" 
                    : "bg-white/50 border-slate-200 hover:border-purple-200"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    <span className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl flex items-center justify-center text-xs md:text-sm font-black transition-all ${
                      openIndex === index ? 'bg-[#4c1d95] text-white rotate-6' : 'bg-slate-100 text-slate-400'
                    }`}>
                      0{index + 1}
                    </span>
                    <span className={`font-black text-base md:text-xl transition-colors duration-300 pr-2 ${
                      openIndex === index ? 'text-[#4c1d95]' : 'text-slate-700'
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-[#4c1d95] text-white rotate-180' 
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    <ChevronUp className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index 
                      ? "max-h-[500px] opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-12 pb-6 md:pb-8 ml-9 md:ml-12 border-l-2 border-purple-50">
                    <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Featured Visual - Becomes stackable and non-sticky on mobile */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-2">
            <div className="relative group px-2">
              {/* Gold Aura Effect */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-[#bf953f] to-[#4c1d95] rounded-[2.5rem] md:rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative bg-white p-2 md:p-4 rounded-[2.5rem] md:rounded-[4rem] border border-white shadow-2xl overflow-hidden">
                 <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-[2rem] md:rounded-[3.2rem] overflow-hidden">
                    <img 
                      src="/faq.avif" 
                      alt="Mandula Rajeev Coaching Session"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95]/90 via-[#4c1d95]/20 to-transparent"></div>
                    
                    {/* Badges and Call-to-Action */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 space-y-3 md:space-y-4">
                       <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/20">
                          <Award className="text-[#bf953f] w-6 h-6 md:w-7 md:h-7" />
                          <div>
                             <p className="text-white font-black text-[10px] md:text-sm uppercase tracking-widest leading-none mb-1">Certified By</p>
                             <p className="text-[#bf953f] font-bold text-[9px] md:text-xs">FIDE World Chess Federation</p>
                          </div>
                       </div>
                       
                       <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl">
                          <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                             <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <MessageSquare className="text-[#4c1d95] w-4 h-4 md:w-5 md:h-5" />
                             </div>
                             <p className="font-black text-slate-900 text-sm md:text-base">Direct Support</p>
                          </div>
                          <p className="text-slate-500 text-[11px] md:text-sm font-medium mb-3 md:mb-4 leading-snug">
                            Have a specific question about your child's professional chess journey?
                          </p>
                          <a href="tel:+919030308811" className="block w-full text-center py-2.5 md:py-3 bg-[#4c1d95] text-white font-black text-[10px] md:text-xs uppercase tracking-[2px] rounded-lg md:rounded-xl hover:bg-[#3b1675] transition-colors">
                            Call Coach Rajeev
                          </a>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}