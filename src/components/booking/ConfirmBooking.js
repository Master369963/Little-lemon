import styles from './ConfirmBooking.module.scss'
import { BsCalendarEvent, BsClock, BsPerson } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import DateHandler from '../data/DateHandler'
import { useFormik } from 'formik'
import * as Yup from 'yup';


const ConfirmBooking = ({ bookingInfo, cancelHandler, getSubmit, dispatch }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      phone: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This area is required'),
      surName: Yup.string()
        .max(15, 'Must be 20 characters or less')
        .required('This area is required'),
      phone: Yup.string()
        .min(10, 'Invalid phone number')
        .max(13)
        .required('This area is required'),
      email: Yup.string().email('Invalid email address')
        .required('This area is required'),
      comment: Yup.string()
        .max(30)
    }),
    onSubmit: (value => {
      getSubmit(value)
      dispatch({ type: 'removebookedTime', bookedTime: bookingInfo.res_time, bookedDate: bookingInfo.res_date })
    }),
  })

  const bookingDay = DateHandler(bookingInfo.res_date)

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h2 className="sub_title">Enter Your Information</h2>
        <div className={styles.close_tag} onClick={cancelHandler}>
          <GrClose />
        </div>
        <form className={styles.booking_content} onSubmit={formik.handleSubmit}>
          <div className={styles.input_area}>
            <div className={styles.input_item}>
              <input type="text"
                placeholder="First Name"
                name="firstName"
                className={formik.touched.firstName && formik.errors.firstName ? styles.invalid : null}
                {...formik.getFieldProps('firstName')} />
              {formik.touched.firstName && formik.errors.firstName ? (
                <span className={styles.invalid_msg}>{formik.errors.firstName}</span>
              ) : null}
            </div>
            <div className={styles.input_item}>
              <input type="text"
                placeholder="Surname"
                name="surName"
                className={formik.touched.surName && formik.errors.surName ? styles.invalid : null}
                {...formik.getFieldProps('surName')} />
              {formik.touched.surName && formik.errors.surName ? (
                <div className={styles.invalid_msg}>{formik.errors.surName}</div>
              ) : null}
            </div>
            <div className={styles.input_item}>
              <input type="text"
                placeholder="Phone number"
                name="phone"
                className={formik.touched.phone && formik.errors.phone ? styles.invalid : null}
                {...formik.getFieldProps('phone')} />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={styles.invalid_msg}>{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className={styles.input_item}>
              <input type="email"
                placeholder="Email"
                name="email"
                className={formik.touched.email && formik.errors.email ? styles.invalid : null}
                {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email ? (
                <div className={styles.invalid_msg}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className={styles.input_item}>
              <input type="text"
                placeholder="Add a special request(Optional)"
                name="comment"
                className={formik.touched.comment && formik.errors.comment ? styles.invalid : null}
                {...formik.getFieldProps('comment')} />
              {formik.touched.comment && formik.errors.comment ? (
                <div className={styles.invalid_msg}>{formik.errors.comment}</div>
              ) : null}
            </div>
            <input type="submit" value="Confirm Booking" className={(formik.isValid && formik.dirty) ? styles.confirm_btn : [styles.confirm_btn, styles.disable].join(' ')} />
            {/* <button type="submit">Submit</button> */}
          </div>
          <div className={styles.booking_info}>
            <h3>Your reservation details</h3>
            <div>
              <BsCalendarEvent />
              <span>{bookingDay}</span>
            </div>
            <div>
              <BsClock />
              <span>{bookingInfo.res_time}</span>
            </div>
            <div>
              <BsPerson />
              <span>{bookingInfo.guests} people</span>
            </div>
            <div className={styles.booking_notes}>
              <p>Please Note:</p>
              <ul>
                <li>We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your booked time.</li>
                <li>Your table will be booked for 1 hour 30 minutes for parties of up to 2; 2 hours for parties of up to 6; and 2 hours 30 minutes for parties of 7+.</li>
                <li>Should you wish to cancel your reservation, please inform us 24 hours prior to your reservation to avoid a late cancellation</li>
              </ul>
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}

export default ConfirmBooking