import styled from '@emotion/styled'

const CardItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;
  width: 100%;
  background-color: #f3f3f3;
  border: none;
  border-radius: 0.625rem;

  &:hover,
  &:focus-visible,
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.primary};

    .overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 18.75rem;
  object-fit: cover;
  border-radius: 0.625rem;
  cursor: pointer;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.27);
  color: white;
  border-radius: 0.625rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const ButtonActions = styled.div`
  display: flex;
  gap: 1rem;
`

const Styled = {
  CardItem,
  CardImage,
  Overlay,
  ButtonActions,
}

export default Styled
