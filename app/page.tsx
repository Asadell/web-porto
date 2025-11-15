import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Collaborations from "@/components/collaborations"
import Articles from "@/components/articles"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Organizations from "@/components/organizations"

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
        {/* <Organizations /> */}
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
