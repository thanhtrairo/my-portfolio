import About from '~/components/About'
import Experience from '~/components/Experience'
import Intro from '~/components/Intro'
import Projects from '~/components/Projects'
import SectionDivider from '~/components/SectionDivider'
import Skills from '~/components/Skills'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-0 sm:p-12 md:p-24 lg:p-32">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </main>
  )
}
