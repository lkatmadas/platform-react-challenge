import type { HTMLAttributes } from 'react'

export type CardItemContent = {
  url: string
  id: string
  alt?: string
}

export type CardItemProps<T extends CardItemContent> = {
  index?: number
  item: T
  onItemSelect?: (item: T) => void
  actions?: (item: T) => React.ReactNode
} & HTMLAttributes<HTMLDivElement>
