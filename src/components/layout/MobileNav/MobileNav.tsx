import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components'

import Styled from './MobileNav.styles'
import { NAV_LINKS } from '@/config/navigation'
import type { MobileNavProps } from './types'

const MobileNav: FC<MobileNavProps> = ({ onClose }) => {
  const { MobileNav } = Styled
  const { pathname } = useLocation()

  return (
    <MobileNav role="dialog" aria-modal="true" aria-label="Main mobile menu">
      <Button
        variant="ghost"
        className="mobile-menu__close"
        onClick={onClose}
        aria-label="Close mobile menu"
      >
        {'\u2715'}
      </Button>

      <ul className="mobile-menu__list" role="menu">
        {NAV_LINKS.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className="mobile-menu__link"
              aria-current={pathname === path ? 'page' : undefined}
              role="menuitem"
              onClick={onClose}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </MobileNav>
  )
}

export default MobileNav
