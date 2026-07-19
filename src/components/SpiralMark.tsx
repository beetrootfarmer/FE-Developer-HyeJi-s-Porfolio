import { buildSpiralPath } from '../lib/spiral';

interface SpiralMarkProps {
  size?: number;
  turns?: number;
  className?: string;
}

export function SpiralMark({ size = 28, turns = 2.5, className }: SpiralMarkProps) {
  const path = buildSpiralPath({ turns, a: 3.2, b: 0.28, steps: 220, cx: 60, cy: 60 });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <path d={path} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="60" cy="60" r="4.5" fill="currentColor" />
    </svg>
  );
}
