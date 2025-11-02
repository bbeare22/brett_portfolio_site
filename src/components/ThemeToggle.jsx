import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  useEffect(() => {
    const el = document.documentElement;
    if (dark) el.classList.add("dark");
    else el.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="ml-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/10 transition"
      title="Toggle theme"
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}
