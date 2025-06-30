import { type FC } from 'react'

import { Text, Rating } from '@components'

import Styled from './BreedStatsItem.styles'
import type { BreedStatsItemProps } from './types'

const BreedStatsItem: FC<BreedStatsItemProps> = ({ label, value }) => {
  const { BreedStatsItem } = Styled
  return (
    <BreedStatsItem>
      <Text as="p" variant="strong">
        {label}:
      </Text>
      <Rating stars={value} />
    </BreedStatsItem>
  )
}

export default BreedStatsItem
