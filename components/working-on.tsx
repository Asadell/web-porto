import { Lightbulb } from "lucide-react"

export default function WorkingOn() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
        <Lightbulb className="w-5 h-5 text-accent flex-shrink-0" />
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Currently Learning</p>
          <p className="text-sm sm:text-base text-foreground mt-1">
            Exploring Next.js Server Actions, AI API integration, and advanced database optimization techniques.
          </p>
        </div>
      </div>
    </section>
  )
}
