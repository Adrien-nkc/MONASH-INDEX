import type { Faculty } from '../types';

interface Props {
  faculties: Faculty[];
  dark: boolean;
  onToggleDark: () => void;
}

export default function Navbar({ faculties, dark, onToggleDark }: Props) {
  return (
    <nav className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-0.5 overflow-x-auto py-2 scrollbar-hide">
        <div className="flex items-center gap-1 flex-nowrap flex-1 min-w-0">
          {faculties.map(f => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium
                text-slate-600 dark:text-slate-400 hover:text-monash-blue dark:hover:text-blue-400
                hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              {f.shortName}
            </a>
          ))}
        </div>
        <button
          onClick={onToggleDark}
          className="ml-2 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
            bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600
            text-slate-600 dark:text-slate-300 transition-colors text-sm"
          title={dark ? 'Light mode' : 'Dark mode'}
          aria-label="Toggle dark mode"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
