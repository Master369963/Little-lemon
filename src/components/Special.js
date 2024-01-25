import styles from './Special.module.scss'
import SpecialCard from './utilities/SpecialCard'
import specialMenu from './data/specialMenu'

const Special = () => {
  return (
    <section id="special" className={styles.wrapper}>
      <div className={`container`}>
        <div className={styles.title}>
          <h2 className="sub_title">This week special menu </h2>
          {/* <button className="primary-btn">Discover the menu</button> */}
        </div>
        <div className={styles.cards}>
          {specialMenu.map((specialItem) => (
            <SpecialCard specialItem={specialItem} key={specialItem.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Special