const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub"],
  },
]

export default function Skills() {
  return (
    <section className="bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 ">

      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Tech Stack</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="font-semibold text-lg">{group.category}</h3>
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <p key={skill} className="text-muted-foreground">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
