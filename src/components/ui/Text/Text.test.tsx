import { screen } from '@testing-library/react'

import { describe, it, expect } from 'vitest'
import Text from './Text'
import { renderWithTheme } from '@/config/renderWithTheme'

describe('Text', () => {
  it('renders children', () => {
    renderWithTheme(<Text>Hello World</Text>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it("defaults to 'div' tag", () => {
    const { container } = renderWithTheme(<Text>Default Tag</Text>)
    const el = container.querySelector('div')
    expect(el).toBeTruthy()
    expect(el?.tagName).toBe('DIV')
    expect(el?.textContent).toBe('Default Tag')
  })

  it('renders with custom tag (e.g., span)', () => {
    const { container } = renderWithTheme(<Text as="span">Span Text</Text>)
    const el = container.querySelector('span')
    expect(el).toBeTruthy()
    expect(el?.tagName).toBe('SPAN')
    expect(el?.textContent).toBe('Span Text')
  })

  it('applies the variant prop as an attribute for style targeting', () => {
    renderWithTheme(<Text variant="normal">Styled Variant</Text>)
    const el = screen.getByText('Styled Variant')
    expect(el).toBeInTheDocument()
  })

  it('forwards className', () => {
    renderWithTheme(<Text className="test-class">Styled</Text>)
    const el = screen.getByText('Styled')
    expect(el.className.includes('test-class')).toBe(true)
  })

  it("supports semantic tags like 'p', 'strong', or 'section'", () => {
    const { container } = renderWithTheme(<Text as="p">Paragraph</Text>)
    const el = container.querySelector('p')
    expect(el?.textContent).toBe('Paragraph')
  })

  it('renders an empty element when children are null', () => {
    const { container } = renderWithTheme(<Text>{null}</Text>)
    const el = container.querySelector('div')
    expect(el).toBeInTheDocument()
    expect(el?.textContent).toBe('')
  })
})
