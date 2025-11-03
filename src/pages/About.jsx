import React from "react";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <p className="mt-4 text-neutral-300">
        I’m a Full-Stack Developer and Front-End Developer Intern at BeeDev
        Services LLC, combining precision and process-driven thinking from seven
        years in healthcare with a passion for building clean, accessible, and
        scalable web applications. After completing the TripleTen Software
        Engineering Program and earning my Google IT Support Professional
        Certificate, I’ve developed multiple production-ready apps focused on
        usability, performance, and modern UI/UX design.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {/* Core Skills */}
        <div className="card p-4">
          <h2 className="font-semibold">Core Skills</h2>
          <ul className="mt-2 text-sm text-neutral-300 list-disc list-inside space-y-1">
            <li>JavaScript (ES6+), React, Next.js, Vite</li>
            <li>Node.js, Express, RESTful APIs, MongoDB</li>
            <li>TailwindCSS, Figma UI Design, Responsive UX</li>
            <li>Prisma ORM, Git & GitHub, Postman Testing</li>
            <li>Render, Vercel Deployment & Cloud Hosting</li>
          </ul>
        </div>

        {/* Links */}
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
            <li>
              <a
                className="hover:text-brand-200"
                href="mailto:beare.logan@yahoo.com"
              >
                Email: beare.logan@yahoo.com
              </a>
            </li>
            <li className="text-neutral-300">
              Phone: <span className="text-neutral-100">(937) 336-3440</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
