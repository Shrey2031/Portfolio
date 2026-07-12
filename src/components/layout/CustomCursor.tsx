import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], input, textarea"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{
        scale: isPointer ? 1.8 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      className="pointer-events-none fixed top-0 left-0 z-[200] h-6 w-6 rounded-full border border-amber-400 mix-blend-difference hidden md:block"
      aria-hidden="true"
    />
  );
}
