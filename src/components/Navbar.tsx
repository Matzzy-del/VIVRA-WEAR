import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import logoImg from "../assets/images/logo.png";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Manifesto", id: "manifesto" },
    { label: "Tecnologia", id: "tecnologia" },
    { label: "Coleção", id: "colecao" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-in-out ${
          isScrolled
            ? "py-4 px-6 md:px-12 glass-nav"
            : "py-8 px-8 md:px-16 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <motion.div
              animate={{
                scale: isScrolled ? 0.95 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center"
            >
              {!logoFailed ? (
                <img 
                  src={logoImg} 
                  alt="VIVRAWEAR Logo" 
                  className="h-16 md:h-20 w-auto object-contain"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <span className="font-sans text-xl md:text-2xl font-bold tracking-tighter text-[#050505] flex items-center">
                  VIVRA<span className="font-light">WEAR</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB] ml-1.5 animate-pulse" />
                </span>
              )}
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 font-medium py-2 cursor-pointer ${
                    isActive ? "text-[#0047AB]" : "text-[#050505]/60 hover:text-[#050505]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0047AB]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("colecao")}
              className="hidden sm:flex items-center gap-2 border border-[#050505]/10 hover:border-[#0047AB]/30 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-[#050505] transition-all duration-500 hover:bg-[#0047AB] hover:text-white cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Ver Catálogo</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#050505] hover:text-[#050505]/70 transition-colors md:hidden cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Slide-Over */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-35 flex flex-col pt-32 px-8 pb-12 justify-between border-l border-black/5"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate(item.id);
                  }}
                  className="text-2xl font-light tracking-widest text-[#050505] text-left uppercase py-2 border-b border-black/5 cursor-pointer flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className={activeSection === item.id ? "text-[#0047AB] font-normal" : ""}>
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-[#050505]/30">0{index + 1}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate("colecao");
                }}
                className="w-full py-4 rounded-full bg-[#0047AB] text-white font-bold text-xs uppercase tracking-widest text-center shadow-lg shadow-[#0047AB]/20 cursor-pointer"
              >
                Explorar Coleção
              </button>
              <div className="text-center text-[10px] font-mono text-[#050505]/40 tracking-wider">
                © {new Date().getFullYear()} VIVRA WEAR. LUXURY IN MOTION.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
