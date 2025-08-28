import { motion } from "framer-motion";
import { data } from "@/lib/data";

export function Skills() {
  return (
    <div id="skills" className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {data.skills.map((skill, i) => (
        <motion.div
          key={skill}
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.02 }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}
