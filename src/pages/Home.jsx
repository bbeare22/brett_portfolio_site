import React from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Hi, I’m <span className="gradient-text">Brett Beare</span>
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Full-Stack Developer focused on accessible, scalable front-end
          architecture and great UX. Here are a few projects I’m proud of.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </section>
    </div>
  );
}
