import { Route, Routes } from "react-router"
import { Home, Saved } from "../pages"

const CustomRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Saved" element={<Saved/>}/>
    </Routes>
  )
}

export default CustomRoutes