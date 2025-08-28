import { motion } from "framer-motion";
import Image from "next/image";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { data } from "@/lib/data";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="section">
        <div className="flex items-center gap-6">
          <Image
            src="/avatar.svg"
            alt="Avatar"
            width={96}
            height={96}
            className="rounded-full border border-neutral-300 dark:border-neutral-800"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Шеф — Python Backend Developer</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Python, Django, FastAPI, DRF, PostgreSQL, Redis, Celery, Taskiq, Linux, Nginx, React (базовый).
            </p>
            <div className="mt-3 flex gap-3">
              <a className="tag" href={data.contacts.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="tag" href={data.contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="tag" href={data.contacts.telegram} target="_blank" rel="noreferrer">Telegram</a>
              <a className="tag" href={"mailto:" + data.contacts.email}>Email</a>
            </div>
          </div>
        </div>

        <motion.p
          className="card mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {data.about}
        </motion.p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Навыки</h2>
        <Skills />
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Проекты</h2>
        <Projects />
      </section>

      {/* Contact */}
      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Связаться</h2>
        <Contact />
      </section>

      {/* Footer */}
      <footer className="section pt-0 text-sm text-neutral-500">
        Сделано на Next.js + Tailwind + Framer Motion. Тема: светлая/тёмная.
      </footer>
    </main>
  );
}
