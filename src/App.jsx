import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Priceing from "./pages/Priceing";
import Blog from "./pages/Blog";
import Register from "./pages/Register/Register";
import Navbar from "./components/navbar/Nabvar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/priceing" element={<Priceing />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
