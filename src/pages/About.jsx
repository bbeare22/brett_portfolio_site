import React from "react";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="mt-4 text-neutral-300">
        I’m a Front-End Developer Intern at BeeDev Services LLC with a
        background in healthcare operations. I enjoy building clean,
        performance-minded interfaces using React, Tailwind, and modern tooling,
        and I care deeply about accessibility and developer experience.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="card p-4">
          <h2 className="font-semibold">Core Skills</h2>
          <ul className="mt-2 text-sm text-neutral-300 list-disc list-inside space-y-1">
            <li>React, Vite, TailwindCSS</li>
            <li>Node.js, Express, REST APIs</li>
            <li>MongoDB, Prisma</li>
            <li>Figma handoff & UI polish</li>
          </ul>
        </div>
        <div className="card p-4">
          <h2 className="font-semibold">Links</h2>
          <ul className="mt-2 text-sm text-brand-300 space-y-2">
            <li>
              <a
                className="hover:text-brand-200"
                href="https://github.com/bbeare22"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </li>
            <li>
              <a
                className="hover:text-brand-200"
                href="https://www.linkedin.com/in/brett-beare"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
