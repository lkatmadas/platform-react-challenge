import { type FC } from 'react'

import { Text, Button, Heading } from '@/components'

import type { ViewWrapperProps } from './types'

const ViewWrapper: FC<ViewWrapperProps> = ({ isError, onRetry, children, pageTitle }) => {
  if (isError)
    return (
      <>
        <Text as="p">Something went wrong. Please try again.</Text>
        {onRetry && <Button onClick={onRetry}>Retry</Button>}
      </>
    )

  return (
    <>
      {pageTitle && <Heading level="h1">{pageTitle}</Heading>}
      {children}
    </>
  )
}

export default ViewWrapper
