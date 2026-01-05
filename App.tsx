
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Legend,
  AreaChart,
  Area,
  Label,
  ReferenceLine,
  ReferenceArea
} from 'recharts';
import { 
  Zap,
  Activity,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Unplug,
  Info,
  Monitor,
  AlertTriangle,
  Infinity as InfinityIcon,
  Layers
} from 'lucide-react';
import { TGP_DATA, MEMORY_STRESS_DATA, HIGH_DENSITY_DATA, COLORS, SYSTEM_IMAGE_URL } from './constants';
import { KPICard } from './components/KPICard';

const App: React.FC = () => {
  const axisStyle = {
    fontSize: '11px',
    fontFamily: 'JetBrains Mono',
    fill: '#6b7280'
  };

  const labelStyle = {
    fill: '#4b5563',
    fontSize: '10px',
    fontFamily: 'JetBrains Mono',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col gap-8 max-w-[1600px] mx-auto overflow-x-hidden bg-[#050505]">
      {/* Encabezado */}
      <header className="flex flex-col gap-2 pb-6 border-b border-gray-800">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white font-mono tracking-tight uppercase">
          SISTEMA TGP: <span className="text-green-500">CONTINUIDAD DE INFERENCIA EN DISPOSITIVOS LIMITADOS</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
          <p className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-green-500" />
            Método de Particionamiento Semántico y Gestión de Estado Latente
          </p>
          <span className="text-gray-700">|</span>
          <p className="font-mono bg-gray-900/50 px-2 py-1 rounded text-xs">
            Ref: MÉTODO Y SISTEMA PARA LA CONTINUIDAD DE INFERENCIA
          </p>
        </div>
      </header>

      {/* SECCIÓN: TEST DE ALTA DENSIDAD (RÉPLICA FIEL) */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
        <div className="flex flex-col gap-1 border-l-4 border-gray-600 pl-4 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white font-mono uppercase tracking-tight text-center w-full">
            Memory Efficiency: TGP vs Baseline
          </h2>
          <p className="text-gray-400 text-xs font-mono uppercase text-center w-full">
            (High Density Generation Test)
          </p>
        </div>

        <div className="h-[480px] w-full bg-[#050505] p-4 rounded-lg border border-gray-900">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={HIGH_DENSITY_DATA} margin={{ top: 20, right: 30, left: 30, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={true} horizontal={true} />
              <XAxis 
                dataKey="time" 
                stroke="#4b5563" 
                tick={axisStyle} 
                tickLine={{ stroke: '#4b5563' }}
                axisLine={{ stroke: '#4b5563' }}
                ticks={[0, 50, 100, 150, 200]}
              >
                <Label value="Time (s)" offset={-20} position="insideBottom" style={labelStyle} />
              </XAxis>
              <YAxis 
                stroke="#4b5563" 
                tick={axisStyle} 
                tickLine={{ stroke: '#4b5563' }}
                axisLine={{ stroke: '#4b5563' }} 
                domain={[500, 4700]}
                ticks={[1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]}
              >
                <Label value="RAM Usage (MB)" angle={-90} position="insideLeft" offset={-10} style={labelStyle} />
              </YAxis>
              
              <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="plainline" 
                wrapperStyle={{ 
                  fontSize: '11px', 
                  fontFamily: 'JetBrains Mono', 
                  paddingBottom: '20px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  border: '1px solid #1f2937',
                  borderRadius: '4px',
                  padding: '10px'
                }} 
              />
              
              <Line 
                name="Baseline (O(n²) - Truncated)" 
                type="monotone" 
                dataKey="baseline" 
                stroke={COLORS.baseline} 
                strokeWidth={1.8} 
                strokeOpacity={0.9}
                dot={false}
                connectNulls={true}
                isAnimationActive={false}
              />
              <Line 
                name="TGP (O(n) - Full Density)" 
                type="monotone" 
                dataKey="tgp" 
                stroke={COLORS.tgp} 
                strokeWidth={1.8} 
                strokeOpacity={0.9}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-950/20 border border-red-900/50 p-3 rounded-md flex gap-3 items-center">
                <AlertTriangle size={18} className="text-red-600" />
                <p className="text-[11px] font-mono text-red-200">
                    <span className="font-bold">CRASH DETECTADO (t=55s):</span> Saturación de direccionamiento físico. El modelo Baseline interrumpe la generación para evitar el desbordamiento total.
                </p>
            </div>
            <div className="bg-green-950/20 border border-green-900/50 p-3 rounded-md flex gap-3 items-center">
                <CheckCircle2 size={18} className="text-green-600" />
                <p className="text-[11px] font-mono text-green-200">
                    <span className="font-bold">ESTABILIDAD TGP:</span> El sistema alterna entre inferencia y flush de memoria. Cada pico representa la instanciación de un nuevo segmento semántico.
                </p>
            </div>
        </div>
      </section>

      {/* SECCIÓN: ESTRÉS DE MEMORIA (RAM) */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1 border-l-4 border-green-500 pl-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono uppercase tracking-tight flex items-center gap-3">
              <Activity size={24} className="text-green-500" />
              Impacto en Hardware: Baseline vs TGP (12GB RAM)
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-[10px] font-mono text-red-400 bg-red-900/20 px-3 py-1 rounded-full border border-red-800/50">
              <AlertTriangle size={12} /> COLAPSO OOM @ 18K TOKENS
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-green-400 bg-green-900/20 px-3 py-1 rounded-full border border-green-800/50">
              <InfinityIcon size={12} /> ESTABILIDAD INFINITA (TGP)
            </div>
          </div>
        </div>

        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MEMORY_STRESS_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
              
              <ReferenceArea x1={0} x2={18000} fill="#2563eb" fillOpacity={0.05} label={{ position: 'top', value: 'ZONA DE VIABILIDAD DUAL', fill: '#60a5fa', fontSize: 10, fontWeight: 600 }} />
              <ReferenceArea x1={18000} x2={100000} fill="#ef4444" fillOpacity={0.05} label={{ position: 'top', value: 'ZONA DE IMPOSIBILIDAD BASELINE', fill: '#f87171', fontSize: 10, fontWeight: 600 }} />

              <XAxis 
                dataKey="tokens" 
                stroke="#4b5563" 
                tick={axisStyle} 
                type="number"
                domain={[0, 100000]}
                ticks={[0, 20000, 40000, 60000, 80000, 100000]}
              >
                <Label value="Longitud de Contexto (Tokens)" offset={-25} position="insideBottom" style={labelStyle} />
              </XAxis>
              
              <YAxis stroke="#4b5563" tick={axisStyle} domain={[0, 16]}>
                <Label value="Consumo de Memoria RAM (GB)" angle={-90} position="insideLeft" offset={-5} style={labelStyle} />
              </YAxis>

              <ReferenceLine y={12} stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2}>
                <Label value="LÍMITE FÍSICO RAM (12GB)" position="insideTopRight" fill="#ef4444" fontSize={10} fontWeight={800} dy={-10} />
              </ReferenceLine>

              <Legend verticalAlign="top" height={36} iconType="plainline" wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
              
              <Line name="Baseline" type="monotone" dataKey="baseline" stroke="#ef4444" strokeWidth={4} dot={false} connectNulls={false} />
              <Line name="Sistema TGP" type="monotone" dataKey="tgp" stroke="#22c55e" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard 
          label="Mejora en Calidad" 
          value="+58%" 
          subtext="Incremento en el puntaje de calidad promedio respecto al baseline." 
          icon={<CheckCircle2 size={24} />}
          colorClass="text-green-500"
        />
        <KPICard 
          label="Estabilidad Operativa" 
          value="Varianza Baja" 
          subtext="Comportamiento consistente, evitando colapsos por saturación de memoria." 
          icon={<Activity size={24} />}
          colorClass="text-green-500"
        />
        <KPICard 
          label="Gestión de Memoria" 
          value="Consumo O(1)" 
          subtext="Uso de memoria independiente de la longitud total de la secuencia." 
          icon={<Cpu size={24} />}
          colorClass="text-green-500"
        />
      </section>

      {/* Resumen Metodológico */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 text-[10px] font-mono leading-relaxed bg-gray-900/20 p-6 rounded border border-gray-800">
        <div>
          <h3 className="text-gray-400 font-bold mb-2 flex items-center gap-2 uppercase">
            <Info size={12} /> Arquitectura TGP
          </h3>
          <p>La arquitectura TGP revoluciona la inferencia al segmentar el flujo de datos. Mientras los modelos tradicionales colapsan bajo la carga de la KV-Cache (crecimiento lineal/cuadrático), TGP mantiene una densidad de generación constante mediante un pipeline de segmentación semántica y flushes de memoria estratégicos.</p>
        </div>
        <div>
          <h3 className="text-gray-400 font-bold mb-2 flex items-center gap-2 uppercase">
            <ShieldCheck size={12} /> Protocolo de estabilidad
          </h3>
          <p>El sistema garantiza la continuidad mediante la preservación de estados latentes comprimidos entre segmentos. Esto permite inferencias teóricamente infinitas en hardware restringido, superando los límites físicos de los dispositivos móviles actuales.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
