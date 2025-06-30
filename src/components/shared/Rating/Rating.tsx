import Styled from './Rating.styles'

import StarIcon from '@assets/star.svg'
import StarBorderIcon from '@assets/star-border.svg'

import type { RatingProps } from './types'

const Rating: React.FC<RatingProps> = ({ stars, max = 5, className }) => {
  const { Rating } = Styled
  return (
    <Rating className={className} aria-label={`Rating: ${stars} out of ${max}`}>
      {Array.from({ length: max }, (_, index) =>
        index < stars ? (
          <img
            src={StarIcon}
            alt="filled star"
            data-testid="filled-star"
            key={index}
            width="20"
            height="20"
          />
        ) : (
          <img
            src={StarBorderIcon}
            alt="empty star"
            data-testid="empty-star"
            key={index}
            width="20"
            height="20"
          />
        ),
      )}
    </Rating>
  )
}

export default Rating
