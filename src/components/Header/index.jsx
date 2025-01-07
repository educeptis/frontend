import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'

function Header() {
  const { pathname } = useLocation()

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
    </header>
  )
}

export default Header
