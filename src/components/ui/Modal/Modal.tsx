import { useEffect, useRef, type FC } from 'react'
import ReactDOM from 'react-dom'

import Styled from './Modal.styles'

import { useEscapeKey, useLockBodyScroll } from '@/hooks'
import CloseIcon from '@assets/x-mark.svg'
import type { ModalProps } from './types'

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, size = 'medium', ariaLabel }) => {
  useLockBodyScroll(isOpen)
  useEscapeKey(isOpen, onClose)

  const { Backdrop, Dialog, CloseButton } = Styled

  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose} data-testid="modal-backdrop">
      <Dialog
        size={size}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        ref={dialogRef}
        tabIndex={-1}
        data-testid="modal"
        aria-label={ariaLabel}
      >
        <CloseButton onClick={onClose}>
          <img
            src={CloseIcon}
            alt="close modal"
            className="close-icon"
            loading="lazy"
            data-testid="close-modal"
          />
        </CloseButton>
        {children}
      </Dialog>
    </Backdrop>,
    document.body,
  )
}

export default Modal
