import styled from '@emotion/styled'
import { mq } from '@theme/mediaQueries'

const FeaturedImage = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
`

const FeaturedImageWrapper = styled.div`
  position: relative;

  .fav-action {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`

const CatInformation = styled.div`
  padding: 1rem;
  max-height: 50vh;
  overflow-y: auto;

  ${mq.md} {
    padding: 2rem;
    max-height: 16rem;
  }

  & .flex {
    display: flex;
    justify-content: space-between;
    text-align: right;
  }

  & .center {
    text-align: center;
  }
`

const Link = styled.a``

const Styled = {
  FeaturedImageWrapper,
  FeaturedImage,
  CatInformation,
  Link,
}

export default Styled
