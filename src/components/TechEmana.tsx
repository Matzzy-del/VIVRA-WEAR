import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, ShieldCheck, Zap, Layers } from "lucide-react";
import { ASSETS, TECH_FEATURES } from "../data";
import logoImg from "../assets/images/logo.png";

export default function TechEmana() {
  const [activeTab, setActiveTab] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const steps = [
    {
      icon: <Layers className="w-5 h-5 text-[#0047AB]" />,
      title: "1. Absorção Térmica",
      desc: "O tecido Emana® absorve o calor irradiado naturalmente pelo seu corpo durante qualquer atividade física ou em repouso."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0047AB]" />,
      title: "2. Conversão Bioativa",
      desc: "Os minerais bioativos integrados de forma permanente no DNA do fio convertem esse calor em Raios Infravermelhos Longos (F.I.R.)."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#0047AB]" />,
      title: "3. Retorno Estimulante",
      desc: "Os raios F.I.R. penetram suavemente nas camadas da pele, promovendo a bioestimulação celular profunda, microcirculação e regeneração."
    }
  ];

  return (
    <section id="tecnologia" className="relative py-16 sm:py-24 bg-[#FAF9F6] text-[#050505] overflow-hidden">
      {/* Decorative large "EMANA" background text */}
      <div className="absolute right-0 bottom-0 text-[18vw] font-bold tracking-tighter text-black/[0.035] uppercase select-none pointer-events-none">
        EMANA TECH
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Visual Macro Fabric & Interactive Glowing Simulation */}
          <div className="lg:col-span-6 flex flex-col items-center" style={{ perspective: 1200 }}>
            <motion.div
              className="relative w-full max-w-md aspect-square rounded-[32px] overflow-hidden border border-black/5 shadow-xl bg-[#050505] cursor-grab active:cursor-grabbing origin-center"
              data-cursor="drag"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: isHovered ? -coords.y * 32 : 0,
                rotateY: isHovered ? coords.x * 32 : 0,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* Actual Generated Fabric Image with ultra-strong interactive 3D zoom */}
              <motion.img
                src={ASSETS.emanaDetail}
                alt="Tecido Emana Micro Detail"
                className="w-full h-full object-cover filter brightness-[95%] contrast-[102%] pointer-events-none origin-center"
                referrerPolicy="no-referrer"
                animate={{
                  scale: isHovered ? 2.5 : 1.0,
                  x: isHovered ? -coords.x * 160 : 0,
                  y: isHovered ? -coords.y * 160 : 0,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 25 }}
              />

              {/* Pulsing Heat Signature Ripple Effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0047AB]/15 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="absolute w-40 h-40 border border-[#0047AB]/20 rounded-full"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.4, 0.1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-64 h-64 border border-[#0047AB]/10 rounded-full"
                  animate={{ scale: [1, 2.2, 1], opacity: [0.05, 0.2, 0.05] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                />
              </div>

              {/* Holographic Brand Sticker floating in 3D parallax */}
              <div 
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 border border-black/5 rounded-2xl shadow-lg pointer-events-none flex items-center justify-center"
                style={{ transform: "translateZ(40px)" }}
              >
                <img 
                  src={logoImg} 
                  alt="Vivra Stamp" 
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Holographic specs tag */}
              <div 
                className="absolute bottom-6 left-6 bg-white/85 backdrop-blur-md px-4 py-2 border border-black/5 rounded-xl flex items-center gap-2 shadow-md pointer-events-none"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="w-2 h-2 rounded-full bg-[#0047AB] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#050505] uppercase font-bold">EMANA® BIO-ACTIVE WEAVE</span>
              </div>
            </motion.div>

            {/* Micro details panel below the macro photo */}
            <div className="w-full max-w-md mt-6 flex justify-between px-2 text-[#050505]/70 font-mono text-[10px] tracking-wider font-medium">
              <span>MODELO: 3D TECH FIBER</span>
              <span>BIO-ESTIMULAÇÃO: ATIVA 100%</span>
            </div>
          </div>

          {/* Right Column: Narrative Explanations and Interactive Tabs */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono tracking-[0.3em] text-[#0047AB] uppercase font-bold">INFRARED TEXTILE SCIENCE</span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#050505] leading-tight">
                Tecnologia invisível que trabalha para o seu bem-estar.
              </h2>
            </div>

            {/* Mini Description Tab Navigator */}
            <div className="flex border-b border-black/10">
              {TECH_FEATURES.map((feat, index) => (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(index)}
                  className={`py-3 px-4 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 relative cursor-pointer ${
                    activeTab === index ? "text-[#050505] font-bold" : "text-[#050505]/65 hover:text-[#050505]/90 font-medium"
                  }`}
                >
                  {feat.title.split(" ")[0]}
                  {activeTab === index && (
                    <motion.div
                      layoutId="techTabIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0047AB]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 15, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -15, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[11px] font-mono text-[#0047AB] tracking-wider uppercase font-bold">
                    {TECH_FEATURES[activeTab].subtitle}
                  </span>
                  <h3 className="text-xl font-normal text-[#050505] tracking-tight">
                    {TECH_FEATURES[activeTab].title}
                  </h3>
                  <p className="text-sm text-[#050505]/85 font-light leading-relaxed">
                    {TECH_FEATURES[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Flow Steps Progress Loop */}
            <div className="flex flex-col gap-4 pt-6 border-t border-black/10">
              <h4 className="text-xs font-mono tracking-widest uppercase text-[#050505]/65 mb-2 font-bold">O Ciclo de Estimulação</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-5 bg-black/[0.02] border border-black/5 rounded-2xl hover:border-[#0047AB]/30 hover:bg-[#FFFFFF] hover:shadow-xl transition-all duration-300">
                    <div className="p-2 w-fit bg-[#0047AB]/5 rounded-xl">
                      {step.icon}
                    </div>
                    <div className="text-xs font-bold text-[#050505]">{step.title}</div>
                    <div className="text-[11px] text-[#050505]/80 leading-relaxed font-light">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
