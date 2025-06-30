import { forwardRef } from 'react'
import Styled from './Button.styles'

import type { ButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'default', testId = 'button', ...props }, ref) => {
    const { Button: StyledButton } = Styled

    return (
      <StyledButton ref={ref} variant={variant} size={size} {...props} data-testid={testId}>
        {children}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
export default Button
