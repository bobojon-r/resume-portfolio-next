import { data } from "@/lib/data";

export function Experience() {
  return (
    <div id="experience" className="grid gap-4">
      {data.experience.map((job) => (
        <article key={`${job.company}-${job.period}`} className="card">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <p className="text-neutral-700 dark:text-neutral-300">{job.company} · {job.location}</p>
            </div>
            <p className="shrink-0 text-sm text-neutral-500">{job.period}</p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700 marker:text-neutral-400 dark:text-neutral-300">
            {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
