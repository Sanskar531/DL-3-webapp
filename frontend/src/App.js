import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inference from "./Components/Inference";
import RealTime from "./Components/RealTime";
import Video from "./Components/Video";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inference/">
            <Route path="image/" element={<Inference />} />
            <Route path="video/" element={<Video />} />
            <Route path="real-time/" element={<RealTime />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
