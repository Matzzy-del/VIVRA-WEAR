import { motion } from "motion/react";
import { Activity, Sparkles, Flame, Shield } from "lucide-react";
import { BENEFITS } from "../data";

export default function Benefits() {
  const icons = [
    <Activity className="w-5 h-5 text-[#0047AB]" />,
    <Sparkles className="w-5 h-5 text-[#0047AB]" />,
    <Flame className="w-5 h-5 text-[#0047AB]" />,
    <Shield className="w-5 h-5 text-[#0047AB]" />,
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF9F6] text-[#050505] overflow-hidden">
      {/* Light elegant grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#050505_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-16 sm:mb-20 flex flex-col gap-4"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#0047AB] uppercase font-bold">RESULTS & EVIDENCE</span>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#050505] leading-[1.1] editorial-type">
            Estudos clínicos que validam a alta tecnologia.
          </h2>
          <p className="text-sm sm:text-base text-[#050505]/85 font-light max-w-xl leading-relaxed">
            A eficácia do tecido Emana® não é uma promessa, é ciência. Resultados homologados por testes em laboratórios internacionais de máxima relevância científica.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="group relative glass-panel hover:border-[#0047AB]/40 hover:bg-white rounded-[28px] p-8 pb-6 flex flex-col justify-between min-h-[380px] lg:min-h-[360px] h-auto transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Details */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#050505]/[0.05] group-hover:bg-[#0047AB]/10 rounded-2xl transition-all duration-500">
                    {icons[index]}
                  </div>
                  {benefit.metric && (
                    <span className="text-[10px] font-mono tracking-widest text-[#0047AB] uppercase font-bold bg-[#0047AB]/5 px-3 py-1 rounded-full">
                      COMPROVADO
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-[#050505] tracking-tight">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-[#050505]/80 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Bottom Large Metric Highlight */}
              <div className="mt-6 flex items-baseline justify-between pt-4 border-t border-[#050505]/10 gap-2">
                <span className={`text-[#0047AB] group-hover:scale-[1.02] transition-all duration-500 origin-left serif-display ${
                  benefit.metric.length > 5
                    ? "text-xl sm:text-2xl tracking-tight leading-tight font-semibold"
                    : "text-4xl sm:text-5xl tracking-tighter leading-none font-bold"
                }`}>
                  {benefit.metric}
                </span>
                <span className="text-[10px] font-mono text-[#050505]/60 font-bold shrink-0">0{index + 1}</span>
              </div>

              {/* Decorative Subtle Background Glow on Hover */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#0047AB]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Certification Highlight Footer Row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-[#050505]/10 pt-8 gap-6 text-[#050505]/70 text-xs font-mono tracking-wider uppercase font-bold">
          <span>PATENTE GLOBAL: WO2011116447A1</span>
          <span>OEKO-TEX® STANDARD 100 CLASS I ACCREDITED</span>
          <span>ANVISA REGISTRO SEGURO</span>
        </div>

      </div>
    </section>
  );
}
