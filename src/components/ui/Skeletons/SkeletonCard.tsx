import { type FC } from 'react'
import ContentLoader from 'react-content-loader'

import type { SkeletonCardProps } from './types'

const SkeletonCard: FC<SkeletonCardProps> = ({ height = 300, className }) => {
  const viewBoxHeight = typeof height === 'number' ? height : 300

  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className={className}
      style={{ minHeight: viewBoxHeight, minWidth: '100%', width: '100%' }}
    >
      <rect x="0" y="0" rx="8" ry="8" width="100%" height={viewBoxHeight} />
    </ContentLoader>
  )
}

export default SkeletonCard
