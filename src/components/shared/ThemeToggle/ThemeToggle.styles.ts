import styled from '@emotion/styled'

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 3.125rem;
  height: 1.625rem;
`

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.primary};
  }

  &:checked + span::before {
    transform: translateX(24px);
  }
`

export const Slider = styled.span`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.border};
  border-radius: 2.125rem;
  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    left: 0.25rem;
    bottom: 0.1875rem;
    background-color: ${({ theme }) => theme.background};
    transition: 0.4s;
    border-radius: 50%;
  }
`

export const LabelText = styled.span<{ isActive: boolean }>`
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ isActive, theme }) => (isActive ? theme.primary : theme.text)};
  transition: color 0.3s ease;
`

const Styled = {
  SwitchWrapper,
  SwitchLabel,
  SwitchInput,
  Slider,
  LabelText,
}

export default Styled
