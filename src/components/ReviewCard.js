import styles from './ReviewCard.module.scss'

const ReviewCard = ({ reviewData }) => {
  return (
    <div className={styles.review_card} >
      <p>"{reviewData.comment}"</p>
      <h3>- {reviewData.name}</h3>
    </div>
  )
}

export default ReviewCard