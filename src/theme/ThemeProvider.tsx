import { useEffect, useState, type ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { ThemeContext } from './ThemeContext'
import { lightTheme, darkTheme } from './themes'
import type { ThemeMode } from './themeTypes'

const THEME_KEY = 'theme-mode'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const storedMode = localStorage.getItem(THEME_KEY) as ThemeMode | null
    if (storedMode === 'dark' || storedMode === 'light') {
      setMode(storedMode)
    }
  }, [])

  const toggle = () => {
    setMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem(THEME_KEY, newMode)
      return newMode
    })
  }

  const theme = mode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}
