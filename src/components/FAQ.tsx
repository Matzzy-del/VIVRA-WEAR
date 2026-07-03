import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-[#FAF9F6] text-[#050505]">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20 flex flex-col gap-4 items-center"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#0047AB] uppercase font-bold">ANSWERS & SPECS</span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight editorial-type">
            Perguntas Frequentes
          </h2>
          <div className="w-12 h-0.5 bg-[#0047AB] mt-2" />
        </motion.div>

        {/* Accordion list */}
        <motion.div 
          className="flex flex-col border-t border-[#050505]/10"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-[#050505]/10 transition-colors duration-300 hover:bg-[#050505]/[0.02]"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-normal text-[#050505] group-hover:text-[#0047AB] transition-colors duration-300">
                    {item.question}
                  </span>
                  <div className="p-2 border border-[#050505]/20 group-hover:border-[#0047AB]/30 rounded-full transition-all duration-300 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-[#0047AB]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#050505]/80 group-hover:text-[#0047AB]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-8 text-xs sm:text-sm text-[#050505]/85 font-light leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
