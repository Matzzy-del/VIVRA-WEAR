import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#FFFFFF] text-[#050505] pt-24 pb-12 overflow-hidden border-t border-black/5">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 md:left-24 w-px h-full bg-black/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 mb-16 pb-16 border-b border-black/5">
          
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center">
              {!logoFailed ? (
                <img 
                  src="https://i.imgur.com/oAXLhvK.png" 
                  alt="VIVRAWEAR Logo" 
                  className="h-20 md:h-24 w-auto object-contain self-start"
                  onError={() => setLogoFailed(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="font-sans text-2xl font-bold tracking-tighter">
                  VIVRA<span className="font-light">WEAR</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB] inline-block ml-1 animate-pulse" />
                </div>
              )}
            </div>
            <p className="text-xs text-[#050505]/50 max-w-sm font-light leading-relaxed">
              Quiet Luxury em movimento. Elevando o vestuário ao patamar de bem-estar bioativo através do fio inteligente Emana® patenteado internacionalmente.
            </p>
            
            <div className="flex flex-col gap-2.5 text-xs text-[#050505]/75 font-light mt-2 border-t border-black/5 pt-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-wider uppercase text-[#050505]/40 font-bold">Telefone:</span>
                <a href="tel:47991503663" className="hover:text-[#0047AB] hover:underline transition-all font-medium">
                  (47) 99150-3663
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-wider uppercase text-[#050505]/40 font-bold">E-mail:</span>
                <a href="mailto:contato@vivra.com" className="hover:text-[#0047AB] hover:underline transition-all font-medium">
                  contato@vivra.com
                </a>
              </div>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#050505]/30 font-bold">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => onNavigate("manifesto")}
                  className="text-xs text-[#050505]/60 hover:text-[#0047AB] hover:underline transition-all font-light cursor-pointer"
                >
                  O Manifesto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("tecnologia")}
                  className="text-xs text-[#050505]/60 hover:text-[#0047AB] hover:underline transition-all font-light cursor-pointer"
                >
                  Ciência Emana®
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("colecao")}
                  className="text-xs text-[#050505]/60 hover:text-[#0047AB] hover:underline transition-all font-light cursor-pointer"
                >
                  Ver Coleção
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="text-xs text-[#050505]/60 hover:text-[#0047AB] hover:underline transition-all font-light cursor-pointer"
                >
                  Suporte & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#050505]/30 font-bold">Canais Digitais</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#050505]/60 font-light">
              <li>
                <a href="#instagram" className="hover:text-[#0047AB] hover:underline transition-all">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#pinterest" className="hover:text-[#0047AB] hover:underline transition-all">
                  Pinterest Lookbook
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#0047AB] hover:underline transition-all">
                  Editorial Journal
                </a>
              </li>
              <li>
                <a href="#vimeo" className="hover:text-[#0047AB] hover:underline transition-all">
                  Vimeo Cinema
                </a>
              </li>
            </ul>
          </div>

          {/* Actions Column */}
          <div className="md:col-span-2 flex justify-end items-start">
            <button
              onClick={scrollUp}
              className="flex items-center gap-2 border border-black/10 hover:border-[#0047AB]/30 hover:bg-[#0047AB]/5 px-4 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#050505] transition-all duration-300 cursor-pointer font-bold"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Corporate / Disclosures Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-[#050505]/30 tracking-widest uppercase gap-6 font-medium">
          <div>
            © {new Date().getFullYear()} VIVRA WEAR DESIGN CORP. DIREITOS RESERVADOS.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <span>PATENTES TECNOLÓGICAS: EMANA® NO. WO2011116447</span>
            <span>CNPJ: 00.000.000/0000-00</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
