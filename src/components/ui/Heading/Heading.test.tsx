import { screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Heading from './Heading'
import { renderWithTheme } from '@/config/renderWithTheme'

describe('Heading', () => {
  it('renders children correctly', () => {
    renderWithTheme(<Heading>Title</Heading>)
    const heading = screen.getByText('Title')
    expect(heading).toBeInTheDocument()
  })

  it('defaults to h1 tag', () => {
    renderWithTheme(<Heading>Default Tag</Heading>)
    const heading = screen.getByText('Default Tag')
    expect(heading.tagName).toBe('H1')
  })

  it('renders specified heading tag (e.g., h2)', () => {
    renderWithTheme(<Heading level="h2">Subheading</Heading>)
    const heading = screen.getByText('Subheading')
    expect(heading.tagName).toBe('H2')
  })

  it('applies size prop for styling (visual only)', () => {
    renderWithTheme(<Heading size="lg">Big</Heading>)
    const heading = screen.getByText('Big')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle('font-size: 2.25rem')
  })

  it('forwards className', () => {
    renderWithTheme(<Heading className="test-class">Styled Heading</Heading>)
    const heading = screen.getByText('Styled Heading')
    expect(heading).toHaveClass('test-class')
  })
})
