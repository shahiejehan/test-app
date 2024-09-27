import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import WebDesign from "./components/pages/WebDesign";
import Iot from "./components/pages/Iot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/seo" element={<Iot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
