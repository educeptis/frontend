import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles['Footer']}>
      <div className={`${styles['FooterMobileTop']} ${styles['ShowOnMobile']}`}>
        <div className={styles['Logo']}>
          <img src="favicon.png" alt="Logo" />
          Educeptis
        </div>

        <p>
          Educeptis is dedicated to empowering individuals through education and career development. We provide innovative tools and insights to enhance learning and professional growth.
        </p>
      </div>

      <section>
        <div className={`${styles['Logo']} ${styles['HideOnMobile']}`}>
          <img src="favicon.png" alt="Logo" />
          Educeptis
        </div>

        <p className={styles['HideOnMobile']}>
          Educeptis is dedicated to empowering individuals through education and career development. We provide innovative tools and insights to enhance learning and professional growth.
        </p>

        <div />

        <h3>Follow Us</h3>

        <ul>
          <li>
            <a href="https://www.facebook.com/educeptis" target="_blank" rel="noreferrer">
              <img src="icons/fb-icon.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/educeptis" target="_blank" rel="noreferrer">
              <img src="icons/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/educeptis" target="_blank" rel="noreferrer">
              <img src="icons/x-icon.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/educeptis" target="_blank" rel="noreferrer">
              <img src="icons/ig-icon.png" alt="Instagram" />
            </a>
          </li>
        </ul>

        <div />

        <img src="icons/google-play-icon.png" alt="Download on Google Play" />
        <img src="icons/app-store-icon.png" alt="Download on IOS App Store" />

        <div />

        <p>
          &copy; 2025 Educeptis Limited. All Rights Reserved.
        </p>
      </section>

      <section>
        <h3>Information</h3>

        <ul>
          <li>
            <Link to="/">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/">
              Terms Of Use
            </Link>
          </li>
          <li>
            <Link to="/">
              License Agreement
            </Link>
          </li>
          <li>
            <Link to="/">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/">
              Copyright Information
            </Link>
          </li>
          <li>
            <Link to="/">
              Cookies Policy
            </Link>
          </li>
          <li>
            <Link to="/">
              FAQ
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h3>Contact Us</h3>

          <div>
            <p>Email: info@educeptis.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        <div>
          <h3>Services</h3>

          <ul>
            <li>
              <Link to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link to="/">
                License Agreement
              </Link>
            </li>
            <li>
              <Link to="/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/">
                Copyright Information
              </Link>
            </li>
            <li>
              <Link to="/">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link to="/">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer
