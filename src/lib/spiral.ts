export interface SpiralParams {
  turns?: number;
  a?: number;
  b?: number;
  steps?: number;
  cx?: number;
  cy?: number;
}

export function buildSpiralPath({ turns = 4.5, a = 17, b = 0.28, steps = 400, cx = 300, cy = 300 }: SpiralParams) {
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * turns * 2 * Math.PI;
    const r = a * Math.exp(b * theta * 0.35);
    const x = cx + r * Math.cos(theta);
    const y = cy + r * Math.sin(theta);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
  }
  return d;
}
