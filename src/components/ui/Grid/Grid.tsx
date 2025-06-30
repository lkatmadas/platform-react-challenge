import Styled from './Grid.styles'

import type { FC } from 'react'
import type { GridProps } from './types'

const Grid: FC<GridProps> = ({ children, columns = 1, gap = '1rem', className, as = 'div' }) => {
  const { Grid } = Styled

  return (
    <Grid as={as} columns={columns} gap={gap} className={className}>
      {children}
    </Grid>
  )
}

export default Grid
