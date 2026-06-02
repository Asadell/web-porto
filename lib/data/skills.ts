export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["Golang", "ASP.NET Core", "Laravel", "Python", "FastAPI", "Node.js"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Inertia.js"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Firebase", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "RabbitMQ", "NATS", "PostgreSQL", "AWS", "Git"],
  },
  {
    category: "AI & IoT",
    skills: ["Gemini AI", "YOLO11", "OpenCV", "RAG", "MQTT"],
  },
]