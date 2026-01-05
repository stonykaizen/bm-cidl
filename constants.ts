
import { TGPBenchmarkData } from './types';

export const TGP_DATA: TGPBenchmarkData[] = [
  { id: 1, name: '1', baselineEnergy: 0.09, tgpEnergy: 0.07, baselineSpeed: 17.8, tgpSpeed: 13.2, baselineVolume: 430, tgpVolume: 1250, baselineQuality: 1.8, tgpQuality: 1.9 },
  { id: 2, name: '2', baselineEnergy: 0.06, tgpEnergy: 0.08, baselineSpeed: 17.2, tgpSpeed: 12.2, baselineVolume: 420, tgpVolume: 1750, baselineQuality: 0.0, tgpQuality: 3.3 },
  { id: 3, name: '3', baselineEnergy: 0.04, tgpEnergy: 0.05, baselineSpeed: 17.3, tgpSpeed: 15.5, baselineVolume: 1010, tgpVolume: 1950, baselineQuality: 1.8, tgpQuality: 5.8 },
  { id: 4, name: '4', baselineEnergy: 0.04, tgpEnergy: 0.08, baselineSpeed: 16.5, tgpSpeed: 11.6, baselineVolume: 820, tgpVolume: 1680, baselineQuality: 0.0, tgpQuality: 6.0 },
  { id: 5, name: '5', baselineEnergy: 0.82, tgpEnergy: 0.06, baselineSpeed: 4.4, tgpSpeed: 13.7, baselineVolume: 780, tgpVolume: 1780, baselineQuality: 11.5, tgpQuality: 7.2 },
  { id: 6, name: '6', baselineEnergy: 0.65, tgpEnergy: 0.05, baselineSpeed: 5.1, tgpSpeed: 12.6, baselineVolume: 1150, tgpVolume: 1760, baselineQuality: 9.7, tgpQuality: 7.3 },
  { id: 7, name: '7', baselineEnergy: 0.25, tgpEnergy: 0.07, baselineSpeed: 10.2, tgpSpeed: 11.6, baselineVolume: 210, tgpVolume: 1520, baselineQuality: 1.8, tgpQuality: 6.0 },
  { id: 8, name: '8', baselineEnergy: 0.74, tgpEnergy: 0.04, baselineSpeed: 4.3, tgpSpeed: 17.9, baselineVolume: 1000, tgpVolume: 2650, baselineQuality: 10.5, tgpQuality: 3.8 },
  { id: 9, name: '9', baselineEnergy: 0.69, tgpEnergy: 0.82, baselineSpeed: 5.0, tgpSpeed: 3.8, baselineVolume: 1110, tgpVolume: 1200, baselineQuality: 10.0, tgpQuality: 7.5 },
  { id: 10, name: '10', baselineEnergy: 0.74, tgpEnergy: 0.72, baselineSpeed: 4.8, tgpSpeed: 5.4, baselineVolume: 990, tgpVolume: 3100, baselineQuality: 11.3, tgpQuality: 6.7 },
  { id: 11, name: '11', baselineEnergy: 0.78, tgpEnergy: 0.68, baselineSpeed: 4.5, tgpSpeed: 4.3, baselineVolume: 890, tgpVolume: 1510, baselineQuality: 9.5, tgpQuality: 11.0 },
  { id: 12, name: '12', baselineEnergy: 0.04, tgpEnergy: 0.05, baselineSpeed: 16.8, tgpSpeed: 14.3, baselineVolume: 930, tgpVolume: 3350, baselineQuality: 9.6, tgpQuality: 10.5 },
  { id: 13, name: '13', baselineEnergy: 0.05, tgpEnergy: 0.03, baselineSpeed: 16.6, tgpSpeed: 14.6, baselineVolume: 750, tgpVolume: 3180, baselineQuality: 9.6, tgpQuality: 10.5 }
];

export const MEMORY_STRESS_DATA = Array.from({ length: 51 }, (_, i) => {
  const tokens = i * 2000;
  const baseline = tokens <= 18000 ? 6.2 + (tokens / 18000) * 5.8 : null;
  const cycle = (tokens % 5000) / 5000;
  const tgp = 6.8 + (cycle * 1.4);
  return { tokens, baseline, tgp };
});

export const HIGH_DENSITY_DATA = Array.from({ length: 241 }, (_, i) => {
  const t = i;
  const plateauBase = 2860; // Ligero desfase hacia arriba
  const plateauTGP = 2840;  // Ligero desfase hacia abajo
  const floor = 850;
  const peaks = [8, 22, 38, 53, 70, 103, 168, 233];
  
  // Lógica Baseline (Roja)
  let baseline = null;
  if (t < 55) {
    if (peaks.slice(0, 4).some(p => Math.abs(t - p) < 1.0)) {
      baseline = 4300 + (Math.sin(t) * 50);
    } else if (t < 5) {
      baseline = floor + (t * 400); 
    } else {
      baseline = plateauBase + (Math.sin(t * 0.8) * 15); // Oscilación mínima diferenciada
    }
  } else if (t < 58) {
    // Transición de colapso rápida pero visible
    baseline = plateauBase - ((t - 55) * 670);
  } else {
    baseline = floor + (Math.random() * 10); // Crash
  }

  // Lógica TGP (Verde)
  let tgp = plateauTGP;
  const isPeak = peaks.some(p => Math.abs(t - p) < 1.2);
  const isDrop = peaks.some(p => t > p && t < p + 3);

  if (isPeak) {
    tgp = 4450 + (Math.cos(t) * 60);
  } else if (isDrop) {
    tgp = floor + (Math.random() * 80);
  } else if (t < 5) {
    tgp = floor + (t * 300);
  } else {
    tgp = plateauTGP + (Math.cos(t * 0.5) * 20); // Oscilación más lenta para distinguir de baseline
  }

  return { time: t, baseline, tgp };
});

export const SYSTEM_IMAGE_URL = "https://img.v0.dev/api/image/v1/592397c8-8835-4309-848e-018693899f80?prompt=laptop+running+ai+monitoring+software+on+a+circuits+table&seed=42";

export const COLORS = {
  baseline: '#b91c1c',
  tgp: '#15803d',
  background: '#050505',
  cardBorder: '#1f2937'
};
