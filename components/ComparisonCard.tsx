
import React from 'react';
import { ComparisonCardProps } from '../types';
import { ShieldAlert, ShieldCheck, Zap } from 'lucide-react';

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ 
  title, 
  baselineResult, 
  patentResult, 
  detailLabel, 
  detailValue 
}) => {
  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-800 bg-[#0d0d0d]">
        <h3 className="text-white font-semibold text-sm font-mono flex items-center gap-2">
          <Zap size={14} className="text-cyan-500" />
          {title}
        </h3>
      </div>
      
      <div className="flex-grow grid grid-cols-2 gap-px bg-gray-800">
        <div className="p-4 bg-[#0a0a0a]">
          <div className="text-[10px] text-gray-500 uppercase tracking-tighter mb-2 font-mono">Referencia (Rojo)</div>
          <div className="flex items-start gap-2 text-red-400">
            <ShieldAlert size={16} className="mt-1 flex-shrink-0" />
            <span className="text-xs leading-tight">{baselineResult}</span>
          </div>
        </div>
        <div className="p-4 bg-[#0a0a0a]">
          <div className="text-[10px] text-gray-500 uppercase tracking-tighter mb-2 font-mono">Patente (Cian)</div>
          <div className="flex items-start gap-2 text-cyan-400">
            <ShieldCheck size={16} className="mt-1 flex-shrink-0" />
            <span className="text-xs leading-tight">{patentResult}</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#0d0d0d] flex justify-between items-center text-[10px] font-mono border-t border-gray-800">
        <span className="text-gray-500">{detailLabel}</span>
        <span className="text-cyan-500 font-bold">{detailValue}</span>
      </div>
    </div>
  );
};
