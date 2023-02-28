import styles from './SpecialCard.module.scss'
import { GiScooter } from 'react-icons/gi'
import photo from '../../images/greekSalad.png'

const SpecialCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_photo}>
        <img src={photo} alt="" />
      </div>
      <div className={styles.card_content}>
        <h3>Greek Salad</h3>
        <span>$12.9</span>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className={styles.card_footer}>
          <p>Order a delivery</p>
          <GiScooter size={20} />
        </div>
      </div>

    </div>
  )
}

export default SpecialCard