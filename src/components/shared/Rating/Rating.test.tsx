import { screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Rating from './Rating'
import { renderWithTheme } from '@/config/renderWithTheme'

afterEach(cleanup)
describe('Rating', () => {
  it('renders the correct number of filled and empty stars', () => {
    renderWithTheme(<Rating stars={3} max={5} />)
    const filled = screen.getAllByTestId('filled-star')
    const empty = screen.getAllByTestId('empty-star')
    expect(filled.length).toBe(3)
    expect(empty.length).toBe(2)
  })

  it('respects max value', () => {
    const { container } = renderWithTheme(<Rating stars={2} max={10} />)
    const totalStars = container.querySelectorAll('img')
    expect(totalStars.length).toBe(10)
  })

  it('adds aria-label for accessibility', () => {
    const { getByLabelText } = renderWithTheme(<Rating stars={4} max={5} />)
    const label = getByLabelText('Rating: 4 out of 5')
    expect(label).toBeTruthy()
  })

  it('accepts className prop', () => {
    const { container } = renderWithTheme(<Rating stars={3} className="test-class" />)
    const wrapper = container.querySelector('.test-class')
    expect(wrapper).not.toBeNull()
  })

  it('renders 0 stars if none provided', () => {
    renderWithTheme(<Rating stars={0} max={5} />)
    const empty = screen.getAllByTestId('empty-star')
    expect(empty.length).toBe(5)
  })
})
