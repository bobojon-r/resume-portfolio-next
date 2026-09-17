import { data } from "@/lib/data";

export function Projects() {
  return (
    <div id="projects" className="grid gap-4">
      {data.projects.map((p) => (
        <article
          key={p.title}
          className="card transition-shadow hover:shadow-md"
        >
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.description}</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
          {p.link && (
            <a className="link mt-3 inline-block" href={p.link} target="_blank" rel="noreferrer">
              Ссылка
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
