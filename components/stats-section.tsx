"use client";

import React, { useState } from "react";
import { 
  ChevronUp,
  Sparkles,
  Trophy,
  Globe,
  Award,
  ArrowUp,
  MessageSquare
} from "lucide-react";

const faqData = [
  {
    question: "Who will be the lead coach?",
    answer:
      "All elite batches are led by Mandula Rajeev personally. He is an International Rated Player (FIDE ID: 46600507) with a peak rating of 1829 and holds the 'National Instructor' title awarded in 2022.",
  },
  {
    question: "What makes Rajeev International Chess Club unique?",
    answer:
      "We bring 18+ years of legacy coaching from top institutions like Andhra Loyola and DPS. As the Joint Secretary of the Andhra Chess Association, Coach Rajeev provides students with exclusive tournament pathways.",
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#fafafa] py-24 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10">
        
        {/* --- 1. CENTERED HEADING --- */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            Academy Support
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Frequently Asked <span className="text-[#4c1d95]">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Find answers to common queries about our FIDE-certified coaching levels, 
            tournament participation, and club membership.
          </p>
        </div>

        {/* --- 2. GRID: QUESTIONS (LEFT) | IMAGE (RIGHT) --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`rounded-[2rem] transition-all duration-500 border ${
                  openIndex === index 
                    ? "bg-white border-purple-100 shadow-[0_30px_60px_rgba(76,29,149,0.06)]" 
                    : "bg-white/50 border-slate-200 hover:border-purple-200"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-5">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black transition-all ${
                      openIndex === index ? 'bg-[#4c1d95] text-white rotate-6' : 'bg-slate-100 text-slate-400'
                    }`}>
                      0{index + 1}
                    </span>
                    <span className={`font-black text-lg md:text-xl transition-colors duration-300 ${
                      openIndex === index ? 'text-[#4c1d95]' : 'text-slate-700'
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-[#4c1d95] text-white rotate-180' 
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    <ChevronUp size={20} strokeWidth={3} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index 
                      ? "max-h-[500px] opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 md:px-12 pb-8 ml-12 border-l-2 border-purple-50">
                    <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Featured Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative group">
              {/* Gold Aura Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#bf953f] to-[#4c1d95] rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative bg-white p-4 rounded-[4rem] border border-white shadow-2xl overflow-hidden">
                 <div className="relative h-[500px] md:h-[600px] w-full rounded-[3.2rem] overflow-hidden">
                    <img 
                      src="/faq.avif" 
                      alt="Mandula Rajeev Coaching Session"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    />
                    {/* Overlay with Professional Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95]/80 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 space-y-4">
                       <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                          <Award className="text-[#bf953f]" size={28} />
                          <div>
                             <p className="text-white font-black text-sm uppercase tracking-widest">Certified By</p>
                             <p className="text-[#bf953f] font-bold text-xs">FIDE World Chess Federation</p>
                          </div>
                       </div>
                       
                       <div className="bg-white p-6 rounded-3xl shadow-xl">
                          <div className="flex items-center gap-4 mb-3">
                             <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <MessageSquare className="text-[#4c1d95]" size={20} />
                             </div>
                             <p className="font-black text-slate-900">Direct Support</p>
                          </div>
                          <p className="text-slate-500 text-sm font-medium mb-4">Have a specific question about your child's rating?</p>
                          <a href="tel:+919030308811" className="block w-full text-center py-3 bg-[#4c1d95] text-white font-black text-xs uppercase tracking-[2px] rounded-xl hover:bg-[#3b1675] transition-colors">
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