import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inference from "./Components/Inference";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inference" element={<Inference />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
