import styles from './Header.module.scss'
import Logo from '../images/Logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const navigate = useNavigate()
  const handleClick = (anchor) => () => {
    navigate(`/#${anchor}`)
    setIsNavOpened(false)
  }
  return (
    <header className={`container ${styles.wrapper}`}>
      <div className={styles.logo_container}>
        <Link to="/"><img src={Logo} alt="logo" /></Link>
      </div>
      <nav className={styles.nav_menu}>
        <ul className={isNavOpened ? styles.active : null}>
          <li>
            <Link to="/" onClick={() => setIsNavOpened(false)}>Home</Link>
          </li>
          <li>
            <a href="/#about" onClick={handleClick('about')}>About</a>
          </li>
          <li>
            <a href="/#reviews" onClick={handleClick('reviews')}>Reviews</a>
          </li>
          <li>
            <Link to="/reservation" onClick={() => setIsNavOpened(false)}>Reservations</Link>
          </li>
          <li>
            <a href="/#special" onClick={handleClick('special')}>Order Online</a>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={() => setIsNavOpened(!isNavOpened)}>
        {isNavOpened ? <AiOutlineClose size={25} color={"gray"} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  )
}

export default Header