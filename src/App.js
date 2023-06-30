import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <hr className="bg-slate-300 h-1 w-full my-5" />
      <Footer />
    </div>
  );
}

export default App;
