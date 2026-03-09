import type { BadgeType } from '../types';

interface BadgeProps {
  type: BadgeType;
  label?: string;
}

const badgeConfig: Record<BadgeType, { label: string; className: string }> = {
  comprehensive: {
    label: 'Comprehensive',
    className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-700',
  },
  specialist: {
    label: 'Specialist',
    className: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300 border border-pink-200 dark:border-pink-700',
  },
  research: {
    label: 'Research / Honours',
    className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200 dark:border-purple-700',
  },
  campus: {
    label: '',
    className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-700',
  },
  fixed: {
    label: 'Self-contained',
    className: 'bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 border border-slate-200 dark:border-slate-600',
  },
  spec: {
    label: 'Specialisation required',
    className: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300 border border-orange-200 dark:border-orange-700',
  },
  major: {
    label: 'Majors + Minors',
    className: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 border border-teal-200 dark:border-teal-700',
  },
  flex: {
    label: 'Elective flexibility',
    className: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-700',
  },
};

export default function Badge({ type, label }: BadgeProps) {
  const config = badgeConfig[type];
  const displayLabel = type === 'campus' ? label : config.label;
  if (!displayLabel) return null;

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.68rem] font-semibold tracking-wide whitespace-nowrap ${config.className}`}>
      {displayLabel}
    </span>
  );
}
