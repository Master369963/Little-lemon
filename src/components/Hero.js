import styles from './Hero.module.scss'
import hero from '../images/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero" className={`container ${styles.wrapper}`}>
      <div className={styles.subsection}>
        <h1>Little Lemon</h1>
        <span>Roma</span>
        <p>We are a family owned Italian restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/reservation"><button className="primary-btn">Reserve a table</button></Link>
      </div>
      <div className={styles.img_container}>
        <img src={hero} alt="hero" />
      </div>
    </section>
  )
}

export default Hero