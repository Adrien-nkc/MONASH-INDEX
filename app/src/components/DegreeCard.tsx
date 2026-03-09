import { useState } from 'react';
import type { Degree } from '../types';
import Badge from './Badge';
import AreaTag from './AreaTag';
import { ChevronDown } from 'lucide-react';

interface DegreeCardProps {
  degree: Degree;
}

export default function DegreeCard({ degree }: DegreeCardProps) {
  const [open, setOpen] = useState(false);
  const hasContent = !!(degree.fixedNote || (degree.areaGroups && degree.areaGroups.length > 0));

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200
      ${open
        ? 'border-monash-blue/40 shadow-md bg-white dark:bg-slate-800 dark:border-blue-500/30'
        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-monash-blue/30 hover:shadow-sm'
      }`}
    >
      <button
        className="w-full text-left px-4 py-3.5 flex items-start justify-between gap-3 cursor-pointer"
        onClick={() => hasContent && setOpen(o => !o)}
        disabled={!hasContent}
      >
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          <span className="font-semibold text-sm text-slate-800 dark:text-slate-100 leading-snug mr-1">
            {degree.name}
          </span>
          <span className="text-[0.7rem] font-mono bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded">
            {degree.code}
          </span>
          {degree.badges.filter(b => b !== 'campus').map(b => (
            <Badge key={b} type={b} />
          ))}
          {degree.campusNote && (
            <Badge type="campus" label={degree.campusNote} />
          )}
        </div>
        {hasContent && (
          <ChevronDown
            size={16}
            className={`flex-shrink-0 mt-0.5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {open && hasContent && (
        <div className="px-4 pb-4 border-t border-slate-100 dark:border-slate-700 pt-3">
          {degree.fixedNote && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">{degree.fixedNote}</p>
          )}
          {degree.areaGroups && degree.areaGroups.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              {degree.areaGroups.map((group, gi) => (
                <div key={gi} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {group.title}
                  </h4>
                  {group.description && (
                    <p className="text-[0.75rem] text-slate-500 dark:text-slate-400 mb-2 italic">{group.description}</p>
                  )}
                  {group.items.length > 0 && (
                    <ul className="space-y-0.5">
                      {group.items.map((item, ii) => (
                        <li key={ii} className="flex items-center justify-between gap-2 py-0.5">
                          <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                            {item.code && (
                              <span className="text-[0.65rem] font-mono text-slate-400 dark:text-slate-500 mr-1.5">{item.code}</span>
                            )}
                            {item.name}
                            {item.note && (
                              <span className="ml-1.5 text-[0.65rem] text-amber-600 dark:text-amber-400">({item.note})</span>
                            )}
                          </span>
                          {item.availability && <AreaTag availability={item.availability} />}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
