import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "view" | "drag" | "explore">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth trailing performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Premium elastic spring configs
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Traversal to find hover targets with data-cursor attributes
      let target = e.target as HTMLElement | null;
      let detectedType: typeof cursorType = "default";

      while (target && target !== document.body) {
        const attr = target.getAttribute("data-cursor");
        if (attr === "view" || attr === "drag" || attr === "explore") {
          detectedType = attr as typeof cursorType;
          break;
        }
        target = target.parentElement;
      }
      setCursorType(detectedType);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  // Render variations based on type
  const isSpecial = cursorType !== "default";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        width: isSpecial ? 80 : 12,
        height: isSpecial ? 80 : 12,
        backgroundColor: isSpecial ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 1)",
      }}
      animate={{
        scale: isSpecial ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {isSpecial && (
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-black select-none">
          {cursorType}
        </span>
      )}
    </motion.div>
  );
}
