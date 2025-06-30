import { type FC } from 'react'

import { Grid, CardItem } from '@components'

import type { CatGridProps } from '@views/CatList/components/types'

const CatGrid: FC<CatGridProps> = ({ cats, onSelect, actions, onCardHover }) => {
  return (
    <Grid columns={5} gap="1rem">
      {cats.map((cat, index) => (
        <CardItem
          key={cat.id}
          item={cat}
          onItemSelect={onSelect}
          actions={actions}
          onMouseEnter={() => onCardHover?.(cat)}
          data-testid="cat-card"
          index={index}
        />
      ))}
    </Grid>
  )
}

export default CatGrid
