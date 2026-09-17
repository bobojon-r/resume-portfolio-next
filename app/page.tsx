"use client";

import Image from "next/image";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { useLanguage } from "@/components/LanguageProvider";
import { content, profile } from "@/lib/data";

export default function Page() {
  const { locale } = useLanguage();
  const copy = content[locale];
  return <main>
    <section className="section">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image src="/avatar.svg" alt={`Photo of ${profile.name}`} width={96} height={96} className="rounded-full border border-neutral-300 dark:border-neutral-800" />
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">{copy.resume}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-xl text-neutral-700 dark:text-neutral-300">{profile.role}</p>
          <p className="mt-1 text-sm text-neutral-500">{profile.location}</p>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">{profile.headlineSkills}</p>
          <div className="mt-4 flex flex-wrap gap-2"><a className="tag" href={profile.contacts.github} target="_blank" rel="noreferrer">GitHub</a><a className="tag" href={profile.contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="tag" href={profile.contacts.telegram} target="_blank" rel="noreferrer">Telegram</a><a className="tag" href={`mailto:${profile.contacts.email}`}>Email</a></div>
        </div>
      </div>
      <p className="card mt-8 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">{copy.summary}</p>
    </section>
    <section className="section" aria-labelledby="experience-heading"><h2 id="experience-heading" className="mb-4 text-2xl font-semibold">{copy.headings.experience}</h2><Experience /></section>
    <section className="section" aria-labelledby="skills-heading"><h2 id="skills-heading" className="mb-4 text-2xl font-semibold">{copy.headings.skills}</h2><Skills /></section>
    <section className="section" aria-labelledby="projects-heading"><h2 id="projects-heading" className="mb-4 text-2xl font-semibold">{copy.headings.projects}</h2><Projects /></section>
    <section className="section" aria-labelledby="contact-heading"><h2 id="contact-heading" className="mb-4 text-2xl font-semibold">{copy.headings.contact}</h2><Contact /></section>
    <section className="section pt-0" aria-labelledby="education-heading"><h2 id="education-heading" className="mb-4 text-2xl font-semibold">{copy.headings.education}</h2><div className="grid gap-4 md:grid-cols-2"><article className="card"><h3 className="font-semibold">{copy.education.degree}</h3><p className="mt-2 text-neutral-700 dark:text-neutral-300">{copy.education.institution}</p><p className="mt-1 text-sm text-neutral-500">{copy.education.location} · {copy.education.year}</p></article><article className="card"><h3 className="font-semibold">{copy.headings.languages}</h3><p className="mt-2 text-neutral-700 dark:text-neutral-300">{copy.languages.join(" · ")}</p></article></div></section>
    <footer className="section pt-0 text-sm text-neutral-500">{copy.footer}</footer>
  </main>;
}
