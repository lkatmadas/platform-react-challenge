import type { AppTheme } from './themeTypes'

export const commonTheme = {
  primary: '#de1c76',
  white: '#ffffff',
  fontSizes: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
}

export const lightTheme: AppTheme = {
  background: '#ffffff',
  text: '#000000',
  border: '#121212',
  backdrop: '#00000082',
  ...commonTheme,
}

export const darkTheme: AppTheme = {
  background: '#121212',
  text: '#ffffff',
  border: '#ffffff',
  backdrop: '#5b5b5b82',
  ...commonTheme,
}
