export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate developer with a deep interest in building scalable applications and beautiful user
              interfaces. I believe in writing clean, maintainable code and staying updated with the latest
              technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing
              knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Database Design", "UI/UX"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
