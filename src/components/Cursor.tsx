import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

const HOVER_SELECTOR = 'a, button, [data-cursor-hover]';

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      setIsHovering(Boolean(target?.closest(HOVER_SELECTOR)));
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerover', handleOver);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
    };
  }, [x, y]);

  return (
    <motion.div
      className="cursor"
      data-hover={isHovering}
      style={{ translateX: springX, translateY: springY }}
      aria-hidden="true"
    />
  );
}
