import { type FC } from 'react'

import Styled from './Text.styles'

import type { TextProps } from './types'

const Text: FC<TextProps> = ({ as = 'div', children, className, variant = 'normal' }) => {
  const { Text } = Styled
  return (
    <Text as={as} className={className} variant={variant}>
      {children}
    </Text>
  )
}

export default Text
