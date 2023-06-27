import "./App.css";
import { Routes, Route } from "react-router-dom";
import Continent from "./components/Continent";
import Country from "./components/Country";

function App() {
  return (
    <div className="app bg-gray-50">
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/continent" element={<Continent />} />
      </Routes>
    </div>
  );
}

export default App;
