import { useEffect } from 'react'

export const useLockBodyScroll = (shouldLock: boolean = true): void => {
  useEffect(() => {
    if (!shouldLock) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [shouldLock])
}
