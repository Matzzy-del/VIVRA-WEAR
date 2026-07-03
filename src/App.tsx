import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import TechEmana from "./components/TechEmana";
import Benefits from "./components/Benefits";
import Collection from "./components/Collection";
import ExperiencePremium from "./components/ExperiencePremium";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Top luxury scroll progress bar using motion/react
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Section observer to keep active state of navbar highlighted accurately
  useEffect(() => {
    const sections = ["hero", "manifesto", "tecnologia", "colecao", "faq"];
    
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.25 } // Trigger when at least 25% of section is visible
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-[#050505] min-h-screen selection:bg-[#0047AB] selection:text-white antialiased">
      {/* Luxury Scroll progress indicator bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#0047AB] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Premium custom mouse trailing cursor */}
      <CustomCursor />

      {/* Glassmorphic Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Core Campaign Elements */}
      <Hero
        onExplore={() => handleNavigate("colecao")}
      />
      <Manifesto />
      <Collection />
      <TechEmana />
      <Benefits />
      <ExperiencePremium />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
