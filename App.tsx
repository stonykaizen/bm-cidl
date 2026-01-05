
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
  Layers,
  FileText
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

      {/* SECCIÓN 1: TEST DE ALTA DENSIDAD (RÉPLICA FIEL) */}
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
                    <span className="font-bold">CRASH DETECTADO (t=55s):</span> El modelo Baseline colapsa por fragmentación de caché.
                </p>
            </div>
            <div className="bg-green-950/20 border border-green-900/50 p-3 rounded-md flex gap-3 items-center">
                <CheckCircle2 size={18} className="text-green-600" />
                <p className="text-[11px] font-mono text-green-200">
                    <span className="font-bold">PULSO SEMÁNTICO:</span> TGP mantiene estabilidad mediante flushes segmentados.
                </p>
            </div>
        </div>
      </section>

      {/* SECCIÓN 2: ESTRÉS DE MEMORIA (12GB RAM) */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1 border-l-4 border-green-500 pl-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono uppercase tracking-tight flex items-center gap-3">
              <Activity size={24} className="text-green-500" />
              Stress Hardware: Baseline vs TGP (12GB RAM)
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-[10px] font-mono text-red-400 bg-red-900/20 px-3 py-1 rounded-full border border-red-800/50">
              <AlertTriangle size={12} /> COLAPSO OOM @ 18K TOKENS
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-green-400 bg-green-900/20 px-3 py-1 rounded-full border border-green-800/50">
              <InfinityIcon size={12} /> ESTABILIDAD INFINITA
            </div>
          </div>
        </div>

        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MEMORY_STRESS_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
              
              <ReferenceArea x1={0} x2={18000} fill="#2563eb" fillOpacity={0.05} label={{ position: 'top', value: 'ZONA VIABLE', fill: '#60a5fa', fontSize: 10, fontWeight: 600 }} />
              <ReferenceArea x1={18000} x2={100000} fill="#ef4444" fillOpacity={0.05} label={{ position: 'top', value: 'ZONA CRÍTICA BASELINE', fill: '#f87171', fontSize: 10, fontWeight: 600 }} />

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
                <Label value="LÍMITE FÍSICO (12GB)" position="insideTopRight" fill="#ef4444" fontSize={10} fontWeight={800} dy={-10} />
              </ReferenceLine>

              <Legend verticalAlign="top" height={36} iconType="plainline" wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
              
              <Line name="Baseline" type="monotone" dataKey="baseline" stroke="#ef4444" strokeWidth={4} dot={false} connectNulls={false} />
              <Line name="Sistema TGP" type="monotone" dataKey="tgp" stroke="#22c55e" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* SECCIÓN 3: KPI DE RENDIMIENTO */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard 
          label="Mejora en Calidad" 
          value="+58%" 
          subtext="Incremento en el puntaje de coherencia semántica respecto al baseline." 
          icon={<CheckCircle2 size={24} />}
          colorClass="text-green-500"
        />
        <KPICard 
          label="Estabilidad Operativa" 
          value="Varianza Baja" 
          subtext="Comportamiento consistente, evitando colapsos por saturación." 
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

      {/* SECCIÓN 4: GRÁFICAS TÉCNICAS COMPLEMENTARIAS (RESTAURADAS) */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <Zap size={14} className="text-green-500" />
            1) Eficiencia Energética (J / token)
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} />
                <YAxis stroke="#4b5563" tick={axisStyle} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Line name="Baseline" type="monotone" dataKey="baselineEnergy" stroke="#b91c1c" strokeWidth={2} dot={{ r: 2 }} />
                <Line name="Sistema TGP" type="monotone" dataKey="tgpEnergy" stroke="#15803d" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <Unplug size={14} className="text-green-500" />
            2) Velocidad de Procesamiento (tokens / s)
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} />
                <YAxis stroke="#4b5563" tick={axisStyle} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Line name="Baseline" type="monotone" dataKey="baselineSpeed" stroke="#b91c1c" strokeWidth={2} dot={{ r: 2 }} />
                <Line name="Sistema TGP" type="monotone" dataKey="tgpSpeed" stroke="#15803d" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <BarChart3 size={14} className="text-green-500" />
            3) Volumen de Generación (Tokens)
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} />
                <YAxis stroke="#4b5563" tick={axisStyle} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Area name="Baseline" type="monotone" dataKey="baselineVolume" stroke="#b91c1c" fill="transparent" dot={{ r: 2 }} />
                <Area name="Sistema TGP" type="monotone" dataKey="tgpVolume" stroke="#15803d" fill="transparent" dot={{ r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <ShieldCheck size={14} className="text-green-500" />
            4) Puntajes de Calidad (Score)
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} />
                <YAxis stroke="#4b5563" tick={axisStyle} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Line name="Baseline" type="step" dataKey="baselineQuality" stroke="#b91c1c" strokeWidth={2} dot={{ r: 2 }} />
                <Line name="Sistema TGP" type="monotone" dataKey="tgpQuality" stroke="#15803d" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: RESUMEN DE DATOS ALINEADOS */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 shadow-2xl">
        <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2 mb-6 border-l-4 border-green-500 pl-4">
          <FileText size={20} className="text-green-500" />
          COMPARATIVA DE MÉTRICAS AGREGADAS
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="text-gray-500 border-b border-gray-800 uppercase tracking-wider text-xs">
              <tr>
                <th className="pb-4 font-medium">Métrica Técnica</th>
                <th className="pb-4 font-medium">Referencia Standard</th>
                <th className="pb-4 font-medium">Propuesta TGP</th>
                <th className="pb-4 font-medium text-green-500">Delta de Mejora</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-gray-800">
              <tr>
                <td className="py-4 font-bold text-white">Consumo RAM (Max)</td>
                <td className="py-4 text-red-500">O(n) - Creciente</td>
                <td className="py-4 text-green-500 font-bold">O(1) - Estático</td>
                <td className="py-4 text-green-500 font-bold">Estabilidad Total</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">Puntaje de Coherencia</td>
                <td className="py-4">5.8 / 12</td>
                <td className="py-4 text-green-500 font-bold">9.2 / 12</td>
                <td className="py-4 text-green-500 font-bold">+58.6%</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">Tokens Generados</td>
                <td className="py-4">840 avg.</td>
                <td className="py-4 text-green-500 font-bold">2,150 avg.</td>
                <td className="py-4 text-green-500 font-bold">+155.9%</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">Eficiencia J/token</td>
                <td className="py-4">0.39 J</td>
                <td className="py-4 text-green-500 font-bold">0.12 J</td>
                <td className="py-4 text-green-500 font-bold">-69.2% Costo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECCIÓN 6: SISTEMA EN EJECUCIÓN (RESTAURADO) */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-1 border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-bold text-white font-mono uppercase tracking-tight flex items-center gap-3">
            <Monitor size={24} className="text-green-500" />
            MONITOREO DE SISTEMA EN TIEMPO REAL
          </h2>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-gray-800 bg-black relative group">
          <img 
            src={SYSTEM_IMAGE_URL} 
            alt="Interfaz del sistema TGP" 
            className="w-full h-auto object-cover max-h-[500px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-gray-700 px-3 py-1.5 rounded text-[10px] font-mono text-green-500">
            ENTORNO DE VALIDACIÓN DE PATENTE: V0.3.2
          </div>
        </div>
      </section>

      {/* FOOTER: RESUMEN METODOLÓGICO */}
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
