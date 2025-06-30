import { useRef, useState, type FC } from 'react'
import { Link } from 'react-router-dom'

import { Button, ThemeToggle } from '@/components'
import PrimaryNav from '../PrimaryNav/PrimaryNav'
import MobileNav from '../MobileNav/MobileNav'

import Styled from './Header.styles'

import GWILogo from '@assets/logo.svg'
import MenuIcon from '@assets/menu.svg'

const Header: FC = () => {
  const { Header } = Styled
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    menuButtonRef.current?.focus()
  }
  return (
    <Header>
      <nav className="header-wrapper" aria-label="Primary Navigation" role="navigation">
        <Link to="/" aria-label="Go to homepage" className="logo">
          <img src={GWILogo} className="logo" alt="GWI logo" />
        </Link>

        <PrimaryNav />
        {isMobileMenuOpen && <MobileNav onClose={closeMobileMenu} />}

        <ThemeToggle className="theme-switcher" />

        <div className="main-menu-toggle">
          <Button
            type="button"
            onClick={toggleMobileMenu}
            className="main-menu-toggle__button"
            ref={menuButtonRef}
            variant="ghost"
          >
            <span className="main-menu-toggle__sr-label sr-only">Open main menu</span>
            <img src={MenuIcon} alt="Menu Icon" className="main-menu-toggle__icon" />
          </Button>
        </div>
      </nav>
    </Header>
  )
}

export default Header
