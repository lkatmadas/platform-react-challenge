import styled from '@emotion/styled'
import type { StyledTextProps } from './types'

const Text = styled.div<StyledTextProps>`
  margin: 0;
  font-weight: ${({ variant }) => (variant === 'strong' ? 700 : 400)};
  color: ${({ theme }) => theme.text};
`

const Styled = {
  Text,
}

export default Styled
