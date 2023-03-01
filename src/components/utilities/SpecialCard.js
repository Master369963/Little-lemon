import styles from './SpecialCard.module.scss'
import { GiScooter } from 'react-icons/gi'
import photo from '../../images/greekSalad.png'

const SpecialCard = ({ specialItem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_photo}>
        <img src={specialItem.photo} alt="" />
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_title}>
          <h3>{specialItem.name}</h3>
          <span>£{specialItem.price}</span>
        </div>
        <p>{specialItem.description}</p>
        {/* <div className={styles.card_footer}>
          <p>Order a delivery</p>
          <GiScooter size={20} />
        </div> */}
      </div>

    </div>
  )
}

export default SpecialCard