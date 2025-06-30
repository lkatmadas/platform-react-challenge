import styled from '@emotion/styled'
import type { DialogProps } from './types'
import { mq } from '@theme/mediaQueries'

const Backdrop = styled.div`
  position: fixed;
  place-items: center;
  display: grid;
  inset: 0;
  background: ${({ theme }) => theme.backdrop};
  z-index: 1000;
`

const Dialog = styled.div<DialogProps>`
  position: relative;
  overflow-y: auto;
  width: 100%;
  max-width: ${({ size }) => (size === 'large' ? '60rem' : '40rem')};
  min-height: 80vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;

  ${mq.md} {
    min-height: 19rem;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  padding: 0;
  background: transparent;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  cursor: pointer;
  z-index: 10;

  .close-icon {
    width: 1.875rem;
    height: 1.875rem;
  }
`

const Styled = {
  Backdrop,
  Dialog,
  CloseButton,
}

export default Styled
