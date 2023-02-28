const DateHandler = (date) => {
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const bookingDay = day[date.getDay()]
  const bookingDate = date.getDate()
  const bookingMonth = month[date.getMonth()]

  return (`${bookingDay}, ${bookingDate} ${bookingMonth}`)

}

export default DateHandler