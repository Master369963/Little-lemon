import styles from './BookingSuccess.module.scss'
import DateHandler from '../data/DateHandler'

const BookingSuccess = ({ closeHandler, booking }) => {
  console.log('book', booking.bookingInfo)
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {/* <h2 className="sub_title">Booking Completed!</h2> */}
        <h2 className="sub_title">Hi, <span>{booking.bookingInfo.firstName}</span></h2>
        <h2 className="sub_title">Thank you for making a reservation at Little Lemon!</h2>
        <div className={styles.booking_info}>

          <p>{booking.bookingInfo.firstName} {booking.bookingInfo.surName}</p>
          <p>{DateHandler(booking.bookingInfo.res_date)}</p>
          <p>For {booking.bookingInfo.guests} {booking.bookingInfo.guests > 1 ? 'guests' : 'guest'} at {booking.bookingInfo.res_time}</p>
        </div>
        <button aria-label="On Click" className="primary-btn" onClick={closeHandler}>Make a reservation</button>
      </div>
    </div>
  )
}

export default BookingSuccess