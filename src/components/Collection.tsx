import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Check, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";

export default function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [addedToBag, setAddedToBag] = useState(false);
  const [selectedColorIndices, setSelectedColorIndices] = useState<Record<string, number>>({});

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] || "M");
    setAddedToBag(false);
  };

  const handleAddToBag = () => {
    setAddedToBag(true);
    setTimeout(() => {
      setAddedToBag(false);
      setSelectedProduct(null);
    }, 2000);
  };

  return (
    <section id="colecao" className="relative py-16 sm:py-24 bg-[#FAF9F6] text-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Editorial Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono tracking-[0.3em] text-[#0047AB] uppercase font-bold">ESTILO EDITORIAL</span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#050505] leading-none editorial-type">
              A Coleção Vivra
            </h2>
          </div>
          <p className="text-sm font-light text-[#050505]/85 max-w-sm leading-relaxed">
            Silhuetas minimalistas construídas com engenharia têxtil de alta precisão. Criadas para acompanhar o ritmo orgânico do seu corpo.
          </p>
        </div>

        {/* Uniform Symmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product, index) => {
            const subLabels = [
              "DESIGN MINIMALISTA REGENERATIVO",
              "CONFORTO E SUSTENTAÇÃO INVISÍVEL",
              "MACACÃO TECH DE ALTA PERFORMANCE"
            ];

            const activeColorIndex = selectedColorIndices[product.id] ?? 0;
            const activeColor = product.colors?.[activeColorIndex] || { name: "", hex: "", image: product.image };
            
            return (
              <motion.div
                key={product.id}
                className="flex flex-col gap-4 group cursor-pointer"
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openProduct(product)}
                data-cursor="view"
              >
                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-black/5 bg-neutral-100 shadow-lg">
                  <img
                    src={activeColor.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Premium overlay to ensure excellent readability of white text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  {/* Top Editorial tag */}
                  <div className="absolute top-6 left-6 text-[10px] font-mono text-white/50 tracking-widest uppercase">
                    VIVRA EDITORIAL NO.0{index + 1}
                  </div>

                  {/* Product Info inside Card */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                    <span className="text-[9px] font-mono tracking-widest text-[#0047AB] uppercase font-bold bg-white px-3 py-1 rounded-full w-fit">
                      {product.category}
                    </span>
                    <div className="flex justify-between items-end gap-2">
                      <h3 className="text-lg sm:text-xl font-light tracking-tight text-white leading-tight editorial-type">{product.name}</h3>
                      <div className="text-sm font-light text-white/95 shrink-0">{product.price}</div>
                    </div>
                  </div>
                </div>

                {/* Color Buttons Selector */}
                {product.colors && (
                  <div className="flex items-center gap-2 px-2">
                    <span className="text-[10px] font-mono text-[#050505]/50 uppercase tracking-wider">Cores:</span>
                    <div className="flex gap-2">
                      {product.colors.map((color, colorIdx) => {
                        const isActive = activeColorIndex === colorIdx;
                        return (
                          <button
                            key={color.name}
                            onClick={(e) => {
                              e.stopPropagation(); // Impede que o clique abra o modal de visualização do produto
                              setSelectedColorIndices((prev) => ({
                                ...prev,
                                [product.id]: colorIdx,
                              }));
                            }}
                            className={`w-4 h-4 rounded-full border transition-all duration-300 relative ${
                              isActive
                                ? "border-black scale-110 ring-2 ring-black/10 ring-offset-1"
                                : "border-black/15 hover:border-black/30 hover:scale-105"
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        );
                      })}
                    </div>
                    <span className="text-[10px] font-mono text-[#0047AB] ml-auto font-medium">
                      {activeColor.name}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center px-2 text-[10px] sm:text-[11px] text-[#050505]/80 font-mono font-medium">
                  <span className="font-semibold">{subLabels[index]}</span>
                  <span className="group-hover:text-[#0047AB] transition-colors flex items-center gap-1 font-bold shrink-0">
                    CONHECER PEÇA <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Product Quick-View Lookbook Modal */}
      <AnimatePresence>
        {selectedProduct && (() => {
          const activeColorIndexForModal = selectedColorIndices[selectedProduct.id] ?? 0;
          const modalActiveColor = selectedProduct.colors?.[activeColorIndexForModal] || { name: "", hex: "", image: selectedProduct.image };
          
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/50 backdrop-blur-xl">
              <motion.div
                className="relative bg-[#FFFFFF] border border-black/5 w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 border border-black/5 text-black hover:scale-105 transition-all cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left side Image */}
                  <div className="relative aspect-[3/4] md:aspect-auto md:h-[600px] bg-neutral-100 border-r border-black/5">
                    <img
                      src={modalActiveColor.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Right side details */}
                  <div className="p-8 md:p-12 flex flex-col justify-between h-full md:h-[600px] overflow-y-auto">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#0047AB] font-bold">
                          {selectedProduct.category}
                        </span>
                        <h3 className="text-3xl font-light tracking-tight text-[#050505] editorial-type mt-1">{selectedProduct.name}</h3>
                        <div className="text-xl font-light text-[#050505]/95 mt-1">{selectedProduct.price}</div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#050505]/85 font-light leading-relaxed">
                        {selectedProduct.description}
                      </p>

                      {/* Features checklist */}
                      <div className="flex flex-col gap-2.5">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#050505]/70 font-bold">Especificações Técnicas</h4>
                        {selectedProduct.details.map((detail, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs text-[#050505]/90 font-light">
                            <Check className="w-4 h-4 text-[#0047AB] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Color Selector inside Modal */}
                      {selectedProduct.colors && (
                        <div className="flex flex-col gap-3">
                          <div className="flex justify-between items-center">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-[#050505]/70 font-bold">Selecionar Cor</h4>
                            <span className="text-[11px] font-mono text-[#0047AB] font-semibold">
                              {modalActiveColor.name}
                            </span>
                          </div>
                          <div className="flex gap-2.5">
                            {selectedProduct.colors.map((color, colorIdx) => {
                              const isActive = activeColorIndexForModal === colorIdx;
                              return (
                                <button
                                  key={color.name}
                                  onClick={() => {
                                    setSelectedColorIndices((prev) => ({
                                      ...prev,
                                      [selectedProduct.id]: colorIdx,
                                    }));
                                  }}
                                  className={`w-8 h-8 rounded-full border transition-all duration-300 relative cursor-pointer ${
                                    isActive
                                      ? "border-black scale-110 ring-2 ring-black/10 ring-offset-2"
                                      : "border-black/15 hover:border-black/30 hover:scale-105"
                                  }`}
                                  style={{ backgroundColor: color.hex }}
                                  title={color.name}
                                />
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Size Selector */}
                      <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#050505]/70 font-bold">Selecionar Tamanho</h4>
                        <div className="flex flex-wrap gap-2.5">
                          {selectedProduct.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-4 py-2 border rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                                selectedSize === size
                                  ? "border-black bg-black text-white font-semibold"
                                  : "border-black/10 hover:border-black/30 text-black bg-transparent"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Buy/Bag Trigger */}
                    <div className="mt-8 pt-6 border-t border-black/5 flex gap-4">
                      <button
                        onClick={handleAddToBag}
                        disabled={addedToBag}
                        className={`flex-1 py-4 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-500 cursor-pointer ${
                          addedToBag
                            ? "bg-[#0047AB] text-white"
                            : "bg-black text-white hover:bg-black/85"
                        }`}
                      >
                        {addedToBag ? "Adicionado à Sacola" : "Adicionar à Sacola"}
                      </button>
                      <div className="px-5 py-4 bg-black/5 rounded-full flex items-center justify-center border border-black/5 font-mono text-xs text-black font-semibold">
                        {selectedSize}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
