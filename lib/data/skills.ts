export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["Laravel", "Golang", "Express.js", "Node.js", "REST API"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Inertia.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Firebase", "Mobile UI/UX"],
  },
  {
    category: "Database & Tools",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Git", "AWS"],
  },
  {
    category: "IoT & ML",
    skills: ["MQTT", "TensorFlow Lite", "Gemini API", "IoT Integration"],
  },
]