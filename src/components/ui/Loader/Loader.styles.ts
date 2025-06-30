import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9999;
`

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  width: 5rem;
  height: 5rem;

  &:after {
    content: ' ';
    display: block;
    margin: 0.5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.375rem solid;
    border-color: ${({ theme }) => theme.primary} transparent ${({ theme }) => theme.primary}
      transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

const Styled = {
  Loader,
  Overlay,
  VisuallyHidden,
}

export default Styled
