import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="container-px py-8 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2025 Brett Beare</p>
        <div className="flex gap-4">
          <a
            className="hover:text-white"
            href="https://github.com/bbeare22"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/brett-beare"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
