"use client";

import React from "react";
import { 
  Calendar, 
  Clock, 
  Share2, 
  ArrowLeft, 
  Trophy, 
  Globe,
  Quote
} from "lucide-react";

export default function BlogDetail() {
  // In a real app, you would fetch data using the slug
  // For now, I'm using placeholder data that matches the FIDE rating roadmap
  
  return (
    <article className="pt-40 pb-24 bg-white font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- ARTICLE HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
           <a href="/blogs" className="inline-flex items-center gap-2 text-[#4c1d95] font-black uppercase tracking-widest text-[10px] mb-4 hover:translate-x-[-4px] transition-all">
             <ArrowLeft size={14} /> Back to Insights
           </a>
           
           <div className="flex items-center justify-center gap-4 text-[#bf953f] font-black text-xs uppercase tracking-widest">
              <span>Openings</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>June 15, 2024</span>
           </div>
           
           <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic">
             The 12-Month Roadmap to your first <span className="text-[#4c1d95]">FIDE Rating</span>
           </h1>

           <div className="flex items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-[#050a18] rounded-2xl flex items-center justify-center text-[#bf953f] font-black">MR</div>
                 <div className="text-left">
                    <p className="text-slate-900 font-black text-sm">Mandula Rajeev</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">National Instructor</p>
                 </div>
              </div>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4c1d95] transition-all">
                 <Share2 size={16} />
              </button>
           </div>
        </div>

        {/* --- MAIN FEATURE IMAGE --- */}
        <div className="max-w-7xl mx-auto mb-20 h-[400px] md:h-[650px] rounded-[4rem] overflow-hidden shadow-2xl">
           <img 
             src="https://images.unsplash.com/photo-1529692236671-f1f6e94d194c?q=80&w=1200" 
             className="w-full h-full object-cover" 
             alt="FIDE Rating Roadmap" 
           />
        </div>

        {/* --- CONTENT LAYOUT (Article + Sidebar) --- */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
           
           {/* Article Content */}
           <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-xl prose-slate max-w-none">
                 <p className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed italic">
                   Obtaining an International FIDE rating is the first major milestone for any aspiring professional chess player. 
                   It transitions you from being a "player" to a "ranked competitor" in the eyes of the World Chess Federation.
                 </p>
                 
                 <h2 className="text-3xl font-black text-slate-900 uppercase italic mt-12 mb-6">1. Strengthening Your Tactical Base</h2>
                 <p className="text-slate-500 leading-relaxed text-lg mb-6">
                    Before entering a rated tournament, your tactical vision must be sharp. At Rajeev International, we recommend 
                    solving at least 50 puzzles daily that focus on themes like Forks, Skewers, and Deflection. A rating of 1800+ 
                    is rarely built on complex strategy—it is built on not losing pieces to simple tactics.
                 </p>

                 <div className="bg-slate-50 p-10 rounded-[3rem] border-l-8 border-[#bf953f] my-12">
                    <Quote className="text-[#bf953f] mb-4" size={40} />
                    <p className="text-2xl font-black text-[#4c1d95] italic leading-tight">
                       "A FIDE rating is not just a number; it's a passport to the global chess community. It demands discipline, 
                       psychological resilience, and a respect for the clock."
                    </p>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">— Mandula Rajeev, FIDE NI</p>
                 </div>

                 <h2 className="text-3xl font-black text-slate-900 uppercase italic mt-12 mb-6">2. Mastering the Opening Repertoire</h2>
                 <p className="text-slate-500 leading-relaxed text-lg mb-6">
                    For your first 12 months, do not jump between openings. Pick one solid response for White (e.g., London System or Ruy Lopez) 
                    and two for Black (against e4 and d4). Memorizing the first 10-12 moves of your chosen lines ensures you reach 
                    the middlegame with a time advantage.
                 </p>

                 <h2 className="text-3xl font-black text-slate-900 uppercase italic mt-12 mb-6">3. The Tournament Schedule</h2>
                 <p className="text-slate-500 leading-relaxed text-lg">
                    Begin with local non-rated tournaments in Vijayawada to build stamina. Once you can sit for a 90-minute classical game 
                    without losing focus, it is time to register for your first official ACA-approved rated event.
                 </p>
              </div>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4 space-y-12">
              
              {/* About Coach Box */}
              <div className="bg-[#050a18] p-8 rounded-[3rem] text-white space-y-6 shadow-xl">
                 <div className="w-16 h-16 bg-[#bf953f] rounded-2xl flex items-center justify-center text-[#050a18]">
                    <Trophy size={32} />
                 </div>
                 <h4 className="text-xl font-black uppercase italic tracking-tighter">About the Author</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Mandula Rajeev is a FIDE National Instructor with a peak rating of 1829. With 18+ years of 
                    coaching at Andhra Loyola, he specializes in high-performance tournament prep.
                 </p>
                 <div className="flex gap-2 text-[#bf953f] font-black text-[10px] uppercase tracking-widest">
                    <Globe size={14} /> FIDE ID: 46600507
                 </div>
              </div>

              {/* Related Posts */}
              <div className="space-y-6">
                 <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Related Insights</h4>
                 <div className="space-y-4">
                    {[
                      "Arbiter's Corner: Illegal Moves",
                      "The Psychology of Chess Focus",
                      "Mastering the Sicilian Defense"
                    ].map((title, i) => (
                      <a key={i} href="#" className="block p-5 bg-white border border-slate-100 rounded-2xl hover:border-[#4c1d95] transition-all group">
                         <p className="text-slate-900 font-black text-sm leading-tight group-hover:text-[#4c1d95] transition-colors">{title}</p>
                         <span className="text-[10px] font-bold text-slate-400 uppercase mt-2 block">Read Insight →</span>
                      </a>
                    ))}
                 </div>
              </div>

              {/* CTA Banner */}
              <div className="bg-[#4c1d95] p-8 rounded-[3rem] text-center space-y-6 shadow-2xl">
                 <h4 className="text-xl font-black text-white italic">Ready to Get Rated?</h4>
                 <p className="text-purple-200 text-sm">Join our elite coaching program in Vijayawada or Online.</p>
                 <button className="w-full py-4 bg-[#bf953f] text-[#4c1d95] font-black rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all">
                    Book Free Demo
                 </button>
              </div>

           </div>

        </div>
      </div>
    </article>
  );
}