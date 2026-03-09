import type { Faculty } from '../types';
import DegreeCard from './DegreeCard';
import DoubleDegreeList from './DoubleDegreeList';

interface Props {
  faculty: Faculty;
}

export default function FacultySection({ faculty }: Props) {
  return (
    <section id={faculty.id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-monash-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
          {faculty.number}
        </div>
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{faculty.name}</h2>
      </div>

      <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 pl-1">
        Single Degrees
      </p>

      <div className="space-y-2">
        {faculty.degrees.map(degree => (
          <DegreeCard key={degree.id} degree={degree} />
        ))}
      </div>

      {faculty.doubleDegrees && faculty.doubleDegrees.length > 0 && (
        <DoubleDegreeList degrees={faculty.doubleDegrees} />
      )}
    </section>
  );
}
