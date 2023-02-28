import './styles/Reset.scss';
import './styles/global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';
import RootPage from './components/pages/RootPage';
import ConfirmBooking from './components/booking/ConfirmBooking';
import BookingSuccess from './components/booking/BookingSuccess';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [{
        index: true,
        element: <HomePage />
      },
      {
        path: "reservation",
        element: <BookingPage />
      },
      {
        path: "confirmbooking",
        element: <ConfirmBooking />,
      },
      {
        path: "success",
        element: <BookingSuccess />
      },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
