import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar"
import { useEffect } from "react"
import Footer from "./Components/Footer/Footer"

function App() {
  const location =  useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div className="relative">
      <NavBar/>
      <div className="min-h-[77vh]">
        <Outlet/>
      </div>
      <Footer className="absolute top-[95%]"/>
    </div>
  )
}

export default App
