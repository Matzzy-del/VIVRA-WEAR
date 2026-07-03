import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#050505] text-white overflow-hidden">
      
      {/* Decorative vertical divider line & ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#0047AB]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 relative z-10 font-sans">
        
        {/* Intro Tag */}
        <motion.div 
          className="flex flex-col gap-4 mb-12"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#0047AB] uppercase font-bold">COLLECTIVE VOICES</span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight editorial-type">
            Vozes que compartilham do nosso silêncio.
          </h2>
        </motion.div>

        {/* Quotes Carousels with premium crossfade animation */}
        <motion.div 
          className="min-h-[280px] flex flex-col justify-between"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="flex gap-1">
                {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0047AB] text-[#0047AB]" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-3xl font-extralight text-white/95 leading-relaxed tracking-wide italic serif-display">
                “{TESTIMONIALS[index].quote}”
              </blockquote>

              <div className="flex flex-col gap-1 border-l border-[#0047AB] pl-4">
                <cite className="text-sm font-normal text-white not-italic font-sans">
                  {TESTIMONIALS[index].author}
                </cite>
                <span className="text-xs font-mono text-white/60 uppercase tracking-widest font-semibold">
                  {TESTIMONIALS[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls row */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
            <div className="text-xs font-mono text-white/30 tracking-widest">
              {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-3 border border-white/10 hover:border-[#0047AB]/50 hover:bg-[#0047AB]/10 rounded-full transition-all duration-300 cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={next}
                className="p-3 border border-white/10 hover:border-[#0047AB]/50 hover:bg-[#0047AB]/10 rounded-full transition-all duration-300 cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
