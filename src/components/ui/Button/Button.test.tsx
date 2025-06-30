import { cleanup, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import Button from './Button'
import { renderWithTheme } from '@/config/renderWithTheme'

afterEach(cleanup)
describe('Button', () => {
  it('renders children correctly', () => {
    renderWithTheme(<Button>Click Me</Button>)
    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click Me')
  })

  it('uses default variant and size when not provided', () => {
    renderWithTheme(<Button>Default</Button>)
    const button = screen.getByRole('button', { name: 'Default' })

    expect(button).toBeInTheDocument()
  })

  it('applies given variant and size', () => {
    renderWithTheme(
      <Button variant="ghost" size="small">
        Custom
      </Button>,
    )
    const button = screen.getByRole('button', { name: 'Custom' })
    expect(button).toBeInTheDocument()
  })

  it('forwards props like disabled', () => {
    renderWithTheme(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: 'Disabled' })

    expect(button).toBeDisabled()
  })

  it('spreads additional props like test ids', () => {
    renderWithTheme(<Button data-testid="button">Extra</Button>)
    const button = screen.getByTestId('button')

    expect(button).toHaveTextContent('Extra')
  })
})
