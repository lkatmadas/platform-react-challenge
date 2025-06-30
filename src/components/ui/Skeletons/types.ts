import type { ReactNode } from 'react'

export type SkeletonCardProps = {
  width?: number | string
  height?: number | string
  className?: string
  onLoad?: () => void
}

export type SkeletonCardGridProps = {
  count: number
  columns: number
  keyPrefix?: string
  height?: number
}

export type SkeletonLoaderProps = {
  status: boolean
  error: unknown | null
  children?: ReactNode
  loader?: ReactNode
  fullScreen?: boolean
  errorFallback?: ReactNode
}
