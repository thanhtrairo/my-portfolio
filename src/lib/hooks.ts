'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { useActiveSectionContext } from '~/contexts/ActiveSectionContext'
import { SectionName } from './types'

const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({ threshold })
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, timeOfLastClick, sectionName, setActiveSection])

  return { ref }
}

export { useSectionInView }
