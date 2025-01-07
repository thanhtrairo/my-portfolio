'use client'

import React from 'react'

import SectionHeading from './SectionHeading'
import Project from './Project'
import { projectsData } from '~/lib/data'
import { useSectionInView } from '~/lib/hooks'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects
