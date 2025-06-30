import styled from '@emotion/styled'
import { mq } from '@/theme/mediaQueries'
import type { GridStyleProps } from './types'

const Grid = styled.div<GridStyleProps>`
  display: grid;
  gap: ${({ gap }) => gap};
  grid-template-columns: 1fr;
  width: 100%;

  ${mq.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.lg} {
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  }
`

const Styled = {
  Grid,
}

export default Styled
