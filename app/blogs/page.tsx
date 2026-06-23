"use client";

import React, { useState } from "react";
import { 
  Search, 
  Calendar, 
  Clock, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import BlogBanner from "@/components/blogBanner";

// --- THE ELITE BLOG DATA ---
export const BLOG_POSTS = [
  {
    id: "fide-rating-roadmap",
    title: "The 12-Month Roadmap to your first FIDE Rating",
    excerpt:
      "Transitioning from a casual player to a FIDE-rated competitor requires a systematic approach to opening theory and endgame precision.",
    category: "Strategic",
    date: "June 15, 2024",
    readTime: "8 min",
    author: "Mandula Rajeev",
    image: "/2.avif",
    featured: true,

    content: `
Becoming a FIDE-rated player is a structured journey, not luck.

### Phase 1: Foundation (0–3 Months)
- Solve 50–100 tactics daily
- Focus on forks, pins, skewers
- Learn basic endgames (king + pawn)

### Phase 2: Opening Stability (3–6 Months)
- White: Italian / London System
- Black vs e4: Sicilian / Caro-Kann
- Black vs d4: Slav / QGD

### Phase 3: Tournament Exposure (6–9 Months)
- Play classical tournaments
- Focus on time management
- Analyze every game

### Phase 4: Rating Push (9–12 Months)
- Fix weaknesses
- Study model games
- Improve psychological strength

Consistency beats talent in chess development.
`
  },

  {
    id: "arbiter-common-mistakes",
    title: "Arbiter's Corner: 5 Common Rule Mistakes in Rated Games",
    excerpt:
      "Having directed 1000+ tournaments, I see the same illegal moves and clock errors. Here is how to avoid them.",
    category: "Tournament Prep",
    date: "June 10, 2024",
    readTime: "6 min",
    author: "Mandula Rajeev",
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800",

    content: `
After conducting hundreds of tournaments, these mistakes repeat constantly.

### 1. Illegal Moves
Players forget touch-move rule.

### 2. Clock Errors
Not pressing clock after move.

### 3. Mobile Phone Violations
Even silent phones cause penalties.

### 4. Not Recording Moves
Especially in classical games.

### 5. Wrong Draw Claims
Many players misunderstand repetition rule.

Rule knowledge is as important as chess skill.
`
  },

  {
    id: "sicilian-defense-mastery",
    title: "Mastering the Sicilian Defense for Aggressive Juniors",
    excerpt:
      "Why the Sicilian remains the most powerful response to 1.e4 for students looking to create tactical imbalance.",
    category: "Openings",
    date: "June 05, 2024",
    readTime: "12 min",
    author: "Mandula Rajeev",
    image:
      "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=800",

    content: `
The Sicilian Defense is the weapon of ambitious players.

### Why Play Sicilian?
- Asymmetrical positions
- Winning chances with Black

### Key Variations:
- Najdorf
- Dragon
- Classical

### Strategy Tips:
- Do not memorize blindly
- Understand pawn structures
- Focus on counterplay timing

It is a lifelong opening system.
`
  },

  {
    id: "chess-psychology-pressure",
    title: "Handling The Pressure: Psychological Prep for Finals",
    excerpt:
      "The difference between a win and a draw often lies in the player's heartbeat. Managing tournament anxiety.",
    category: "Psychology",
    date: "May 28, 2024",
    readTime: "10 min",
    author: "Mandula Rajeev",
    image:
      "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800",

    content: `
Chess is a mental battle more than a calculation battle.

### Common Problems:
- Time panic
- Fear of losing
- Overthinking winning positions

### Solutions:
- Controlled breathing
- Time checkpoints (move every 10–15 sec early)
- Emotional detachment from result

Strong players think in systems, not emotions.
`
  },

  {
    id: "vijayawada-chess-hub",
    title: "Why Vijayawada is India's Rising Chess Powerhouse",
    excerpt:
      "Reflecting on 18 years of coaching at Loyola College and the growth of the chess culture in Andhra Pradesh.",
    category: "Academy News",
    date: "May 20, 2024",
    readTime: "5 min",
    author: "Mandula Rajeev",
    image:
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=800",

    content: `
Vijayawada has become a major chess training hub.

### Growth Factors:
- Strong coaching culture
- School-level chess integration
- Tournament exposure

### Our Contribution:
- Training national-level players
- Consistent tournament participation
- Focus on discipline-based learning

The future of Indian chess is shifting outside metros.
`
  },

  {
    id: "endgame-fundamentals",
    title: "The 3 Endgame Principles Every Student Must Know",
    excerpt:
      "Matches are won in the opening but saved in the endgame. Focus on the 'Rule of the Square' and opposition.",
    category: "Fundamentals",
    date: "May 12, 2024",
    readTime: "7 min",
    author: "Mandula Rajeev",
    image: "/3.avif",

    content: `
Endgames decide real strength.

### 1. King Activity
King becomes a fighting piece.

### 2. Opposition
Critical in pawn endgames.

### 3. Rule of Square
Helps calculate pawn promotion chances.

Endgame mastery = rating stability.
`
  },

  {
    id: "parent-guide-rated-games",
    title: "Selecting Your First FIDE Rated Tournament: A Parent's Guide",
    excerpt:
      "Helping parents navigate the official ACA and FIDE calendars without overwhelming the child.",
    category: "Tournament Prep",
    date: "May 02, 2024",
    readTime: "9 min",
    author: "Mandula Rajeev",
    image:
      "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=800",

    content: `
Parents play a crucial role in chess growth.

### Choosing Tournament:
- Start with local events
- Avoid overloading schedule

### Emotional Support:
- Do not pressure results
- Focus on learning

### Travel & Preparation:
- Ensure rest before games
- Maintain routine

Support matters more than pressure.
`
  },

  {
    id: "tactical-vision-daily",
    title: "The 15-Minute Daily Routine for Tactical Vision",
    excerpt:
      "Consistent pattern recognition training is the secret behind the 200+ point rating gains our students achieve.",
    category: "Training",
    date: "April 25, 2024",
    readTime: "4 min",
    author: "Mandula Rajeev",
    image: "/4.avif",

    content: `
Tactics decide most games under 1800 rating.

### Daily Routine:
- 5 min: easy puzzles
- 5 min: medium puzzles
- 5 min: calculation review

### Focus Areas:
- Hanging pieces
- Mate patterns
- Tactical combinations

Consistency > intensity.
`
  }
];

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const featuredPost = BLOG_POSTS.find(p => p.featured);
  
  const filteredPosts = BLOG_POSTS.filter(p => 
    !p.featured && 
    (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     p.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-8 md:py-16 bg-white font-sans">
      <BlogBanner />
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- SEARCH & CATEGORY BAR --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 md:mb-20 p-4 md:p-6 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100">
           <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
              <input 
                type="text" 
                placeholder="Search strategic insights..."
                className="w-full pl-11 pr-6 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-white border border-slate-200 outline-none focus:border-[#4c1d95] transition-all font-bold text-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {["Strategic", "Openings", "Psychology", "Tournament Prep"].map(cat => (
                <button key={cat} className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-xl bg-white border border-slate-200 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 hover:border-[#4c1d95] hover:text-[#4c1d95] transition-all whitespace-nowrap">
                   {cat}
                </button>
              ))}
           </div>
        </div>

        {/* --- FEATURED POST --- */}
        {featuredPost && (
          <div className="mb-16 md:mb-24 group">
            <a href={`/blogs/${featuredPost.id}`} className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
               <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute top-6 left-6 md:top-8 md:left-8">
                     <span className="px-4 py-1.5 md:px-5 md:py-2 bg-[#bf953f] text-[#4c1d95] text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full shadow-xl">
                        Featured Insight
                     </span>
                  </div>
               </div>
               
               <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[#bf953f] font-black text-[10px] md:text-xs uppercase tracking-widest">
                     <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                     <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                     <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime} Read</span>
                  </div>
                  
                  {/* HEADING: 3xl Mobile, 6xl Desktop */}
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.15] md:leading-[1.05] tracking-tighter uppercase italic">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-slate-500 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-2 md:pt-4">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#4c1d95] font-black text-sm">MR</div>
                     <div className="text-left">
                        <p className="text-slate-900 font-black text-xs md:text-sm leading-none">By {featuredPost.author}</p>
                        <p className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">National Instructor</p>
                     </div>
                  </div>
               </div>
            </a>
          </div>
        )}

        {/* --- GRID OF OTHER POSTS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredPosts.map((post) => (
            <a 
              href={`/blogs/${post.id}`} 
              key={post.id} 
              className="group flex flex-col h-full bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_40px_80px_rgba(76,29,149,0.08)] transition-all duration-500"
            >
               <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-md text-[#4c1d95] text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                      {post.category}
                    </span>
                  </div>
               </div>
               
               <div className="p-6 md:p-8 flex flex-col flex-grow space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                     <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight group-hover:text-[#4c1d95] transition-colors line-clamp-2 uppercase italic tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-5 md:pt-6 flex items-center justify-between border-t border-slate-50">
                     <span className="text-[9px] md:text-[10px] font-black text-[#bf953f] uppercase tracking-[0.2em]">{post.readTime} Read</span>
                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#4c1d95] group-hover:bg-[#4c1d95] group-hover:text-white transition-all">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                     </div>
                  </div>
               </div>
            </a>
          ))}
        </div>
        
        {/* --- NO RESULTS STATE --- */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 space-y-4 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-slate-300 w-8 h-8" />
             </div>
             <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No insights match your search</p>
             <button 
               onClick={() => setSearchQuery("")}
               className="text-[#4c1d95] font-black text-xs uppercase underline underline-offset-4 decoration-2"
             >
               Clear Filters
             </button>
          </div>
        )}

      </div>
    </section>
  );
}