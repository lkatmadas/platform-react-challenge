import type { ReactNode } from 'react'

export type ModalSize = 'small' | 'medium' | 'large'

export type DialogProps = {
  size?: ModalSize
}

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  testid?: string
  ariaLabel?: string
} & DialogProps
