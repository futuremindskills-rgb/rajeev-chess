"use client";

import React, { useState } from "react";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  User, 
  Sparkles, 
  Trophy,
  ChevronRight,
  BookOpen
} from "lucide-react";
import BlogBanner from "@/components/blogBanner";

// --- THE ELITE BLOG DATA ---
export const BLOG_POSTS = [
  {
    id: "fide-rating-roadmap",
    title: "The 12-Month Roadmap to your first FIDE Rating",
    excerpt: "Transitioning from a casual player to a FIDE-rated competitor requires a systematic approach to opening theory and endgame precision.",
    category: "Strategic",
    date: "June 15, 2024",
    readTime: "8 min",
    author: "Mandula Rajeev",
    image: "/2.avif",
    featured: true
  },
  {
    id: "arbiter-common-mistakes",
    title: "Arbiter's Corner: 5 Common Rule Mistakes in Rated Games",
    excerpt: "Having directed 1000+ tournaments, I see the same illegal moves and clock errors. Here is how to avoid them.",
    category: "Tournament Prep",
    date: "June 10, 2024",
    readTime: "6 min",
    author: "Mandula Rajeev",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800",
  },
  {
    id: "sicilian-defense-mastery",
    title: "Mastering the Sicilian Defense for Aggressive Juniors",
    excerpt: "Why the Sicilian remains the most powerful response to 1.e4 for students looking to create tactical imbalance.",
    category: "Openings",
    date: "June 05, 2024",
    readTime: "12 min",
    author: "Mandula Rajeev",
    image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=800",
  },
  {
    id: "chess-psychology-pressure",
    title: "Handling The Pressure: Psychological Prep for Finals",
    excerpt: "The difference between a win and a draw often lies in the player's heartbeat. Managing tournament anxiety.",
    category: "Psychology",
    date: "May 28, 2024",
    readTime: "10 min",
    author: "Mandula Rajeev",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800",
  },
  {
    id: "vijayawada-chess-hub",
    title: "Why Vijayawada is India's Rising Chess Powerhouse",
    excerpt: "Reflecting on 18 years of coaching at Loyola College and the growth of the chess culture in Andhra Pradesh.",
    category: "Academy News",
    date: "May 20, 2024",
    readTime: "5 min",
    author: "Mandula Rajeev",
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=800",
  },
  {
    id: "endgame-fundamentals",
    title: "The 3 Endgame Principles Every Student Must Know",
    excerpt: "Matches are won in the opening but saved in the endgame. Focus on the 'Rule of the Square' and opposition.",
    category: "Fundamentals",
    date: "May 12, 2024",
    readTime: "7 min",
    author: "Mandula Rajeev",
    image: "/3.avif",
  },
  {
    id: "parent-guide-rated-games",
    title: "Selecting Your First FIDE Rated Tournament: A Parent's Guide",
    excerpt: "Helping parents navigate the official ACA and FIDE calendars without overwhelming the child.",
    category: "Tournament Prep",
    date: "May 02, 2024",
    readTime: "9 min",
    author: "Mandula Rajeev",
    image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=800",
  },
  {
    id: "tactical-vision-daily",
    title: "The 15-Minute Daily Routine for Tactical Vision",
    excerpt: "Consistent pattern recognition training is the secret behind the 200+ point rating gains our students achieve.",
    category: "Training",
    date: "April 25, 2024",
    readTime: "4 min",
    author: "Mandula Rajeev",
    image: "/4.avif",
  }
];

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredPost = BLOG_POSTS.find(p => p.featured);
  const otherPosts = BLOG_POSTS.filter(p => !p.featured);

  return (
    <section className="py-18 bg-white font-sans">
      <BlogBanner/>
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- SEARCH & CATEGORY BAR --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100">
           <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search strategic insights..."
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:border-[#4c1d95] transition-all font-bold text-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           <div className="flex flex-wrap gap-3 justify-center">
              {["Strategic", "Openings", "Psychology", "Tournament Prep"].map(cat => (
                <button key={cat} className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-500 hover:border-[#4c1d95] hover:text-[#4c1d95] transition-all">
                   {cat}
                </button>
              ))}
           </div>
        </div>

        {/* --- FEATURED POST --- */}
        {featuredPost && (
          <div className="mb-20 group">
            <a href={`/blogs/${featuredPost.id}`} className="grid lg:grid-cols-2 gap-10 items-center">
               <div className="relative h-[400px] md:h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute top-8 left-8">
                     <span className="px-5 py-2 bg-[#bf953f] text-[#4c1d95] text-xs font-black uppercase tracking-widest rounded-full shadow-xl">
                        Featured Insight
                     </span>
                  </div>
               </div>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[#bf953f] font-black text-xs uppercase tracking-widest">
                     <span className="flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                     <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                     <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime} Read</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                     <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#4c1d95] font-black">MR</div>
                     <div className="text-left">
                        <p className="text-slate-900 font-black text-sm">By {featuredPost.author}</p>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">National Instructor</p>
                     </div>
                  </div>
               </div>
            </a>
          </div>
        )}

        {/* --- GRID OF OTHER POSTS --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <a href={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_40px_80px_rgba(76,29,149,0.08)] transition-all duration-500">
               <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[#4c1d95] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                      {post.category}
                    </span>
                  </div>
               </div>
               <div className="p-8 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                     <Calendar size={12}/> {post.date}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-[#4c1d95] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 flex items-center justify-between border-t border-slate-50">
                     <span className="text-[10px] font-black text-[#bf953f] uppercase tracking-[0.2em]">{post.readTime} Read</span>
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#4c1d95] group-hover:bg-[#4c1d95] group-hover:text-white transition-all">
                        <ChevronRight size={18} />
                     </div>
                  </div>
               </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}