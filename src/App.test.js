import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/booking/BookingForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders the BookingForm heading', () => {
  render(<BookingForm timeSlot={['17: 00', '17: 30']} />)
  const headingElement = screen.getByText("Make a booking")
  expect(headingElement).toBeInTheDocument()
})

test('Render the initializeTimes', () => {

})