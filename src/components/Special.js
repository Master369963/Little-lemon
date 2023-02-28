import styles from './Special.module.scss'
import SpecialCard from './utilities/SpecialCard'
import specialMenu from './data/specialMenu'

const Special = () => {

  console.log(specialMenu)
  return (
    <section id="special" className={styles.wrapper}>
      <div className={`container`}>
        <div className={styles.title}>
          <h2 className="sub_title">This week Special menu </h2>
          <button className='primary-btn'>Online Menu</button>
        </div>
        <div className={styles.cards}>
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
        </div>
      </div>
    </section>
  )
}

export default Special