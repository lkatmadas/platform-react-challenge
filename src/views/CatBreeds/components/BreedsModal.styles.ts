import styled from '@emotion/styled'
import { mq } from '@theme/mediaQueries'

const ModalContentWrapper = styled.div`
  padding: 1rem;
  max-height: 32rem;
  overflow-y: auto;

  ${mq.md} {
    padding: 2rem;
  }
`
const Styled = {
  ModalContentWrapper,
}

export default Styled
