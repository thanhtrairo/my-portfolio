'use client'

import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { useSectionInView } from '~/lib/hooks'
import { useActiveSectionContext } from '~/contexts/ActiveSectionContext'
import { calculateYearsOfExperience } from '~/lib/helpers'

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  const handleClickContact = () => {
    setActiveSection('Contact')
    setTimeOfLastClick(Date.now())
  }

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I am Nguyen Tien Thanh.</span> I am a{' '}
        <span className="font-bold">frontend developer</span> with{' '}
        <span className="font-bold">{calculateYearsOfExperience()}</span> of experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={handleClickContact}
        >
          Contact me here <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/NguyenTienThanh_resume.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/nguy%E1%BB%85n-ti%E1%BA%BFn-th%C3%A0nh-a66287266/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/thanhtrairo"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
