"use client";

import React, { useState } from 'react';
import { 
  XIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  Maximize2,
  Sparkles,
  Camera
} from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Dynamically generate paths for 1.jpeg to 47.jpeg
  const galleryImages = Array.from({ length: 47 }, (_, i) => ({
    id: i + 1,
    src: `/${i + 1}.jpeg`,
    alt: `Rajeev Chess Moment ${i + 1}`,
  }));

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const navigateImage = (direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;

    if (direction === 'next') {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    } else {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-24 bg-white relative font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- 1. CENTERED HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            Visual Archive
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
            The Academy <span className="text-[#4c1d95]">Gallery</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
            "Capturing the focus, the fire, and the FIDE-rated victories of our students."
          </p>
        </div>

        {/* --- 2. PREMIUM MASONRY GRID (No Text, Just Visuals) --- */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group break-inside-avoid rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Minimalist Hover State (Just an Icon) */}
              <div className="absolute inset-0 bg-[#4c1d95]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#4c1d95] transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <Maximize2 size={24} strokeWidth={3} />
                 </div>
              </div>

              {/* Invisible Bottom Badge (Shows on hover) */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">View Full Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. ELITE LIGHTBOX MODAL --- */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050a18]/98 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Top Controls */}
          <div className="absolute top-0 inset-x-0 p-8 flex justify-between items-center z-[110]">
             <div className="flex items-center gap-3 text-white">
                <Camera className="text-[#bf953f]" size={20} />
                <span className="text-xs font-black uppercase tracking-[0.2em]">{selectedImageIndex + 1} / {galleryImages.length}</span>
             </div>
             <button 
                onClick={closeLightbox}
                className="w-12 h-12 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-all border border-white/10"
              >
                <XIcon size={24} />
              </button>
          </div>

          {/* Navigation - Prev */}
          <button 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 hover:bg-[#bf953f] hover:text-[#050a18] text-white rounded-full flex items-center justify-center transition-all z-[110] border border-white/10"
            onClick={(e) => navigateImage('prev', e)}
          >
            <ChevronLeftIcon size={32} strokeWidth={3} />
          </button>

          {/* Navigation - Next */}
          <button 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 hover:bg-[#bf953f] hover:text-[#050a18] text-white rounded-full flex items-center justify-center transition-all z-[110] border border-white/10"
            onClick={(e) => navigateImage('next', e)}
          >
             <ChevronRightIcon size={32} strokeWidth={3} />
          </button>

          {/* Main Content Area */}
          <div 
            className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImageIndex].src} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(191,149,63,0.1)] transition-transform duration-500"
            />
          </div>
        </div>
      )}

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default GallerySection;