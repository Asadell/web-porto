export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2025 Asadel. Built with Next.js & Tailwind CSS.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
