import { type FC } from 'react'

import Loader from '@/components/ui/Loader/Loader'

import type { SkeletonLoaderProps } from './types'

const SkeletonLoader: FC<SkeletonLoaderProps> = ({
  status,
  error,
  children,
  errorFallback,
  loader = <Loader />,
}) => {
  if (error && errorFallback) return errorFallback

  if (status) return loader
  return children ?? null
}
export default SkeletonLoader
