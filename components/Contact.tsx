"use client";

import { content, profile } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export function Contact() {
  const { locale } = useLanguage();
  const copy = content[locale];
  return (
    <div id="contact" className="card max-w-xl">
      <p className="text-neutral-700 dark:text-neutral-300">{copy.contactText}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a className="tag" href={`mailto:${profile.contacts.email}`}>Email</a>
        <a className="tag" href={`tel:${profile.contacts.phone}`}>{copy.call}</a>
        <a className="tag" href={profile.contacts.telegram} target="_blank" rel="noreferrer">Telegram</a>
        <a className="tag" href={profile.contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
