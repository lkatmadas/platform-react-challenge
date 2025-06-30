import '@emotion/react'
import type { AppTheme } from './theme/themeTypes'

declare module '@emotion/react' {
  export type Theme = AppTheme
}

declare module 'react' {
  interface Attributes {
    css?: import('@emotion/react').SerializedStyles
  }
}
