// import type { Theme as EmotionTheme } from '@emotion/react'

export type ThemeMode = 'light' | 'dark'

export interface ThemeContextType {
  mode: ThemeMode
  toggle: () => void
}

export interface AppTheme {
  background: string
  text: string
  primary: string
  border: string
  backdrop: string
  fontSizes: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}
