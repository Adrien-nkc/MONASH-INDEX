export default function StudyStructurePanel() {
  const areaSizes = [
    { label: 'Minor', pts: '24 pts', sub: '4 units · ≥ 2 years', bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-800 dark:text-green-300', pts_c: 'text-green-900 dark:text-green-200' },
    { label: 'Major', pts: '48 pts', sub: '8 units · 3 years', bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-800 dark:text-blue-300', pts_c: 'text-blue-900 dark:text-blue-200' },
    { label: 'Extended Major', pts: '72 pts', sub: '12 units · Arts & Science only', bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-800 dark:text-purple-300', pts_c: 'text-purple-900 dark:text-purple-200' },
    { label: 'Specialisation', pts: 'Specialist courses only', sub: 'Chosen from day one · depth over breadth', bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-800 dark:text-orange-300', pts_c: 'text-orange-900 dark:text-orange-200' },
  ];

  const componentTypes = [
    { name: 'Core Studies', desc: 'Fixed, compulsory units every student must complete. No choice — non-negotiable foundation.', border: 'border-l-purple-500' },
    { name: 'Core Studies — Specified Elective Studies', desc: 'Compulsory slots you must fill, but you choose which units from a faculty-approved list only.', border: 'border-l-blue-500' },
    { name: 'Foundation Studies', desc: 'Compulsory introductory units building base knowledge for the rest of the degree.', border: 'border-l-green-700' },
    { name: 'Major Studies', desc: 'Your chosen primary area of study in comprehensive degrees. 8 units across 3 years.', border: 'border-l-amber-700' },
    { name: 'Discipline Studies / Discipline Elective', desc: 'Units belonging to your chosen specialisation stream — the map term for a "specialisation".', border: 'border-l-orange-600' },
    { name: 'Specialist Studies', desc: 'Deep-dive units: Cornerstone (Yr 2), Elective (choose within specialisation), and Capstone (Yr 3).', border: 'border-l-pink-600' },
    { name: 'Specified Studies — Professional Futures', desc: 'Compulsory career and industry-readiness units. Not discipline-specific.', border: 'border-l-orange-400' },
    { name: 'Free Elective Studies', desc: 'Completely open — any unit from any faculty, subject to prerequisites. Single-degree students only.', border: 'border-l-teal-500' },
  ];

  const progressionTypes = [
    { emoji: '🚪', name: 'Gateway unit', year: 'Year 1', desc: 'Introduces the area of study. Most areas have two. Required for both majors and minors.' },
    { emoji: '🪨', name: 'Cornerstone unit', year: 'Year 2', desc: 'Demonstrates solid understanding of the discipline. Required for majors; not for minors.' },
    { emoji: '🎓', name: 'Capstone unit', year: 'Year 3', desc: 'Integrates all learning through a research project or industry internship. Required for majors.' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 mb-8">
      <h2 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">Understanding Monash Study Structures</h2>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">
        Sources:{' '}
        <a href="https://www.monash.edu/study/courses/majors-minors-specialisations" className="text-monash-blue hover:underline" target="_blank" rel="noreferrer">
          monash.edu — Majors, minors and specialisations
        </a>
        {' '}·{' '}
        <a href="https://www.monash.edu/students/handbooks/faculty-info/undergrad/arts/definition-of-gateway-cornerstone-and-capstone" className="text-monash-blue hover:underline" target="_blank" rel="noreferrer">
          Monash Handbook — Gateway, Cornerstone & Capstone
        </a>
      </p>

      <h3 className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Area sizes</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {areaSizes.map(s => (
          <div key={s.label} className={`${s.bg} rounded-lg p-3`}>
            <div className={`text-[0.65rem] font-bold uppercase tracking-wide ${s.text} mb-1`}>{s.label}</div>
            <div className={`text-lg font-bold ${s.pts_c}`}>{s.pts}</div>
            <div className={`text-[0.72rem] ${s.text} mt-0.5`}>{s.sub}</div>
          </div>
        ))}
      </div>

      <h3 className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Course map component types</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
        {componentTypes.map(c => (
          <div key={c.name} className={`border border-l-4 ${c.border} border-slate-200 dark:border-slate-600 rounded-lg p-3`}>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">{c.name}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{c.desc}</div>
          </div>
        ))}
      </div>

      <h3 className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Unit progression types (Arts faculty)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
        {progressionTypes.map(p => (
          <div key={p.name} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">
              {p.emoji} {p.name} <span className="font-normal text-slate-400">({p.year})</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">{p.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 dark:bg-slate-700/50 border-l-4 border-monash-blue rounded-lg p-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <strong>Key rule on free electives:</strong> Majors, extended majors and minors are available in <strong>comprehensive courses</strong> (e.g. Bachelor of Arts, Commerce, Science) <em>or</em> in any course with <strong>enough free elective points</strong>. Each unit = 6 pts. A degree with <strong>48 free elective points</strong> can fit one full major, or two minors. Free electives are available to <strong>single-degree students only</strong>.
      </div>
    </div>
  );
}
