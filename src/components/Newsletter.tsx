import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate luxury slow subscription process
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF9F6] text-[#050505] overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-black/5 pointer-events-none" />

      <motion.div 
        className="max-w-4xl mx-auto px-6 sm:px-12 md:px-16 relative z-10 text-center"
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        
        <div className="flex flex-col gap-4 items-center mb-12">
          <span className="text-xs font-mono tracking-[0.4em] text-[#0047AB] uppercase font-bold">EXCLUSIVE CIRCLE</span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight max-w-xl editorial-type">
            Sua conexão com o silêncio começa aqui.
          </h2>
          <p className="text-xs sm:text-sm text-[#050505]/85 font-light max-w-md leading-relaxed mt-2">
            Inscreva-se no círculo exclusivo da Vivra Wear e seja notificado em primeira mão sobre novos drops editoriais, inovações têxteis e ensaios privados.
          </p>
        </div>

        {/* Dynamic form area */}
        <AnimatePresence mode="wait">
          {!subscribed ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="relative max-w-md mx-auto w-full flex items-center border-b border-black/30 focus-within:border-[#0047AB] transition-all duration-500 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu endereço de e-mail"
                className="w-full bg-transparent border-none text-[#050505] text-sm font-light placeholder-[#050505]/50 focus:outline-none focus:ring-0"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="p-2 text-[#050505] hover:text-[#0047AB] transition-colors cursor-pointer shrink-0"
                aria-label="Inscrever-se"
              >
                {loading ? (
                  <motion.div
                    className="w-4 h-4 border border-black/20 border-t-[#0047AB] rounded-full animate-spin"
                  />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center gap-3 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-3 bg-[#0047AB]/10 rounded-full border border-[#0047AB]/20 mb-2">
                <Check className="w-6 h-6 text-[#0047AB]" />
              </div>
              <h3 className="text-lg font-light text-[#050505]">Seu e-mail foi homologado.</h3>
              <p className="text-xs text-[#050505]/75 max-w-xs font-light">
                Bem-vindo ao Vivra Circle. Você receberá nosso próximo ensaio editorial diretamente em sua caixa de entrada.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}
