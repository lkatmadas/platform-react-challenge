import styled from '@emotion/styled'
import { mq } from '@theme/mediaQueries'

const PrimaryNav = styled.ul`
  display: none;
  flex: 1;
  justify-content: center;
  gap: 0.8rem;
  padding: 0;
  list-style: none;

  ${mq.md} {
    gap: 1rem;
    display: flex;
  }

  .nav-link {
    color: ${({ theme }) => theme.text};
  }
`

const Styled = {
  PrimaryNav,
}

export default Styled
