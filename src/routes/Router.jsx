import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Explore from "../pages/explore/Explore";
import Nopage from "../pages/noPage/Nopage";

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="explore" element={<Explore/>}/>
        <Route path="*" element={<Nopage/>}/>
    </Routes>
  )
}

export default Router
