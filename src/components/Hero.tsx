import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ASSETS } from "../data";
import logoImg from "../assets/images/logo.png";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#FFFFFF]">
      {/* Background Image Container with Parallax Scale on entering */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={ASSETS.hero}
          alt="Vivra Wear Campaign"
          className="w-full h-full object-cover object-center filter contrast-[101%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/45 to-[#FFFFFF]/10" />
      </motion.div>

      {/* Floating high-tech ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[#0047AB]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[25vw] h-[25vw] rounded-full bg-[#0047AB]/3 blur-[100px] pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-16 md:pb-24 px-6 sm:px-12 md:px-24">
        <div className="max-w-5xl">
          {/* Subtle Label */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
            <span className="text-[10px] font-mono text-[#050505]/40 tracking-[0.4em] uppercase">
              VIVRA WEAR • COUTURE TECH
            </span>
          </motion.div>

          {/* Epic Main Headline with word reveal */}
          <h1 className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] font-bold text-[#050505] leading-[0.9] tracking-tighter mb-8 editorial-type">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Sua autoestima
            </motion.span>
            <motion.span
              className="block serif-display font-light text-[#0047AB]"
              initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              começa aqui.
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-[#050505]/60 font-light tracking-wide max-w-xl mb-12 leading-relaxed"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Peças concebidas com fibra inteligente <strong className="text-[#050505] font-medium">Emana®</strong> da <span className="text-[#050505] font-medium">vivra wear</span>. Uma fusão inabalável entre alta costura minimalista e regeneração bioativa profunda para o seu corpo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onExplore}
              className="group relative flex items-center gap-3 bg-[#0047AB] text-white hover:bg-[#003580] px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span className="relative z-10">Discover Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Brand Seal Stamp (Quiet Luxury aesthetic) */}
      <motion.div
        className="absolute right-12 md:right-24 top-1/3 z-10 hidden sm:flex flex-col items-center gap-3 bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-black/5 shadow-md max-w-[200px] text-center"
        initial={{ opacity: 0, scale: 0.8, rotate: -15, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
        transition={{ delay: 1.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative">
          <img 
            src={logoImg} 
            alt="Vivra Seal" 
            className="w-32 h-32 object-contain"
          />
          <div className="absolute inset-0 rounded-full border border-[#0047AB]/20 animate-ping opacity-15 pointer-events-none" />
        </div>
        <span className="text-[10px] font-mono tracking-wider text-[#0047AB] uppercase font-bold">Vivra Wear</span>
        <span className="text-[8px] font-mono tracking-widest text-black/40 uppercase">Selo Original</span>
      </motion.div>

      {/* Decorative Interactive Side Coordinates (Apple Style Architecture Detail) */}
      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end gap-2 text-[#050505]/20 font-mono text-[9px] tracking-widest pointer-events-none">
        <div>LAT 23° 32' 51'' S</div>
        <div>LON 46° 38' 10'' W</div>
        <div className="w-12 h-px bg-black/20 mt-1" />
      </div>

      {/* Scroll Down mouse indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 2 }}
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#050505]/30">SCROLL</span>
        <div className="w-4 h-7 rounded-full border border-black/20 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#0047AB]"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
