import { motion } from "motion/react";
import { Compass, Shield, Heart } from "lucide-react";

export default function Manifesto() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="manifesto" className="relative bg-[#FAF9F6] text-[#050505] py-16 sm:py-24 px-6 sm:px-12 md:px-16 overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-12 md:left-24 w-px h-full bg-gradient-to-b from-black/5 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
        >
          {/* Left Column: Vertical Brand Pill / Label */}
          <div className="lg:col-span-3 lg:pt-3">
            <motion.div variants={itemVariants} className="flex lg:flex-col items-center lg:items-start gap-6">
              <div className="relative group">
                <img 
                  src="https://i.imgur.com/oAXLhvK.png" 
                  alt="Vivra Seal" 
                  className="w-32 h-32 object-contain transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 rounded-full border border-[#0047AB]/10 animate-ping opacity-20 pointer-events-none" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#050505]/65 uppercase font-bold">
                  O MANIFESTO
                </span>
                <div className="hidden lg:block w-8 h-px bg-[#0047AB]" />
                <div className="text-[11px] font-mono text-[#0047AB] tracking-widest uppercase font-semibold">
                  VIVRA DESIGN LAB
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Giant Statement & Details */}
          <div className="lg:col-span-9 flex flex-col gap-12 sm:gap-16">
            {/* Massive statement */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-[#050505] editorial-type"
            >
              Leve <span className="serif-display font-light italic text-[#050505]">saúde</span> no corpo e <span className="serif-display font-light text-[#0047AB]">vivra</span> no coração.
            </motion.h2>

            <motion.div variants={itemVariants} className="h-px bg-black/10 w-full" />

            {/* Asymmetrical Description block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                <p className="text-sm text-[#050505]/85 font-light leading-relaxed">
                  A Vivra Wear nasceu da inconformidade com o excesso e o barulho visual. Inspirada nas proporções precisas do design modernista e na quietude do luxo contemporâneo, criamos peças que servem como uma segunda pele inteligente.
                </p>
                <p className="text-sm text-[#050505]/85 font-light leading-relaxed">
                  Cada ponto de costura, cada fibra de poliamida Emana® e cada curva anatômica são calculados para que o vestuário trabalhe para a sua regeneração, enquanto você domina o mundo exterior.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                <p className="text-sm text-[#050505]/80 font-mono leading-relaxed uppercase tracking-wider text-right border-r-2 border-[#0047AB] pr-4 font-medium">
                  “A verdadeira sofisticação reside na ausência completa de esforço.”
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[#050505]/95">
                    <Compass className="w-4 h-4 text-[#0047AB]" />
                    <span className="text-xs uppercase font-mono tracking-widest font-semibold">Elegância em repouso</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#050505]/95">
                    <Shield className="w-4 h-4 text-[#0047AB]" />
                    <span className="text-xs uppercase font-mono tracking-widest font-semibold">Tecnologia invisível</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#050505]/95">
                    <Heart className="w-4 h-4 text-[#0047AB]" />
                    <span className="text-xs uppercase font-mono tracking-widest font-semibold">Bem-estar bioativo</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
