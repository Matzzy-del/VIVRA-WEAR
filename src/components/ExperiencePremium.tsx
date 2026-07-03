import { motion } from "motion/react";
import { Heart, Zap, Sparkles } from "lucide-react";

export default function ExperiencePremium() {
  const experiences = [
    {
      icon: <Zap className="w-5 h-5 text-[#0047AB]" />,
      title: "Infravermelho Longo",
      tag: "TERMOREGULAÇÃO",
      description: "O fio Emana® converte o calor do próprio corpo em raios infravermelhos longos. Essa energia penetra na pele, promovendo um equilíbrio térmico inteligente e constante durante a prática."
    },
    {
      icon: <Heart className="w-5 h-5 text-[#0047AB]" />,
      title: "Estímulo à Microcirculação",
      tag: "SAÚDE ATIVA",
      description: "Aumenta o fluxo sanguíneo local em nível celular, melhorando a oxigenação dos tecidos. Menos fadiga e mais disposição para suas práticas de yoga e movimentos diários."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#0047AB]" />,
      title: "Firmeza & Recuperação",
      tag: "ESTÉTICA & PERFORMANCE",
      description: "O uso contínuo reduz a fadiga muscular e melhora significativamente a elasticidade da pele, suavizando imperfeições. Tecnologia científica a serviço da beleza e do bem-estar."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF9F6] text-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Title row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-[0.3em] text-[#0047AB] uppercase font-bold">BIO-ACTIVE PILARES</span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#050505] leading-none editorial-type">
              A Ciência Emana®
            </h2>
          </div>
          <div className="lg:col-span-4 text-sm font-light text-[#050505]/85 leading-relaxed">
            A união perfeita entre ciência têxtil e estética premium. Conheça as propriedades bioativas que transformam nossas roupas em um tratamento ativo para o seu corpo.
          </div>
        </div>

        {/* Dynamic Card Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col justify-between p-8 sm:p-10 glass-panel hover:border-[#0047AB]/40 hover:bg-white rounded-[28px] transition-all duration-500 h-[380px] shadow-sm hover:shadow-md relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#0047AB] uppercase font-bold">
                    {exp.tag}
                  </span>
                  <div className="p-2.5 bg-[#050505]/[0.05] rounded-2xl group-hover:bg-[#0047AB]/10 transition-colors duration-500">
                    {exp.icon}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-normal text-[#050505] tracking-tight">{exp.title}</h3>
                  <p className="text-xs sm:text-sm text-[#050505]/80 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Sophisticated design details */}
              <div className="text-[10px] font-mono text-[#050505]/60 border-t border-[#050505]/10 pt-4 flex justify-between items-center relative z-10 font-bold">
                <span>VIVRA DESIGN PRINCIPLE</span>
                <span>0{idx + 1}</span>
              </div>

              {/* Decorative light gray corner block */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#050505]/[0.01] group-hover:bg-[#0047AB]/5 rounded-full blur-2xl transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
