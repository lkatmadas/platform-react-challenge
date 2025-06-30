import styled from '@emotion/styled'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};

  .main-content {
    margin: 3rem auto;
    width: 100%;
    max-width: 80rem;
  }
`

const Styled = {
  LayoutWrapper,
}

export default Styled
