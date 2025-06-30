import { type FC } from 'react'

import Styled from './Heading.styles'

import type { HeadingProps } from './types'

const Heading: FC<HeadingProps> = ({ level = 'h1', children, className, size = 'md' }) => {
  const { Heading } = Styled
  return (
    <Heading as={level} size={size} className={className}>
      {children}
    </Heading>
  )
}

export default Heading
