import styles from './Special.module.scss'
import SpecialCard from './utilities/SpecialCard'
import specialMenu from './data/specialMenu'

const Special = () => {
  return (
    <section id="special" className={styles.wrapper}>
      <div className={`container`}>
        <div className={styles.title}>
          <h2 className="sub_title">This week Special menu </h2>
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