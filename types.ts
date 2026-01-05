
import React from 'react';

export interface TGPBenchmarkData {
  id: number;
  name: string;
  baselineEnergy: number; // J/token
  tgpEnergy: number;      // J/token
  baselineSpeed: number;  // tokens/s
  tgpSpeed: number;       // tokens/s
  baselineVolume: number; // Tokens
  tgpVolume: number;      // Tokens
  baselineQuality: number; // 0-12
  tgpQuality: number;      // 0-12
}

export interface KPICardProps {
  label: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
  colorClass?: string;
}

export interface ComparisonCardProps {
  title: string;
  baselineResult: string;
  patentResult: string;
  detailLabel: string;
  detailValue: string;
}
