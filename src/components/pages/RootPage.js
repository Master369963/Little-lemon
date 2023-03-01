import { Outlet } from "react-router-dom"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

const RootPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootPage