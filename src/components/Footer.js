import styles from './Footer.module.scss'
import footerLogo from '../images/Logo-vertical.png'
import { FaFacebookSquare, FaInstagramSquare, } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={`container ${styles.footer_content}`}>
        <div className={styles.footer_logo}>
          <img src={footerLogo} alt="footer logo" />
        </div>
        <div className={styles.footer_group}>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
          </ul>
        </div>
        <div className={styles.footer_group}>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>+44 123 1234 1234</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>
        <div className={styles.footer_group}>
          <ul>
            <li className={styles.social_link}><a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookSquare size={25} /></a></li>
            <li className={styles.social_link}><a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener"><FaInstagramSquare size={25} /></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; 2023 Little Lemon Restaurants
      </div>
    </footer>
  )
}

export default Footer