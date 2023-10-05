'use client'

import { createContext, useContext, useState } from 'react'

import { SectionName } from '~/lib/types'

type ActiveSectionContextType = {
  activeSection: SectionName
  timeOfLastClick: number
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        timeOfLastClick,
        setActiveSection,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

const useActiveSectionContext = () => {
  const activeSection = useContext(ActiveSectionContext)

  if (!activeSection) {
    throw new Error('useActiveSectionContext must be within a ActiveSectionContextProvider')
  }

  return activeSection
}

export default ActiveSectionContextProvider
export { useActiveSectionContext }
