import CustomPalette from "./pages/CustomPalette"
import GradientPalette from "./pages/GradientPalette"
import ImgPalette from "./pages/ImgPalette"
import Scheme from "./pages/Scheme"
import SiteColor from "./pages/SiteColor"
import Home from "./pages/Home"
import Footer from "./component/Footer"
import Nav from "./component/Nav"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>

    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/customPalette" element={<CustomPalette/>}></Route>
        <Route exact path="/Gradient" element={<GradientPalette />}></Route>
        <Route exact path="/imgpalette" element={<ImgPalette />}></Route>
        <Route exact path="/Site" element={<SiteColor />}></Route>
        <Route exact path="/Scheme" element={<Scheme/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
