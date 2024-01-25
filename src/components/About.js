import styles from './About.module.scss'

const About = () => {
  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.subsection}>
          <h2 className="sub_title">Little Lemon</h2>
          <span>Roma</span>
          <p>We create authentic pasta from traditional Italian recipes used in Italian households and eateries for decades. We do not compromise on the quality and authenticity because these two characteristics are at the core of Italian food that we all love and enjoy.</p>
          <div className={styles.opentime}>
            <h3>Opening Hours</h3>
            <ul>
              <li><strong>Mon - Fri</strong> 12pm - 3pm | 5pm - 10pm</li>
              <li><strong>Sat</strong> 11:30am - 3pm | 5pm - 11pm</li>
              <li><strong>Sun</strong>Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About