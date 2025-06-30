import styled from '@emotion/styled'
import { mq } from '@theme/mediaQueries'

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.25rem;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 2px solid ${({ theme }) => theme.border};
  min-height: 4.3rem;
  z-index: 20;

  ${mq.md} {
    padding-inline: 4.8rem;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  .logo,
  .theme-switcher {
    flex: 1;
  }

  .theme-switcher {
    justify-content: flex-end;

    .label-before,
    .label-after {
      display: none;

      ${mq.md} {
        display: block;
      }
    }
  }

  .main-menu-toggle {
    display: block;

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    &__sr-label {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }

  ${mq.md} {
    .main-menu-toggle {
      display: none;
    }
  }

  .logo {
    height: 3.75rem;
    width: auto;
  }
`

const Styled = {
  Header,
}

export default Styled
