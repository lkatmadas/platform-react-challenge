import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import Modal from './Modal'

beforeEach(() => {
  document.body.innerHTML = ''
})

afterEach(cleanup)

describe('Modal', () => {
  it('renders children when open', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>Visible modal</p>
      </Modal>,
    )
    expect(screen.getByText('Visible modal')).toBeInTheDocument()
  })

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal</p>
      </Modal>,
    )
    const backdrop = screen.getByTestId('modal-backdrop')
    fireEvent.click(backdrop)
    expect(onClose).toHaveBeenCalled()
  })

  it('does NOT call onClose when dialog itself is clicked', () => {
    const onClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal</p>
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    fireEvent.click(dialog)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal</p>
      </Modal>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('focuses the modal dialog when opened', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>Modal</p>
      </Modal>,
    )

    const dialog = screen.getByRole('dialog')
    expect(document.activeElement).toBe(dialog)
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal</p>
      </Modal>,
    )

    const closeIcon = screen.getByAltText('close modal')
    fireEvent.click(closeIcon)
    expect(onClose).toHaveBeenCalled()
  })

  it('unmounts when isOpen becomes false', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>Modal</p>
      </Modal>,
    )

    expect(screen.getByText('Modal')).toBeInTheDocument()

    rerender(
      <Modal isOpen={false} onClose={vi.fn()}>
        <p>Modal</p>
      </Modal>,
    )

    expect(screen.queryByText('Modal')).not.toBeInTheDocument()
  })

  it('applies correct size class/style based on size prop', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} size="large">
        <p>Modal</p>
      </Modal>,
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveStyle('max-width: 60rem')
  })

  it('has proper accessibility attributes', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>Modal</p>
      </Modal>,
    )

    const dialog = screen.getByRole('dialog')

    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('tabindex', '-1')
  })

  it('does not call onClose when not open and Escape is pressed', () => {
    const onClose = vi.fn()
    render(
      <Modal isOpen={false} onClose={onClose}>
        <p>Hidden</p>
      </Modal>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalled()
  })
})
