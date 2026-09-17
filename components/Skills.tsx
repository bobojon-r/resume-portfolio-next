import { profile } from "@/lib/data";

export function Skills() {
  return (
    <div id="skills" className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {profile.skills.map((skill) => (
        <div
          key={skill}
          className="card py-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
