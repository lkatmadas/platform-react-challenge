import type { ElementType, ReactNode } from 'react'

export type GridStyleProps = {
  columns: number
  gap: string
}

export type GridProps = Partial<GridStyleProps> & {
  children: ReactNode
  className?: string
  as?: ElementType
}
