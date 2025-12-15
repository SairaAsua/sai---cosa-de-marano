import React, { useState } from 'react';
import { CELLS } from '../data';
import { UserCheck, UserPlus, CheckCircle2, CircleDashed } from 'lucide-react';
import { clsx } from 'clsx';

export const TeamExplorer: React.FC = () => {
  const [activeCellId, setActiveCellId] = useState<string>(CELLS[0].id);

  const activeCell = CELLS.find(c => c.id === activeCellId) || CELLS[0];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row h-auto min-h-[600px]">
      {/* Sidebar / Tabs */}
      <div className="md:w-1/3 bg-slate-50 border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200 bg-slate-100">
          <h3 className="text-xl font-bold text-slate-800">Estructura de Células</h3>
          <p className="text-sm text-slate-500 mt-1">4 células interconectadas</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CELLS.map((cell) => {
            const Icon = cell.icon;
            const isActive = activeCellId === cell.id;
            return (
              <button
                key={cell.id}
                onClick={() => setActiveCellId(cell.id)}
                className={clsx(
                  "w-full text-left p-6 transition-all duration-200 border-b border-slate-100 flex items-start gap-4",
                  isActive ? "bg-white border-l-4 border-l-blue-600 shadow-sm" : "hover:bg-slate-100 border-l-4 border-l-transparent"
                )}
              >
                <div className={clsx("p-2 rounded-lg shrink-0", isActive ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-500")}>
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className={clsx("font-semibold", isActive ? "text-slate-900" : "text-slate-600")}>{cell.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{cell.objective}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="md:w-2/3 p-8 bg-white flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <activeCell.icon size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{activeCell.name}</h2>
          </div>
          <p className="text-slate-600 italic border-l-4 border-blue-200 pl-4 py-1 bg-slate-50 rounded-r">
            "{activeCell.objective}"
          </p>
        </div>

        <div className="space-y-4 flex-1 overflow-y-auto pr-2">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Roles & Composición</h3>
          
          {activeCell.roles.map((role, idx) => (
            <div key={idx} className={clsx(
              "p-5 rounded-xl border flex flex-col sm:flex-row gap-4 transition-all hover:shadow-md",
              role.isHire ? "border-amber-200 bg-amber-50/50" : "border-emerald-200 bg-emerald-50/50"
            )}>
              {/* Status Icon */}
              <div className="shrink-0 pt-1">
                {role.isHire ? (
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600" title="Contratación necesaria">
                    <UserPlus size={20} />
                  </div>
                ) : (
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600" title="Rol cubierto">
                    <UserCheck size={20} />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-800 text-lg">{role.title}</h4>
                  <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-1 rounded">
                    {role.count}
                  </span>
                </div>
                
                {/* Current Person or Vacancy Label */}
                <div className="mt-1 mb-3">
                  {role.currentPerson ? (
                    <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-sm">
                      <CheckCircle2 size={14} />
                      <span>{role.currentPerson}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-amber-700 font-medium text-sm">
                      <CircleDashed size={14} />
                      <span>Vacante / Contratación Clave</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-1">
                  {role.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};