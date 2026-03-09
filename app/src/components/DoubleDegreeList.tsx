import { useState } from 'react';
import type { DoubleDegree } from '../types';
import { ChevronDown } from 'lucide-react';

interface Props {
  degrees: DoubleDegree[];
}

export default function DoubleDegreeList({ degrees }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-lg
          bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700
          text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider
          transition-colors"
      >
        <span>Double Degrees ({degrees.length})</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {degrees.map((dd, i) => (
            <div key={i} className="flex items-center justify-between gap-2
              bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
              rounded-lg px-3 py-2">
              <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{dd.name}</span>
              <span className="text-[0.65rem] font-mono bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded whitespace-nowrap">
                {dd.code}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
