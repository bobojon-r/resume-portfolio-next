import { data } from "@/lib/data";

export function Contact() {
  return (
    <div id="contact" className="card max-w-xl">
      <p className="text-neutral-700 dark:text-neutral-300">Открыт к предложениям и профессиональному общению.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a className="tag" href={`mailto:${data.contacts.email}`}>Email</a>
        <a className="tag" href={`tel:${data.contacts.phone}`}>Позвонить</a>
        <a className="tag" href={data.contacts.telegram} target="_blank" rel="noreferrer">Telegram</a>
        <a className="tag" href={data.contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
