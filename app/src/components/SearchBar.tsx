import { Search, X } from 'lucide-react';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search degrees, majors, specialisations…"
        className="w-full pl-8 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
          bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200
          placeholder-slate-400 dark:placeholder-slate-500
          focus:outline-none focus:ring-2 focus:ring-monash-blue/40 focus:border-monash-blue/60
          transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
