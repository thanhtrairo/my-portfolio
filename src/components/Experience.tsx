'use client'

import React from 'react'
import { motion } from 'framer-motion'

import SectionHeading from './SectionHeading'
import { experiencesData } from '~/lib/data'
import { useSectionInView } from '~/lib/hooks'

const Experience = () => {
  const { ref } = useSectionInView('Experience')

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {experiencesData.map((experience, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="mb-10 ml-4 rounded-lg border border-black/5 bg-gray-100 p-4 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.project}</h3>
            <p className="experienceText">
              <span className="font-semibold">Description:</span>
              {` `} {experience.description}
            </p>
            <p className="experienceText">
              <span className="font-semibold">Responsibility:</span>
              {` `} {experience.responsibility}
            </p>
            <p className="experienceText">
              <span className="font-semibold">Task:</span>
              {` `} {experience.task}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 py-1 sm:mt-auto">
              {experience.relatedTechnologies.map((technologie, index) => (
                <li
                  className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                  key={index}
                >
                  {technologie}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
