import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  const link =
    "px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition";
  const active = "text-white bg-white/10";
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="container-px py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500" />
          <span className="font-semibold tracking-tight">Brett Beare</span>
        </div>
        <nav className="ml-auto flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            Contact
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
