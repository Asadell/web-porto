export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Firebase", "React Native", "Mobile UI/UX"],
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