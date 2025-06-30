import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { AppTheme } from '@/theme/themeTypes'
import type { ButtonSize, ButtonVariant } from './types'

// Utility: Variant styles
const getVariantStyles = (theme: AppTheme, variant: ButtonVariant = 'primary') => {
  switch (variant) {
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.primary};
        border: 2px solid ${theme.primary};
      `
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.primary};
        border: none;
      `
    case 'primary':
    default:
      return css`
        background-color: ${theme.primary};
        color: ${theme.background};
        border: 2px solid ${theme.primary};
      `
  }
}

// Utility: Size padding
const getSizePadding = (size: ButtonSize = 'default') =>
  size === 'small' ? '0.5rem 0.625rem' : '0.9375rem 0.875rem'

const Button = styled.button<{ variant?: ButtonVariant; size?: ButtonSize }>`
  ${({ theme, variant = 'primary', size = 'default' }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fontSizes.md};
    width: fit-content;
    border-radius: 0.5rem;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    padding: ${getSizePadding(size)};

    ${getVariantStyles(theme, variant)};

    &:hover {
      opacity: 0.8;
    }
  `}
`

const Styled = {
  Button,
}

export default Styled
