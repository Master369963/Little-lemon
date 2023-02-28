import { useState } from 'react'
import styles from './BookingForm.module.scss'
import DatePicker from "react-datepicker"
import { addDays } from "date-fns"
import "react-datepicker/dist/react-datepicker.css"
import { BsCalendarEvent, BsClock, BsPerson } from 'react-icons/bs'
import photo from '../../images/booking.jpg'
import ConfirmBooking from './ConfirmBooking'

const BookingForm = (props) => {
  const [bookingInfo, setBookingInfo] = useState({
    res_date: new Date(),
    res_time: "17:00",
    guests: 2,
    makeABooking: false,
  })

  const handleChange = (event) => {
    setBookingInfo({ ...bookingInfo, [event.target.name]: event.target.value })
  }
  const handleSubmit = (personData) => {
    props.getbookingInfo({ ...bookingInfo, ...personData })
    setBookingInfo({ ...bookingInfo, makeABooking: false })
  }
  const handleDateChange = (date) => {
    setBookingInfo({ ...bookingInfo, res_date: date })
    props.dispatch({ type: 'updateDate', selectedDate: date })

  }

  const cancelBooking = () => {
    setBookingInfo({ ...bookingInfo, makeABooking: false })
  }

  const matchData = props.timeSlot.find((item) => {
    return item.date.toLocaleDateString() === bookingInfo.res_date.toLocaleDateString()
  })

  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.content}`}>
        <div className={styles.img_container}>
          <img src={photo} alt="" />
        </div>

        <div className={styles.booking_content}>
          <h2 className="sub_title">Make a booking</h2>
          <div className={styles.input_group}>
            <BsCalendarEvent />
            <DatePicker onChange={handleDateChange} selected={bookingInfo.res_date} minDate={new Date()} maxDate={addDays(new Date(), 40)}></DatePicker>
          </div>
          <div className={styles.input_group}>
            <BsClock />
            <select name="res_time" value={bookingInfo.res_time} onChange={handleChange}>


              {matchData.time.map((data) => (
                <option value={data} key={data}>{data}</option>
              ))}
            </select>
          </div>
          <div className={styles.input_group}>
            <BsPerson />
            <input type="number" name="guests" min={0} max={8} value={bookingInfo.guests} onChange={handleChange} />
          </div>
          <div className={styles.input_group}>
            <input type="button" onClick={() => setBookingInfo({ ...bookingInfo, makeABooking: true })} value="Make a Reservation" className={styles.btn} />
          </div>
          <p>For groups larger than 8 people, as well as for Private Dining, please give us a call directly on <span>+44 123 1234 1234</span> or send us an email <span>info@littlelemon.com</span>.</p>
          <p>Please kindly let us know if you can not make it to your booking, or if the number of guests changes.</p>
          {bookingInfo.makeABooking && <ConfirmBooking dispatch={props.dispatch} bookingInfo={bookingInfo} cancelHandler={cancelBooking} getSubmit={handleSubmit} />}
        </ div>
      </div>

    </div>
  )
}

export default BookingForm