import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Collaborations from "@/components/collaborations"
import Articles from "@/components/articles"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Collaborations /> */}
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
