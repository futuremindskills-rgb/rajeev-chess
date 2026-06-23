import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../data";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
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
    <article className="pt-40 pb-24 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-8">

        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[#4c1d95] font-black uppercase tracking-widest text-xs mb-10 hover:-translate-x-1 transition-all"
        >
          <ArrowLeft size={14} />
          Back to Blogs
        </Link>

        {/* Category + Meta */}
        <div className="flex items-center gap-4 text-[#bf953f] font-black text-xs uppercase tracking-widest mb-6">
          <span>{blog.category}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic mb-6">
          {blog.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#4c1d95] font-black">
            MR
          </div>
          <div>
            <p className="text-slate-900 font-black text-sm">
              {blog.author}
            </p>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              National Instructor
            </p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl mb-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
          <p className="text-xl font-medium italic">
            {blog.excerpt}
          </p>

          <p className="mt-6">
            This is the detailed article page for{" "}
            <span className="font-black text-slate-900">
              {blog.title}
            </span>.  
            Here you can write full blog content, training insights,
            chess strategies, and academy updates.
          </p>

          <p className="mt-4">
            Each blog now loads dynamically based on its ID, so every
            post has its own unique page instead of showing the same
            content.
          </p>
        </div>
      </div>
    </article>
  );
}