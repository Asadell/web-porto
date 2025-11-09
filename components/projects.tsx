"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { RotateCcw } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, checkout, and admin dashboard",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Firebase"],
    image: "/ecommerce-dashboard.png",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    tags: ["React", "Firebase", "TypeScript", "Tailwind"],
    image: "/task-management-concept.png",
    slug: "task-management-app",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, comments, and analytics",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    image: "/blog-interface.jpg",
    slug: "blog-platform",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with charts, metrics, and data visualization",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    image: "/analytics-dashboard.png",
    slug: "analytics-dashboard",
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    description: "ChatGPT-like interface with conversation history and custom prompts",
    tags: ["React", "TypeScript", "Node.js", "OpenAI API"],
    image: "/modern-chat-interface.png",
    slug: "ai-chat-assistant",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Real-time weather application with forecast and location-based features",
    tags: ["React", "TypeScript", "Tailwind", "API Integration"],
    image: "/weather-app-interface.png",
    slug: "weather-app",
  },
]

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = Array.from(new Set(projectsData.flatMap((p) => p.tags)))

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projectsData
    return projectsData.filter((project) => selectedTags.every((tag) => project.tags.includes(tag)))
  }, [selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const resetFilters = () => {
    setSelectedTags([])
  }

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-muted-foreground font-medium">Filter by technology:</p>
          <div className="flex flex-wrap items-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                  selectedTags.includes(tag)
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-muted hover:shadow-sm"
                }`}
              >
                {tag}
              </button>
            ))}

            {selectedTags.length > 0 && (
              <button
                onClick={resetFilters}
                className="ml-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent to-blue-500 text-accent-foreground hover:shadow-lg transition cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Reset Filters
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group cursor-pointer">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-card aspect-video group-hover:opacity-80 transition">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-accent transition">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects match the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}
