"use client";

import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../data";
import { Calendar, Clock, ArrowLeft, User, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const blog = BLOG_POSTS.find((post) => post.id === params.id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="pt-24 md:pt-40 pb-16 md:pb-24 bg-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8">

        {/* --- BACK BUTTON --- */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[#4c1d95] font-black uppercase tracking-widest text-[10px] md:text-xs mb-8 md:mb-10 hover:-translate-x-1 transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:text-[#bf953f]" />
          Back to Blogs
        </Link>

        {/* --- CATEGORY + META --- */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-4 md:gap-6 text-[#bf953f] font-black text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8">
          <span className="bg-[#4c1d95]/5 px-3 py-1 rounded-md">{blog.category}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> {blog.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {blog.readTime}
          </span>
        </div>

        {/* --- TITLE --- 
            3xl on Mobile, 6xl on Desktop
        */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] md:leading-[1.05] tracking-tighter uppercase italic mb-6 md:mb-8">
          {blog.title}
        </h1>

        {/* --- AUTHOR SECTION --- */}
        <div className="flex items-center gap-4 mb-8 md:mb-12 p-4 md:p-0 bg-slate-50 md:bg-transparent rounded-2xl">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#4c1d95] font-black text-sm md:text-base shrink-0">
            MR
          </div>
          <div className="min-w-0">
            <p className="text-slate-900 font-black text-xs md:text-sm truncate">
              {blog.author}
            </p>
            <p className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#bf953f]" />
              National Instructor
            </p>
          </div>
        </div>

        {/* --- FEATURED IMAGE --- */}
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl mb-10 md:mb-16">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to match site aesthetic */}
          <div className="absolute inset-0 bg-[#4c1d95]/5 mix-blend-multiply"></div>
        </div>

        {/* --- BLOG CONTENT --- */}
        <div className="max-w-none text-slate-600">
          
          {/* Lead Excerpt */}
          <p className="text-lg md:text-2xl font-medium italic text-slate-800 leading-relaxed border-l-4 border-[#bf953f] pl-6 mb-10">
            {blog.excerpt}
          </p>

          {/* Body Text */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed font-medium">
             <p>
                Welcome to the detailed analysis of <span className="font-black text-slate-900">{blog.title}</span>. 
                In this segment, National Instructor Mandula Rajeev breaks down the critical 
                chess strategies and tournament preparation methods used at the highest 
                levels of professional play.
             </p>

             <p>
                Our coaching at <span className="text-[#4c1d95] font-bold">Rajeev International Chess Club</span> 
                is built on the foundation of 21+ years of legacy. Each lesson is designed 
                to translate theoretical knowledge into tournament-winning moves.
             </p>

             {/* Placeholder for dynamic content loading */}
             <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] border border-slate-100 mt-12">
                <h3 className="text-xl md:text-2xl font-black text-[#4c1d95] uppercase italic tracking-tight mb-4">
                    Key Tactical Takeaways
                </h3>
                <ul className="space-y-4">
                    {[
                        "Understanding the Arbiter's perspective on rule execution.",
                        "Building a disciplined opening repertoire for rated games.",
                        "Calculating endgames with 1829-rated precision."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#bf953f] text-white flex items-center justify-center text-[10px] shrink-0 mt-1">
                                {i + 1}
                            </span>
                            <span className="text-slate-700 font-bold text-sm md:text-base leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-widest">
                Share this Strategic Insight
            </p>
            <div className="flex gap-4">
                {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                    <button key={platform} className="px-5 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-[#4c1d95] hover:text-[#4c1d95] transition-all">
                        {platform}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </article>
  );
}