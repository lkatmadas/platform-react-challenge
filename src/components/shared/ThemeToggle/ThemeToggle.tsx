import Styled from './ThemeToggle.styles'

import { useThemeMode } from '@/theme/useThemeMode'

import type { FC } from 'react'
import type { ThemeToggleProps } from './types'

const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {
  const { mode, toggle } = useThemeMode()

  return (
    <Styled.SwitchWrapper className={className}>
      <Styled.LabelText className="label-before" isActive={mode === 'light'}>
        Light
      </Styled.LabelText>

      <Styled.SwitchLabel>
        <Styled.SwitchInput
          type="checkbox"
          checked={mode === 'dark'}
          onChange={toggle}
          aria-label="Toggle dark mode"
        />
        <Styled.Slider />
      </Styled.SwitchLabel>

      <Styled.LabelText className="label-after" isActive={mode === 'dark'}>
        Dark
      </Styled.LabelText>
    </Styled.SwitchWrapper>
  )
}

export default ThemeToggle
