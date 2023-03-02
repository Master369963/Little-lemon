import './styles/Reset.scss';
import './styles/global.scss';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';
import RootPage from './components/pages/RootPage';

function App() {
  const router = createHashRouter([
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
