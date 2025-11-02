import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="card card-hover p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {project.live && (
          <a
            className="text-xs rounded-lg border border-emerald-400/30 text-emerald-300 hover:text-emerald-200 px-2 py-1 bg-emerald-900/20"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
      </div>
      <p className="mt-2 text-sm text-neutral-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] rounded-md bg-white/5 border border-white/10 px-2 py-1 text-neutral-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          className="text-sm text-brand-300 hover:text-brand-200"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          Repository →
        </a>
        {project.live && (
          <a
            className="text-sm text-brand-300 hover:text-brand-200"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  );
}
