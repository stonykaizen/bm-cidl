
import React from 'react';
import { KPICardProps } from '../types';

export const KPICard: React.FC<KPICardProps> = ({ label, value, subtext, icon, colorClass = "text-green-500" }) => {
  return (
    <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg cyber-glow">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">{label}</span>
        <div className={`${colorClass}`}>
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-white mb-2 font-mono">
        {value}
      </div>
      <div className="text-xs text-gray-500 leading-relaxed italic">
        {subtext}
      </div>
    </div>
  );
};
