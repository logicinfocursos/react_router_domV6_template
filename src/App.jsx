import { Outlet } from "react-router-dom"

import { Footer, Navbar } from './components'


export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}