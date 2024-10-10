'use client'

import React from 'react'
import { motion } from 'framer-motion'

import SectionHeading from './SectionHeading'
import { useSectionInView } from '~/lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{' '}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core
        stack is <span className="font-medium">React, Next.js, Node.js</span>. I am also familiar with TypeScript. I am
        always looking to learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing video games, watching movies, and playing
        badminton. I also enjoy <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  )
}

export default About
