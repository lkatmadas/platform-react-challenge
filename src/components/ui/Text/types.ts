import type { ReactNode } from 'react'

export type AllowedTags = 'div' | 'span' | 'p'
export type Variant = 'normal' | 'strong'

export type TextProps = {
  as?: AllowedTags
  children: ReactNode
  className?: string
  variant?: Variant
}

export type StyledTextProps = {
  variant?: Variant
}
