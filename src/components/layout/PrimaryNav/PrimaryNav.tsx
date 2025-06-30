import type { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Styled from './PrimaryNav.styles'

import { NAV_LINKS } from '@/config/navigation'
import type { PrimaryNavProps } from './types'

const PrimaryNav: FC<PrimaryNavProps> = ({ onItemClick }) => {
  const { PrimaryNav } = Styled
  const { pathname } = useLocation()

  return (
    <PrimaryNav className="nav-menu">
      {NAV_LINKS.map(({ label, path }) => (
        <li key={path}>
          <Link
            to={path}
            className="nav-link"
            aria-current={pathname === path ? 'page' : undefined}
            role="menuitem"
            onClick={onItemClick}
          >
            {label}
          </Link>
        </li>
      ))}
    </PrimaryNav>
  )
}

export default PrimaryNav
