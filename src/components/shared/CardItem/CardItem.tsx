import Styled from './CardItem.styles'

import type { CardItemContent, CardItemProps } from './types'
import type { KeyboardEvent } from 'react'

const CardItem = <T extends CardItemContent>({
  item,
  onItemSelect,
  actions,
  index,
  ...rest
}: CardItemProps<T>) => {
  const { CardItem, CardImage, Overlay, ButtonActions } = Styled
  const isHighPriority = index !== undefined && index < 5

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onItemSelect?.(item)
    }
  }

  return (
    <CardItem
      onClick={() => onItemSelect?.(item)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      aria-label={`Preview image ${item?.id}`}
      data-cat-id={item?.id}
      {...rest}
    >
      <CardImage
        src={item?.url}
        alt={item?.alt ?? `Cat ${item?.id}`}
        loading={isHighPriority ? 'eager' : 'lazy'}
        fetchPriority={isHighPriority ? 'high' : 'low'}
        decoding={isHighPriority ? undefined : 'async'}
      />
      {actions && (
        <Overlay className="overlay">
          <ButtonActions>{actions?.(item)}</ButtonActions>
        </Overlay>
      )}
    </CardItem>
  )
}

export default CardItem
