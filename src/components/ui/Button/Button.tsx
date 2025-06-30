import Styled from './Button.styles'

import type { FC } from 'react'
import type { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  testId = 'button',
  ...props
}) => {
  const { Button } = Styled
  return (
    <Button variant={variant} size={size} {...props} data-testid={testId}>
      {children}
    </Button>
  )
}

export default Button
