import type { ReactNode } from 'react'

import type { CatImage } from '@/api/cats/cats.types'

export type CatModalProps = {
  cat: CatImage | null
  isError: boolean
  isLoading: boolean
  onClose: () => void
}

export type CatSkeletonGridProps = {
  count?: number
  columns?: number
  keyPrefix?: string
}

export type CatGridProps = {
  cats: CatImage[]
  onSelect: (cat: CatImage) => void
  actions?: (cat: CatImage) => ReactNode
  onCardHover?: (cat: CatImage) => void
}

export type BreedStatsItemProps = {
  label: string
  value: number
}

export type LabelValueProps = {
  label: string
  children: ReactNode
  className?: string
}
