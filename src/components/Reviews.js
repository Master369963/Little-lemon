import styles from './Reviews.module.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/less/pagination';
import reviews from './data/reviewData'

const Reviews = () => {
  return (
    <section className={styles.wrapper} id="reviews">
      <div className={styles.background}></div>
      <div className='container'>
        <h2 className='sub_title'>Our reviews</h2>
        <div className={styles.slider_container}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            navigation
            breakpoints={{
              340: {
                width: 200,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
              1040: {
                width: 1040,
                slidesPerView: 5,
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard reviewData={review} />
              </SwiperSlide>
            )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Reviews