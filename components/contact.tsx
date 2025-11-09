export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Email</h3>
            <a href="mailto:hello@example.com" className="text-accent hover:underline">
              hello@example.com
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
