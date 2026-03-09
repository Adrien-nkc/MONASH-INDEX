import { useState, useMemo } from "react";
import { Smile, FileText, GraduationCap } from "lucide-react";
import { faculties } from "../data/faculties";
import type {
  Faculty,
  Degree,
  AreaGroup,
  AreaItem,
  DoubleDegree,
} from "../types";
import Navbar from "../components/Navbar";
import FacultySection from "../components/FacultySection";
import StudyStructurePanel from "../components/StudyStructurePanel";
import SearchBar from "../components/SearchBar";

function filterFaculties(allFaculties: Faculty[], query: string): Faculty[] {
  if (!query.trim()) return allFaculties;
  const q = query.toLowerCase();
  return allFaculties
    .map((f: Faculty) => {
      const degrees = f.degrees.filter(
        (d: Degree) =>
          d.name.toLowerCase().includes(q) ||
          d.code.toLowerCase().includes(q) ||
          d.areaGroups?.some(
            (g: AreaGroup) =>
              g.title.toLowerCase().includes(q) ||
              g.items.some(
                (i: AreaItem) =>
                  i.name.toLowerCase().includes(q) ||
                  (i.code?.toLowerCase().includes(q) ?? false),
              ),
          ),
      );
      const ddMatch = f.doubleDegrees?.filter(
        (dd: DoubleDegree) =>
          dd.name.toLowerCase().includes(q) ||
          dd.code.toLowerCase().includes(q),
      );
      if (
        degrees.length === 0 &&
        !ddMatch?.length &&
        !f.name.toLowerCase().includes(q)
      )
        return null;
      return {
        ...f,
        degrees: degrees.length
          ? degrees
          : f.degrees.filter(() => f.name.toLowerCase().includes(q)),
      };
    })
    .filter((f): f is Faculty => f !== null);
}

interface Props {
  dark: boolean;
  onToggleDark: () => void;
}

export default function HomePage({ dark, onToggleDark }: Props) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => filterFaculties(faculties, query), [query]);

  return (
    <div className="min-h-screen bg-white transition-colors">
      <Navbar dark={dark} onToggleDark={onToggleDark} />

      {/* Hero Section */}
      <header className="bg-monash-blue relative overflow-hidden min-h-[450px] flex items-center slanted-divider">
        {/* "M" Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <path d="M-100,600 L300,-100 L700,600 M100,600 L500,-100 L900,600" fill="none" stroke="white" strokeWidth="120" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
              Monash University Course Index
            </h1>
            <p className="text-white text-lg md:text-xl font-medium mb-8 flex items-center gap-2">
              Learn more about our courses 
              <span className="inline-block w-6 h-[2px] bg-white ml-2"></span>
              <span className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45 -ml-1"></span>
            </p>
            
            {/* Centered Search Bar in Hero */}
            <div className="max-w-2xl bg-white rounded-full shadow-2xl p-1.5 flex items-center">
              <div className="flex-1 px-4">
                <SearchBar value={query} onChange={setQuery} />
              </div>
            </div>
            
            <div className="mt-8 flex gap-4 text-white/80 text-xs font-semibold uppercase tracking-widest">
              <span>2026 Handbook</span>
              <span className="opacity-40">|</span>
              <span>All Faculties & Degrees</span>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Faculty Navigation (preserve content) */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-[110px] md:top-[115px] z-40 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-6 whitespace-nowrap text-[12px] font-bold text-gray-600 uppercase tracking-wide">
          {faculties.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="hover:text-monash-blue transition-colors border-b-2 border-transparent hover:border-monash-blue pb-1"
            >
              {f.shortName}
            </a>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* "Make change" Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Make change.</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 font-medium leading-relaxed">
            To the way you think. To the path you take.<br />
            To the lives of people all over the world.
          </p>
        </div>

        {/* "Make change" Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-monash-blue leading-tight group-hover:text-monash-accent transition-colors">
                Your student<br />experience
              </h3>
              <div className="bg-blue-50 p-3 rounded-full text-monash-blue group-hover:bg-monash-blue group-hover:text-white transition-all">
                <Smile size={32} strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Monash University is more than just a place to study. It's where you'll find your people and your purpose.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-monash-blue leading-tight group-hover:text-monash-accent transition-colors">
                Find a<br />course
              </h3>
              <div className="bg-blue-50 p-3 rounded-full text-monash-blue group-hover:bg-monash-blue group-hover:text-white transition-all">
                <FileText size={32} strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Specialist courses and 60+ double degrees across 10 interest areas. Find the one that's right for you.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-monash-blue leading-tight group-hover:text-monash-accent transition-colors">
                Generous<br />scholarships
              </h3>
              <div className="bg-blue-50 p-3 rounded-full text-monash-blue group-hover:bg-monash-blue group-hover:text-white transition-all">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              400+ types of scholarships that reward talent and unlock potential. Discover your opportunities.
            </p>
          </div>
        </div>

        {/* Momentum Section */}
        <div className="bg-monash-black rounded-[2rem] overflow-hidden mb-24 relative min-h-[300px] flex items-center">
            <div className="absolute inset-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=2070" alt="Momentum" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-monash-black via-monash-black/80 to-transparent" />
            <div className="relative z-10 p-12 md:p-16 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    We have the momentum now to create the future we need.
                </h2>
            </div>
        </div>

        <div className="space-y-20">
          {!query && <StudyStructurePanel />}

          {filtered.length > 0 ? (
            filtered.map((f) => <FacultySection key={f.id} faculty={f} />)
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-2xl font-bold text-gray-400 mb-2">No results for "{query}"</p>
              <p className="text-gray-500">
                Try searching for a specific degree, faculty name, or unit code.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-monash-black text-white/60 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
            <img src="/monash-logo-mono.svg" alt="Monash" className="h-10 opacity-50 invert" />
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
          <div className="text-center text-xs leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">
              Monash University Clayton — Undergraduate Course Index · Based on 2026 Handbook data
            </p>
            <p>
              Always verify course information with the official <a href="https://handbook.monash.edu" className="underline hover:text-white">Monash Handbook</a>. We acknowledge and pay respects to the Elders and Traditional Custodians of the lands on which our Australian campuses stand.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
