import { type ReactNode } from 'react'

export type ViewWrapperProps = {
  isLoading: boolean
  isError: boolean
  pageTitle?: string
  children: ReactNode
  onRetry?: () => void
}
