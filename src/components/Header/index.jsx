import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './styles.module.css'

function Header() {
  const { pathname } = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles['Header']}>
      <Link to="/" className={styles['HeaderLogo']}>
        <img src="/favicon.png" alt="logo" />
        Educeptis
      </Link>

      <nav className={styles['HeaderNav']}>
        <Link to="/" className={pathname === '/' ? styles['active'] : ''}>
          <img src="/icons/home-icon.png" alt="Home" />
          Home
        </Link>
        <Link to="/about-us" className={pathname === '/about-us' ? styles['active'] : ''}>
          <img src="/icons/about-icon.png" alt="About Us" />
          About Us
        </Link>
        <Link to="/features" className={pathname === '/features' ? styles['active'] : ''}>
          <img src="/icons/features-icon.png" alt="Features" />
          Features
        </Link>
      </nav>

      <div className={styles['HeaderActions']}>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className={styles['HeaderMenu']}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/icons/menu-icon.png" alt="Menu" />
        </button>

        {
          menuOpen && (
            <nav className={styles['HeaderMenuNav']}>
              <Link
                to="/"
                className={pathname === '/' ? styles['active'] : ''}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={pathname === '/about-us' ? styles['active'] : ''}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/features"
                className={pathname === '/features' ? styles['active'] : ''}
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </nav>
          )
        }
      </div>
    </header>
  )
}

export default Header
