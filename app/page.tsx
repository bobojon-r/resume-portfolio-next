import Image from "next/image";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { data } from "@/lib/data";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="section">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Image
            src="/avatar.svg"
            alt={`Фото ${data.name}`}
            width={96}
            height={96}
            className="rounded-full border border-neutral-300 dark:border-neutral-800"
          />
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">Резюме</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{data.name}</h1>
            <p className="mt-2 text-xl text-neutral-700 dark:text-neutral-300">{data.role}</p>
            <p className="mt-1 text-sm text-neutral-500">{data.location}</p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Python, Django, FastAPI, DRF, PostgreSQL, Redis, Celery, Taskiq, Linux, Nginx, React (базовый).
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.contacts.github && <a className="tag" href={data.contacts.github} target="_blank" rel="noreferrer">GitHub</a>}
              {data.contacts.linkedin && <a className="tag" href={data.contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              {data.contacts.telegram && <a className="tag" href={data.contacts.telegram} target="_blank" rel="noreferrer">Telegram</a>}
              {data.contacts.email && <a className="tag" href={`mailto:${data.contacts.email}`}>Email</a>}
            </div>
          </div>
        </div>

        <p className="card mt-8 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">{data.summary}</p>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-2xl font-semibold mb-4">Опыт работы</h2>
        <Experience />
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-semibold mb-4">Навыки</h2>
        <Skills />
      </section>

      {/* Projects */}
      <section className="section" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-2xl font-semibold mb-4">Проекты</h2>
        <Projects />
      </section>

      {/* Contact */}
      <section className="section" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl font-semibold mb-4">Связаться</h2>
        <Contact />
      </section>

      <section className="section pt-0" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-2xl font-semibold mb-4">Образование и языки</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card">
            <h3 className="font-semibold">{data.education.degree}</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{data.education.institution}</p>
            <p className="mt-1 text-sm text-neutral-500">{data.education.location} · {data.education.year}</p>
          </article>
          <article className="card">
            <h3 className="font-semibold">Языки</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{data.languages.join(" · ")}</p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="section pt-0 text-sm text-neutral-500">
        Сделано на Next.js. Обновлено в 2026 году.
      </footer>
    </main>
  );
}
