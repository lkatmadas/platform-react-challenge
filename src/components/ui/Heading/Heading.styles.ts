import styled from '@emotion/styled'
import type { StyledHeadingProps } from './types'

const fontSizes: Record<string, string> = {
  xs: '1.25rem',
  sm: '1.5rem',
  md: '1.875rem',
  lg: '2.25rem',
}

const Heading = styled.div<StyledHeadingProps>`
  margin: 0;
  font-size: ${({ size }) => fontSizes[size] || size};
  color: ${({ theme }) => theme.text};
`

const Styled = {
  Heading,
}

export default Styled
