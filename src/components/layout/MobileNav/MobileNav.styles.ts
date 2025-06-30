import styled from '@emotion/styled'
import { mq } from '@theme/mediaQueries'

const MobileNav = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
  z-index: 50;

  ${mq.md} {
    display: none;
  }

  .mobile-menu {
    &__close {
      position: absolute;
      align-self: flex-end;
      font-size: 2rem;
      color: ${({ theme }) => theme.text};
      cursor: pointer;
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      gap: 2rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &__link {
      color: ${({ theme }) => theme.text};
      font-size: 1.5rem;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Styled = {
  MobileNav,
}

export default Styled
