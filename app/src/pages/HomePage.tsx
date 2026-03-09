import { useState, useMemo } from "react";
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Navbar faculties={faculties} dark={dark} onToggleDark={onToggleDark} />

      <header className="bg-[#0d1b2a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #006dae 0%, transparent 60%), radial-gradient(circle at 80% 20%, #00a3e0 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-[#006dae] rounded-full" />
            <span className="text-blue-300/70 text-xs font-semibold uppercase tracking-widest">
              2026 Handbook
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Monash University Clayton
          </h1>
          <p className="text-blue-200/70 text-sm">
            Undergraduate Course Index — All Faculties, Degrees, Majors, Minors
            & Specialisations
          </p>
          <p className="text-[0.7rem] text-blue-300/50 mt-2">
            Always verify with the official{" "}
            <a
              href="https://handbook.monash.edu"
              className="underline hover:text-blue-300"
              target="_blank"
              rel="noreferrer"
            >
              Monash Handbook
            </a>
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        <div className="max-w-xl">
          <SearchBar value={query} onChange={setQuery} />
          {query && (
            <p className="text-xs text-slate-400 mt-1.5 pl-1">
              Showing results across {filtered.length} facult
              {filtered.length === 1 ? "y" : "ies"}
            </p>
          )}
        </div>

        {!query && <StudyStructurePanel />}

        {filtered.length > 0 ? (
          filtered.map((f) => <FacultySection key={f.id} faculty={f} />)
        ) : (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg font-medium">No results for "{query}"</p>
            <p className="text-sm mt-1">
              Try a degree name, faculty, or area of study
            </p>
          </div>
        )}
      </main>

      <footer className="bg-[#0d1b2a] text-blue-200/50 text-center py-6 text-xs mt-10">
        Monash University Clayton — Undergraduate Course Index · Based on 2026
        Handbook data · Always verify with the official Monash Handbook
      </footer>
    </div>
  );
}
