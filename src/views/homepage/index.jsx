import Header from '../../components/Header'
import Footer from '../../components/Footer'

import styles from './styles.module.css'

function HomePage() {
  return (
    <div className={styles['HomePage']}>
      <Header />

      <section className={styles['HeroSection']}>
        <img src="/illustrations/illustration-5.png" alt="" />
        <div className={styles['HeroSectionContent']}>
          <h1>Connecting Students With Opportunities.</h1>
          <div className={styles['HeroSectionContentSearch']}>
            <img src="/icons/search-icon.png" alt="" />
            <input type="text" placeholder="LOOK FOR A PROFILE" />
          </div>
          <ul className={styles['HeroSectionContentSearchResults']}>
            <li>
              <p>Wisdom Isaac</p>
              <p>(Student)</p>
              <p>Nigeria</p>
            </li>
            <li>
              <p>Rebecca Douglas</p>
              <p>(Professor)</p>
              <p>South Africa</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles['EducationalProfilingSection']}>
        <div className={styles['EducationalProfilingSectionContent']}>
          <h2>Educational Profiling</h2>
          <p>
            Our platform offers in-depth educational profiling to help students and educators understand learning patterns and strengths. Dive into data-driven insights to enhance educational outcomes.
          </p>
        </div>

        <img src="/illustrations/illustration-12.png" alt="" />
      </section>

      <section className={styles['CareerBuildingSection']}>
        <img src="/illustrations/illustration-11.png" alt="" />
        <div className={styles['CareerBuildingSectionContent']}>
          <h2>Career Building</h2>
          <p>
            Unlock potential with our career-building tools. Whether you&apos;re exploring options or ready to advance, our resources are tailored to support your professional journey.
          </p>
        </div>
      </section>

      <section className={styles['TalentDiscoverySection']}>
        <div className={styles['TalentDiscoverySectionContent']}>
          <h2>Talent Discovery</h2>
          <p>
            Discover and nurture talent with Educeptis. Our platform connects educators and employers with promising individuals, fostering a community of growth and opportunity.
          </p>
        </div>

        <img src="/illustrations/illustration-8.png" alt="" />
      </section>

      <section className={styles['FeaturesSection']}>
        <h2>FEATURES</h2>

        <ul>
          <li>
            <h3>STUDENT</h3>
            <img src="/illustrations/illustration-9.png" alt="" />
            <p>Access internships, scholarships, and resources.</p>
          </li>
          <li>
            <h3>PROFESSOR</h3>
            <img src="/illustrations/illustration-7.png" alt="" />
            <p>Create courses and mentor students.</p>
          </li>
          <li>
            <h3>COMPANIES</h3>
            <img src="/illustrations/illustration-10.png" alt="" />
            <p>Find and hire talented interns.</p>
          </li>
          <li>
            <h3>SCHOLARSHIP</h3>
            <img src="/illustrations/illustration-6.png" alt="" />
            <p>Reach and support deserving students.</p>
          </li>
        </ul>
      </section>

      <section className={styles['GetStartedSection']}>
        <h2>Ready to start your journey with Educeptis?</h2>
        <button>GET STARTED</button>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
