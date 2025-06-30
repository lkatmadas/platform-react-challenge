import { type FC } from 'react'

import Styled from './Thumbnail.styles'

import GWILogo from '@assets/logo.svg'

type ThumbnailProps = {
  image?: {
    url?: string
  }
  name?: string
  fallback?: string
  round?: boolean
}

const Thumbnail: FC<ThumbnailProps> = ({ image, fallback, name, round = true }) => {
  const { Thumbnail } = Styled
  const src = image?.url ?? fallback ?? GWILogo

  return (
    <Thumbnail
      src={src}
      alt={name}
      width="50"
      height="50"
      round={round}
      role="presentation"
      loading="lazy"
      data-testid="breed-thumbnail"
    />
  )
}

export default Thumbnail
