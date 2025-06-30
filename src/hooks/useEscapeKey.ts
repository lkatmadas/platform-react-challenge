import { useEffect } from 'react'

export const useEscapeKey = (isActive: boolean, onEscape: () => void): void => {
  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onEscape()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, onEscape])
}
