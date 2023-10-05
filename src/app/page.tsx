import About from '~/components/About'
import Experience from '~/components/Experience'
import Intro from '~/components/Intro'
import SectionDivider from '~/components/SectionDivider'
import Skills from '~/components/Skills'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
    </main>
  )
}
