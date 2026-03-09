import { Search, ChevronDown, User, Users, GraduationCap, Home } from "lucide-react";

interface Props {
  dark: boolean;
  onToggleDark: () => void;
}

export default function Navbar({ dark, onToggleDark }: Props) {
  return (
    <nav className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-monash-black text-white text-[11px] font-medium py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-monash-accent transition-colors">
              <Home size={14} />
            </a>
            <button className="flex items-center gap-1 hover:text-monash-accent transition-colors cursor-pointer">
              Monash Australia <ChevronDown size={12} />
            </button>
            <div className="h-3 w-[1px] bg-white/20" />
            <div className="flex gap-4">
              <a href="#" className="hover:text-monash-accent transition-colors">Courses</a>
              <a href="#" className="hover:text-monash-accent transition-colors">Monash Online</a>
              <a href="#" className="hover:text-monash-accent transition-colors">Library</a>
              <a href="#" className="hover:text-monash-accent transition-colors">Donate</a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 hover:text-monash-accent transition-colors uppercase tracking-wider">
              <User size={14} /> STAFF
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-monash-accent transition-colors uppercase tracking-wider">
              <Users size={14} /> STUDENTS
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-monash-accent transition-colors uppercase tracking-wider">
              <GraduationCap size={14} /> ALUMNI
            </a>
            <button className="p-1 hover:text-monash-accent transition-colors cursor-pointer">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8 lg:gap-12">
            <a href="/" className="flex-shrink-0">
              <img
                src="/monash-logo-mono.svg"
                alt="Monash University"
                className="h-9 md:h-11 w-auto"
              />
            </a>
            <div className="hidden lg:flex items-center gap-6 text-[13px] font-bold text-gray-800 uppercase tracking-tight">
              <a href="#" className="hover:text-monash-blue transition-colors">About</a>
              <a href="#" className="hover:text-monash-blue transition-colors">Study</a>
              <a href="#" className="hover:text-monash-blue transition-colors">Research</a>
              <a href="#" className="hover:text-monash-blue transition-colors">Enterprise</a>
              <a href="#" className="hover:text-monash-blue transition-colors">International</a>
              <button className="flex items-center gap-1 hover:text-monash-blue transition-colors cursor-pointer">
                More <ChevronDown size={14} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleDark}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <a
              href="#"
              className="hidden sm:block border-2 border-monash-blue text-monash-blue hover:bg-monash-blue hover:text-white px-5 py-2 rounded font-bold text-[13px] transition-all uppercase"
            >
              Apply to study
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
