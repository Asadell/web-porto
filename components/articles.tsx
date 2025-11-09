"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { articlesData } from "@/lib/data/articles"

export default function Articles() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="space-y-8">
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest Articles</h2>
          <p className="text-muted-foreground text-base">
            Sharing insights and learnings about web development on Medium
          </p>
        </motion.div>

        <div className="space-y-4">
          {articlesData.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 border border-border rounded-lg hover:border-accent hover:bg-card/50 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition leading-snug">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-accent opacity-0 group-hover:opacity-100 transition flex-shrink-0 mt-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://medium.com/@muhammadsatrioasadel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition cursor-pointer"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}