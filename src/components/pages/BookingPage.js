import BookingForm from '../booking/BookingForm'
import { useReducer, useState } from 'react'
import { fetchAPI, submitAPI } from '../data/api'
import BookingSuccess from '../booking/BookingSuccess'
import DateHandler from '../data/DateHandler'

const updateTimes = (availableTimes, action) => {
  if (action.type === 'updateDate') {
    const newDate = availableTimes.find((item) => {
      return DateHandler(item.date) === DateHandler(action.selectedDate)
    })
    if (!newDate) {
      availableTimes.push({
        date: action.selectedDate,
        time: fetchAPI(action.selectedDate),
      })
    }
    return availableTimes
  } else if (action.type === 'removebookedTime') {
    availableTimes.forEach((item) => {
      if (DateHandler(item.date) === DateHandler(action.bookedDate)) {
        const updatedTime = item.time.filter((time) => {
          return time !== action.bookedTime
        })
        item.time = updatedTime
      }
    })
    return availableTimes
  }
}

const initializeTimes = (initialDay) => {
  return [{
    date: initialDay,
    time: fetchAPI(initialDay),
  }]
}

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, new Date(), initializeTimes)
  const [isConfirmed, setIsConfirmed] = useState({
    status: false,
    bookingInfo: "",
  })

  const submitForm = (bookingInfo) => {
    console.log('make a booking', bookingInfo)
    if (submitAPI(bookingInfo)) {
      setIsConfirmed({ status: true, bookingInfo: bookingInfo })
    }
  }

  return (
    <>
      {isConfirmed.status ? <BookingSuccess booking={isConfirmed} closeHandler={() => setIsConfirmed({ ...isConfirmed, status: false })} /> :
        <BookingForm getbookingInfo={submitForm} formHandler={submitForm} timeSlot={availableTimes} dispatch={dispatch} />
      }
    </>
  )
}

export default BookingPage