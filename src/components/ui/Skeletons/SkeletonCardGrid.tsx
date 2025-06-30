import { type FC } from 'react'

import { Grid, SkeletonCard } from '@components'

import type { SkeletonCardGridProps } from './types'

const SkeletonCardGrid: FC<SkeletonCardGridProps> = ({
  count = 10,
  columns = 5,
  keyPrefix = 'skeleton',
  height,
}) => (
  <Grid columns={columns} gap="1rem">
    {Array.from({ length: count }, (_, i) => (
      <SkeletonCard key={`${keyPrefix}-${i}`} height={height} />
    ))}
  </Grid>
)

export default SkeletonCardGrid
