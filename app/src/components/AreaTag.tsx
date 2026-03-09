import type { AreaAvailability } from '../types';

interface AreaTagProps {
  availability: AreaAvailability;
}

const tagConfig: Record<AreaAvailability, { label: string; className: string; title: string }> = {
  both: {
    label: '■▲',
    className: 'text-blue-600 dark:text-blue-400',
    title: 'Available as Major and Minor',
  },
  major: {
    label: '■',
    className: 'text-indigo-600 dark:text-indigo-400',
    title: 'Major only',
  },
  minor: {
    label: '▲',
    className: 'text-cyan-600 dark:text-cyan-400',
    title: 'Minor only',
  },
  extended: {
    label: '⬛',
    className: 'text-slate-700 dark:text-slate-300',
    title: 'Extended major available',
  },
};

export default function AreaTag({ availability }: AreaTagProps) {
  const cfg = tagConfig[availability];
  return (
    <span className={`text-xs font-bold ml-1 ${cfg.className}`} title={cfg.title}>
      {cfg.label}
    </span>
  );
}
