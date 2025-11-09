"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { RotateCcw } from "lucide-react"
import { motion } from "framer-motion"
import { projectsData } from "@/lib/data/projects"

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

  function ProjectImage({ src, alt, className }: { src: string; alt: string; className: string }) {
    const [imgSrc, setImgSrc] = useState(src)

    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={(e) => {
          setImgSrc("/default.png")
        }}
      />
    )
  }

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="space-y-12">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground font-medium">Filter by technology:</p>
          <div className="flex flex-wrap items-center gap-3">
            {allTags.map((tag, index) => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                  selectedTags.includes(tag)
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-muted hover:shadow-sm"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}

            {selectedTags.length > 0 && (
              <motion.button
                onClick={resetFilters}
                className="ml-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent to-blue-500 text-accent-foreground hover:shadow-lg transition cursor-pointer relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Reset Filters
                </span>
              </motion.button>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group cursor-pointer">
                <div className="space-y-4">
                  <motion.div 
                    className="relative overflow-hidden rounded-lg bg-card aspect-video group-hover:opacity-80 transition"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectImage
                      src={project.image || "/default.png"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </motion.div>
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
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground">No projects match the selected filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}