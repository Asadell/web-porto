"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { organizationsData } from "@/lib/data/organizations"
import { Users, Award, Calendar } from "lucide-react"

export default function Organizations() {
  const [filter, setFilter] = useState<"all" | "organization" | "committee">("all")

  const filteredOrgs = organizationsData.filter((org) => 
    filter === "all" ? true : org.type === filter
  )

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="space-y-12">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Organizations & Committees</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Active involvement in campus organizations and leadership roles in various technology events
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "all", label: "All" },
            { value: "organization", label: "Organizations" },
            { value: "committee", label: "Committees" },
          ].map((tab) => (
            <motion.button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                filter === tab.value
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Organizations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredOrgs.map((org, index) => (
            <motion.div
              key={org.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {org.type === "organization" ? (
                    <Users className="w-6 h-6 text-accent" />
                  ) : (
                    <Award className="w-6 h-6 text-accent" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg">{org.name}</h3>
                  <p className="text-accent font-medium">{org.role}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{org.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {org.description}
              </p>

              {/* Achievements */}
              {org.achievements && org.achievements.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                  <ul className="space-y-1">
                    {org.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Badge */}
              <div className="pt-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  org.type === "organization" 
                    ? "bg-blue-500/10 text-blue-500" 
                    : "bg-purple-500/10 text-purple-500"
                }`}>
                  {org.type === "organization" ? "Organization" : "Committee"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOrgs.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">No experiences found for this filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}