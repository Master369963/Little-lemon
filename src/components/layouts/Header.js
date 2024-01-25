import styles from './Header.module.scss'
import Logo from '../../images/Logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const navigate = useNavigate()
  const handleClick = (anchor) => () => {
    navigate(`/#${anchor}`)
    setIsNavOpened(false)
  }

  return (
    <header>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo_container}>
          <HashLink to="/#"><img src={Logo} alt="logo" /></HashLink>
        </div>
        <nav className={styles.nav_menu}>
          <ul className={isNavOpened ? styles.active : null}>
            <li onClick={() => setIsNavOpened(false)}>
              <HashLink to="/#">Home</HashLink>
            </li>
            <li>
              <HashLink to={"/#about"} onClick={handleClick('about')}>About</HashLink>
            </li>
            <li>
              <HashLink to={"/#reviews"} onClick={handleClick('reviews')}>Reviews</HashLink>
            </li>
            <li>
              <HashLink to={"/#special"} onClick={handleClick('special')}>Order Online</HashLink>
            </li>
            <li onClick={() => setIsNavOpened(false)}>
              <Link to="/reservation">Reservations</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.hamburger} onClick={() => setIsNavOpened(!isNavOpened)}>
          {isNavOpened ? <AiOutlineClose size={25} color={"gray"} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </header>
  )
}

export default Header