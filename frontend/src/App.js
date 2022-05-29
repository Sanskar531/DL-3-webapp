import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Inference from "./Components/Inference";
import RealTime from "./Components/RealTime";
import Video from "./Components/Video";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
      <NavBar navigate={navigate} />
      <div className="body">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/inference/">
              <Route path="image/" element={<Inference />} />
              <Route path="video/" element={<Video />} />
              <Route path="real-time/" element={<RealTime />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
