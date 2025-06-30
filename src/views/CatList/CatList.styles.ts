import styled from '@emotion/styled'

const CatListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding-inline: 1.25rem;
`

const ThemedPlaceholder = styled.div`
  ${({ theme }) => `
    margin: 2rem auto;
    padding: 1rem;
    max-width: 25rem;
    text-align: center;
    background-color: ${theme.background};
    font-size: ${theme.fontSizes.md};
    color: ${theme.text};
    border: 1px solid ${theme.primary};
    border-radius: 0.5rem;
  `}
`

const Styled = {
  CatListWrapper,
  ThemedPlaceholder,
}

export default Styled
