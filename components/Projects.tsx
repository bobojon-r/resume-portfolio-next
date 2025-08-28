import { motion } from "framer-motion";
import { data } from "@/lib/data";

export function Projects() {
  return (
    <div id="projects" className="grid gap-4">
      {data.projects.map((p, i) => (
        <motion.article
          key={p.title}
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.04 }}
          viewport={{ once: true }}
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
        </motion.article>
      ))}
    </div>
  );
}
