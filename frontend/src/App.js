import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inference from "./Components/Inference";
import RealTime from "./Components/RealTime";
import Video from "./Components/Video";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavBar navigate={navigate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inference/">
          <Route path="image/" element={<Inference />} />
          <Route path="video/" element={<Video />} />
          <Route path="real-time/" element={<RealTime />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
