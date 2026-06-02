import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout() {
  return (
    <div className="bg-[#f7f7f7] dark:bg-[#0f0f0f] text-black dark:text-white min-h-screen transition">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout