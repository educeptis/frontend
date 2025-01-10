import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

function RegistrationPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  const slides = [
    {
      image: '/illustrations/illustration-4.png',
      text: 'Access internships, scholarships, and resources'
    },
    {
      image: '/illustrations/illustration-2.png',
      text: 'Connect with students and professionals'
    },
    {
      image: '/illustrations/illustration-1.png',
      text: 'Get personalized recommendations'
    },
    {
      image: '/illustrations/illustration-3.png',
      text: 'Learn and grow with Educeptis'
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeSlide, slides.length])

  return (
    <div className={styles['RegistrationPage']}>
      <section className={styles['SlideShowSection']}>
        <div className={styles['SlideShow']}>
          <img src={slides[activeSlide].image} alt="Slide" />
        </div>

        <p>
          {slides[activeSlide].text}
        </p>

        <div className={styles['SlideShowPagination']}>
          <button className={activeSlide === 0 ? styles['active'] : ''} onClick={() => setActiveSlide(0)}></button>
          <button className={activeSlide === 1 ? styles['active'] : ''} onClick={() => setActiveSlide(1)}></button>
          <button className={activeSlide === 2 ? styles['active'] : ''} onClick={() => setActiveSlide(2)}></button>
          <button className={activeSlide === 3 ? styles['active'] : ''} onClick={() => setActiveSlide(3)}></button>
        </div>
      </section>

      <section className={styles['RegistrationFormSection']}>
        <Link to="/" className={styles['RegistrationFormSectionLogo']}>
          <img src="/favicon.png" alt="logo" />
          Educeptis
        </Link>

        <h1>Create Your Account</h1>
        <p>Join Educeptis and unlock opportunities.</p>

        <button className={styles['GoogleButton']}>
          <img src="/icons/google-icon.png" alt="Google" />
          Google
        </button>

        <form className={styles['RegistrationForm']} onSubmit={handleSubmit}>
          <h4>
            <span>
              Continue with email
            </span>
          </h4>

          <div className={styles['InputField']}>
            <img src="/icons/user-icon.png" alt="Username" />
            <input type="text" placeholder="Username" />
          </div>

          <div className={styles['InputField']}>
            <img src="/icons/email-icon.png" alt="Email" />
            <input type="email" placeholder="Email" />
          </div>

          <div className={styles['InputField']}>
            <img src="/icons/password-icon.png" alt="Password" />
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
            />
            <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
              <img src="/icons/eye-icon.png" alt="Show Password" />
            </button>
          </div>

          <div className={styles['InputField']}>
            <img src="/icons/password-icon.png" alt="Password" />
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
            />
            <button type="button" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <img src="/icons/eye-icon.png" alt="Show Password" />
            </button>
          </div>

          <div className={styles['RegistrationFormFooter']}>
            <div className={styles['RegistrationFormCheckboxField']}>
              <div className={styles['Checkbox']}>
                <input type="checkbox" id="remember-me" />
                <span className={styles['Checkmark']} />
              </div>
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit">Sign Up</button>

          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </section>
    </div>
  )
}

export default RegistrationPage
