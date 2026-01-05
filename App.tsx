
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
  Label
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
  Monitor
} from 'lucide-react';
import { TGP_DATA, COLORS, SYSTEM_IMAGE_URL } from './constants';
import { KPICard } from './components/KPICard';

const App: React.FC = () => {
  const axisStyle = {
    fontSize: '10px',
    fontFamily: 'JetBrains Mono',
    fill: '#6b7280'
  };

  const labelStyle = {
    fill: '#9ca3af',
    fontSize: '9px',
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

      {/* SECCIÓN DE IMAGEN: SISTEMA EN EJECUCIÓN */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-1 border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-bold text-white font-mono uppercase tracking-tight flex items-center gap-3">
            <Monitor size={24} className="text-green-500" />
            SISTEMA EN EJECUCIÓN REAL
          </h2>
          <p className="text-gray-400 text-sm font-mono">
            Entorno de orquestación y monitoreo utilizado para la validación de la patente actualmente.
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-gray-800 bg-black relative group">
          <img 
            src={SYSTEM_IMAGE_URL} 
            alt="Interfaz del sistema TGP" 
            className="w-full h-auto object-cover max-h-[600px] opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-gray-700 px-3 py-1.5 rounded text-[10px] font-mono text-green-500 uppercase tracking-widest">
            Captura de sesión activa: Módulo de Inferencia Segmentada
          </div>
        </div>
      </section>

      {/* Sección KPI */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard 
          label="Mejora en Calidad" 
          value="+58%" 
          subtext="Incremento en el puntaje de calidad promedio respecto al baseline tradicional (9.2/13 vs 5.8/13)." 
          icon={<CheckCircle2 size={24} />}
          colorClass="text-green-500"
        />
        <KPICard 
          label="Estabilidad Operativa" 
          value="Varianza Baja" 
          subtext="Comportamiento consistente en 13 ciclos de prueba, evitando colapsos por saturación de memoria." 
          icon={<Activity size={24} />}
          colorClass="text-green-500"
        />
        <KPICard 
          label="Gestión de Memoria" 
          value="Consumo O(1)" 
          subtext="La arquitectura TGP independiza el uso de memoria de la longitud total de la secuencia generada." 
          icon={<Cpu size={24} />}
          colorClass="text-green-500"
        />
      </section>

      {/* Cuadrícula de Gráficas Estáticas */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Gráfica 1: Eficiencia Energética */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <Zap size={14} className="text-green-500" />
            1) Eficiencia Energética (J / token)
          </h2>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 20, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="Par de Prueba (Secuencial 1-13)" offset={-25} position="insideBottom" style={labelStyle} />
                </XAxis>
                <YAxis stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="J / token" angle={-90} position="insideLeft" offset={-15} style={labelStyle} />
                </YAxis>
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Line name="Referencia (Baseline)" type="monotone" dataKey="baselineEnergy" stroke={COLORS.baseline} strokeWidth={2} dot={{ r: 3, fill: COLORS.baseline }} />
                <Line name="Sistema TGP" type="monotone" dataKey="tgpEnergy" stroke={COLORS.tgp} strokeWidth={3} dot={{ r: 4, fill: COLORS.tgp }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfica 2: Velocidad de Procesamiento */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <Unplug size={14} className="text-green-500" />
            2) Velocidad de Procesamiento (tokens / s)
          </h2>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 20, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="Par de Prueba (Secuencial 1-13)" offset={-25} position="insideBottom" style={labelStyle} />
                </XAxis>
                <YAxis stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="tokens / s" angle={-90} position="insideLeft" offset={-15} style={labelStyle} />
                </YAxis>
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Line name="Referencia (Baseline)" type="monotone" dataKey="baselineSpeed" stroke={COLORS.baseline} strokeWidth={2} dot={{ r: 3, fill: COLORS.baseline }} />
                <Line name="Sistema TGP" type="monotone" dataKey="tgpSpeed" stroke={COLORS.tgp} strokeWidth={3} dot={{ r: 4, fill: COLORS.tgp }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfica 3: Volumen de Generación */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <BarChart3 size={14} className="text-green-500" />
            3) Volumen de Generación (Tokens)
          </h2>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 40, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="Par de Prueba (Secuencial 1-13)" offset={-25} position="insideBottom" style={labelStyle} />
                </XAxis>
                <YAxis stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="Tokens" angle={-90} position="insideLeft" offset={-35} style={labelStyle} />
                </YAxis>
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Area 
                  name="Referencia (Baseline)" 
                  type="monotone" 
                  dataKey="baselineVolume" 
                  stroke={COLORS.baseline} 
                  fill="transparent" 
                  strokeWidth={2} 
                  dot={{ r: 3, fill: COLORS.baseline }} 
                />
                <Area 
                  name="Sistema TGP" 
                  type="monotone" 
                  dataKey="tgpVolume" 
                  stroke={COLORS.tgp} 
                  fill="transparent" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: COLORS.tgp }} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfica 4: Puntajes de Calidad */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-white font-mono flex items-center gap-2 uppercase tracking-wide text-xs mb-6">
            <ShieldCheck size={14} className="text-green-500" />
            4) Calidad de Salida Sincronizada (Puntaje)
          </h2>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TGP_DATA} margin={{ top: 10, right: 10, left: 20, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="Par de Prueba (Secuencial 1-13)" offset={-25} position="insideBottom" style={labelStyle} />
                </XAxis>
                <YAxis stroke="#4b5563" tick={axisStyle} tickLine={false} axisLine={false}>
                  <Label value="Puntaje de Calidad" angle={-90} position="insideLeft" offset={-15} style={labelStyle} />
                </YAxis>
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono' }} />
                <Line name="Referencia (Baseline)" type="step" dataKey="baselineQuality" stroke={COLORS.baseline} strokeWidth={2} dot={{ r: 3, fill: COLORS.baseline }} />
                <Line name="Sistema TGP" type="monotone" dataKey="tgpQuality" stroke={COLORS.tgp} strokeWidth={3} dot={{ r: 4, fill: COLORS.tgp }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Tabla de Resumen */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 mb-8">
        <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2 mb-6 border-l-4 border-green-500 pl-4">
          RESUMEN DE DATOS ALINEADOS
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="text-gray-500 border-b border-gray-800">
              <tr>
                <th className="pb-4 font-medium uppercase tracking-wider">Métrica</th>
                <th className="pb-4 font-medium uppercase tracking-wider">Referencia (Promedio)</th>
                <th className="pb-4 font-medium uppercase tracking-wider">TGP (Promedio)</th>
                <th className="pb-4 font-medium uppercase tracking-wider text-green-500">Ventaja TGP</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-gray-800">
              <tr>
                <td className="py-4 font-bold text-white">Puntaje de Calidad</td>
                <td className="py-4">5.8 / 13</td>
                <td className="py-4 text-green-500 font-bold">9.2 / 13</td>
                <td className="py-4 text-green-500 font-bold">+58%</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">Cumplimiento de Módulos</td>
                <td className="py-4">3.2 / 5</td>
                <td className="py-4 text-green-500 font-bold">4.8 / 5</td>
                <td className="py-4">Mayor Cobertura</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">Estabilidad (Varianza)</td>
                <td className="py-4 text-red-500">Alta (Inestable)</td>
                <td className="py-4 text-green-500 font-bold">Baja (Consistente)</td>
                <td className="py-4">Fiabilidad Operativa</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">Eficiencia Energética</td>
                <td className="py-4">0.39 J/tok</td>
                <td className="py-4 text-green-500 font-bold">0.12 J/tok</td>
                <td className="py-4">Ahorro del 69%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resumen Metodológico */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 text-[10px] font-mono leading-relaxed bg-gray-900/20 p-6 rounded border border-gray-800">
        <div>
          <h3 className="text-gray-400 font-bold mb-2 flex items-center gap-2">
            <Info size={12} /> ARQUITECTURA TGP (TASK GENERATION PARTITIONING)
          </h3>
          <p>La arquitectura propuesta divide la tarea generativa en segmentos semánticos independientes. Cada segmento genera un estado latente comprimido que preserva la coherencia global sin necesidad de mantener la memoria caché KV (KV-Cache) acumulativa, resolviendo el cuello de botella del crecimiento lineal O(n) de los Transformers estándar.</p>
        </div>
        <div>
          <h3 className="text-gray-400 font-bold mb-2 flex items-center gap-2">
            <ShieldCheck size={12} /> PROTOCOLO DE CONTINUIDAD
          </h3>
          <p>Mediante el uso de un Autoencoder Variacional (VAE) y vectores latentes ortogonales, el sistema inyecta directamente "intención" e "identidad" en las capas de decodificación. Esto permite que dispositivos con RAM limitada operen en contextos de longitud arbitraria mediante el reciclaje inmediato de recursos de memoria tras cada flush de segmento.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
