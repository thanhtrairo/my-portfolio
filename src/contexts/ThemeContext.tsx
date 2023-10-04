'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export enum THEME {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: THEME
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

  useEffect(() => {
    const localTheme = localStorage.getItem('@theme') as THEME
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === THEME.DARK) {
        document.documentElement.classList.add('dark')
      }
    } else if (matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(THEME.DARK)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === THEME.LIGHT) {
      setTheme(THEME.DARK)
      localStorage.setItem('@theme', THEME.DARK)
      document.documentElement.classList.add('dark')
    } else {
      setTheme(THEME.LIGHT)
      localStorage.setItem('@theme', THEME.LIGHT)
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) {
    throw new Error('useThemeContext must be use within a ThemeContextProvider')
  }

  return theme
}

export default ThemeContextProvider
export { useThemeContext }
