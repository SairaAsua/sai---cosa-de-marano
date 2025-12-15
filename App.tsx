import React from 'react';
import { STRATEGY_STEPS, INFRA_SPECS, DONT_DO_LIST } from './data';
import { TeamExplorer } from './components/TeamExplorer';
import { 
  ArrowRight, 
  Rocket, 
  Target, 
  AlertTriangle, 
  Cpu, 
  BarChart3,
  CheckCircle,
  Menu
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="font-bold text-xl tracking-tight text-slate-900">SAI <span className="text-slate-400 font-normal">2.0</span></span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#vision" className="hover:text-blue-600 transition-colors">Visión</a>
              <a href="#teams" className="hover:text-blue-600 transition-colors">Equipos</a>
              <a href="#infra" className="hover:text-blue-600 transition-colors">Infraestructura</a>
              <a href="#roadmap" className="hover:text-blue-600 transition-colors">Estrategia</a>
            </div>
            <button className="md:hidden p-2 text-slate-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="vision" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Rocket size={16} /> Roadmap Estratégico
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              De Prototipo Heroico a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sistema Industrial</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              La transición de la escasez a la abundancia no es solo escalar hardware. 
              Es diseñar un sistema <strong>replicable, operable y gobernable</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center min-w-[140px]">
                  <span className="text-3xl font-bold text-slate-900">14-15</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">Personas Core</span>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center min-w-[140px]">
                  <span className="text-3xl font-bold text-slate-900">20</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">Nodos MVP</span>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center min-w-[140px]">
                  <span className="text-3xl font-bold text-slate-900">2-3</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">Regiones</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Pillars */}
      <section id="roadmap" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Los 5 Pilares del Cambio</h2>
            <p className="text-slate-500 mt-2">El plan maestro para el despliegue de recursos.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGY_STEPS.map((step, idx) => (
              <div key={idx} className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-colors text-slate-700 font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title.split('. ')[1]}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
            {/* The "What NOT to do" card styled differently */}
            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-4 text-rose-700">
                <AlertTriangle size={24} />
                <h3 className="text-lg font-bold">Lo que NO haremos</h3>
              </div>
              <ul className="space-y-2">
                {DONT_DO_LIST.slice(0, 3).map((item, i) => (
                   <li key={i} className="text-rose-800 text-sm flex items-start gap-2">
                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"/> {item}
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (The Core Request) */}
      <section id="teams" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Composición de Equipos</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Un MVP humano potentísimo, completando el círculo con perfiles senior clave.
              <br/>
              <span className="text-sm font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded ml-2">Equipo Actual</span>
              <span className="text-sm font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded ml-2">Nuevas Contrataciones</span>
            </p>
          </div>

          <TeamExplorer />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-emerald-500"/>
                  Cobertura Actual (Key People)
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                   <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Dirección Técnica & Plataforma</span>
                      <span className="font-semibold text-slate-900">Nicolás Echániz</span>
                   </li>
                   <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Dirección Científica & IA</span>
                      <span className="font-semibold text-slate-900">Mariano F. Méndez</span>
                   </li>
                   <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Backend & ML Engineering</span>
                      <span className="font-semibold text-slate-900">Federico Bonino</span>
                   </li>
                   <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Hardware & RF</span>
                      <span className="font-semibold text-slate-900">Pablo Bustos</span>
                   </li>
                   <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Diseño Industrial</span>
                      <span className="font-semibold text-slate-900">Martín F. Méndez</span>
                   </li>
                   <li className="flex justify-between pb-2">
                      <span>Implementación & Comunidad</span>
                      <span className="font-semibold text-slate-900">Saira Asua</span>
                   </li>
                </ul>
             </div>

             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Target size={20} className="text-amber-500"/>
                  Objetivos de Contratación (Priority Hires)
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                   <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-700 font-bold">1</div>
                      <div>
                        <strong className="block text-slate-900">ML Engineer Senior</strong>
                        <span className="text-xs">Para experimentación y scripts robustos.</span>
                      </div>
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-700 font-bold">2</div>
                      <div>
                        <strong className="block text-slate-900">Data Engineer</strong>
                        <span className="text-xs">Dueño del Data Lake y pipelines.</span>
                      </div>
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-700 font-bold">3</div>
                      <div>
                        <strong className="block text-slate-900">DevOps / SRE</strong>
                        <span className="text-xs">Infra as Code, Observabilidad, Seguridad.</span>
                      </div>
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-700 font-bold">4</div>
                      <div>
                        <strong className="block text-slate-900">Product Manager / UX</strong>
                        <span className="text-xs">Definición de viajes de usuario y roadmap.</span>
                      </div>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infra" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">MVP de Cómputo <br/>y Equipamiento</h2>
                 <p className="text-slate-600 mb-6">
                    Evitando la tentación de un "datacenter obsceno". Buscamos redundancia inteligente y potencia justa.
                 </p>
                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                       <BarChart3 size={18} /> Observabilidad
                    </h4>
                    <p className="text-sm text-slate-600">
                       Métricas de hardware, IA (F1, mAP) y negocio (tiempo de detección) integradas desde el día 1.
                    </p>
                 </div>
              </div>

              <div className="md:w-2/3 grid gap-6">
                 {INFRA_SPECS.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                       <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <Cpu size={20} className="text-blue-600"/>
                          {item.title}
                       </h3>
                       <ul className="space-y-2">
                          {item.details.map((detail, dIdx) => (
                             <li key={dIdx} className="text-slate-600 text-sm flex items-start gap-2">
                                <ArrowRight size={14} className="mt-1 text-blue-400 shrink-0"/>
                                {detail}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-sm mb-4">CONSTELACIÓN SAI 2.0</p>
          <p className="text-slate-500 text-xs">
            Documento estratégico confidencial. Basado en la planificación 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;