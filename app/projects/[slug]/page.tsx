"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Globe, Play, Download, Github, ChevronLeft, Check } from "lucide-react"
import { motion } from "framer-motion"
import { projectsData } from "@/lib/data/projects"

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const links = [
    ...(project.liveUrl && project.liveUrl !== "#"
      ? [{ label: "View Live Demo", url: project.liveUrl, icon: Globe }]
      : []),
    ...(project.playStoreUrl && project.playStoreUrl !== "#"
      ? [{ label: "Get on Play Store", url: project.playStoreUrl, icon: Play }]
      : []),
    ...(project.apkUrl && project.apkUrl !== "#"
      ? [{ label: "Download APK", url: project.apkUrl, icon: Download }]
      : []),
    ...(project.repoUrl && project.repoUrl !== "#"
      ? [{ label: "View Code on GitHub", url: project.repoUrl, icon: Github }]
      : []),
  ]

  function ProjectDetailImage({ src, alt, className }: { src: string; alt: string; className: string }) {
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
    <main className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 cursor-pointer transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectDetailImage
              src={project.image || "/default.png"}
              alt={project.title}
              className="w-full rounded-lg"
            />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Role</h3>
              <p>{project.role}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Duration</h3>
              <p>{project.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary rounded cursor-pointer hover:bg-accent hover:text-accent-foreground transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-accent/5 border-l-4 border-accent p-6 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-3">Impact & Results</h2>
            <p className="text-foreground leading-relaxed">{project.impact}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                >
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-secondary/50 p-6 rounded-lg space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h2 className="text-2xl font-bold">Architecture Overview</h2>
            <p className="text-foreground leading-relaxed">{project.architecture}</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            {links.length > 0 ? (
              links.map(({ label, url, icon: Icon }, index) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:shadow-lg transition cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </motion.a>
              ))
            ) : (
              <p className="text-muted-foreground">Project links coming soon.</p>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}