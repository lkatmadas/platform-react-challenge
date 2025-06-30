import styled from '@emotion/styled'

type ThumbnailStyleProps = {
  round?: boolean
}

const Thumbnail = styled.img<ThumbnailStyleProps>`
  width: 3.125rem;
  height: 3.125rem;
  object-fit: cover;
  background-color: #f3f3f3;
  border-radius: ${({ round = true }) => (round ? '50%' : '6px')};
`

const Styled = {
  Thumbnail,
}

export default Styled
