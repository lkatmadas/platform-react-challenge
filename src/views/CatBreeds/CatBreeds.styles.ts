import styled from '@emotion/styled'

const CatBreeds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-inline: 1.25rem;

  ul {
    padding: 0;
  }
`

const CatBreedItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  list-style: none;
  cursor: pointer;
`

const Styled = {
  CatBreeds,
  CatBreedItem,
}

export default Styled
