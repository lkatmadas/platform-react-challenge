import type { FC, PropsWithChildren } from 'react'

import { SkeletonCard, SkeletonCardGrid, SkeletonLoader } from './index'
import type { SkeletonCardProps, SkeletonCardGridProps, SkeletonLoaderProps } from './types'

export type SkeletonCompoundProps = {
  Loader: FC<SkeletonLoaderProps>
  Card: FC<SkeletonCardProps>
  Grid: FC<SkeletonCardGridProps>
}

const Skeletons: FC<PropsWithChildren> & SkeletonCompoundProps = ({ children }) => (
  <div className="skeleton-container">{children}</div>
)

Skeletons.Loader = SkeletonLoader
Skeletons.Card = SkeletonCard
Skeletons.Grid = SkeletonCardGrid

export default Skeletons
