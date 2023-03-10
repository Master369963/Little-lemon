import styles from './Footer.module.scss'
import footerLogo from '../../images/Logo-vertical.png'
import { FaFacebookSquare, FaInstagramSquare, } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={`container ${styles.footer_content}`}>
        <div className={styles.footer_logo}>
          <img src={footerLogo} alt="footer logo" />
        </div>
        <div className={styles.footer_group}>
          <ul>
            <li>Blackfriars Road, London SE1 9UD</li>
            <li>+44 123 1234 1234</li>
            <li>info@littlelemon.com</li>
          </ul>
          <div className={styles.social_links}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookSquare size={25} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener"><FaInstagramSquare size={25} /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; 2023 Little Lemon Restaurants
      </div>
    </footer>
  )
}

export default Footer