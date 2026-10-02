"use client";

import { content } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export function Projects() {
  const { locale } = useLanguage();
  const { projects, projectLabels } = content[locale];
  return (
    <div id="projects" className="grid gap-8">
      {(["work", "personal"] as const).map((kind) => (
        <div key={kind}>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">{projectLabels[kind]}</h3>
          <div className="grid gap-4">
            {projects.filter((p) => p.kind === kind).map((p) => (
              <article
                key={p.title}
                className="card transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  {"github" in p && <a className="tag shrink-0" href={p.github} target="_blank" rel="noreferrer">{projectLabels.github}</a>}
                </div>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.description}</p>
                <details className="mt-3">
                  <summary className="link cursor-pointer text-sm text-neutral-600 dark:text-neutral-400">{projectLabels.more}</summary>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700 marker:text-neutral-400 dark:text-neutral-300">
                    {p.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </details>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
