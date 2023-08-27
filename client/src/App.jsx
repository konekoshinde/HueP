import CustomPalette from "./pages/CustomPalette"
import GradientPalette from "./pages/GradientPalette"
import ImgPalette from "./pages/ImgPalette"
import Scheme from "./pages/Scheme"
import SiteColor from "./pages/SiteColor"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/customPalette" element={<CustomPalette/>}></Route>
        <Route exact path="/Gradient" element={<GradientPalette />}></Route>
        <Route exact path="/imgpalette" element={<ImgPalette />}></Route>
        <Route exact path="/site" element={<SiteColor />}></Route>
        <Route exact path="/Scheme" element={<Scheme/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
