import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return <HomePage dark={dark} onToggleDark={() => setDark((d) => !d)} />;
}
