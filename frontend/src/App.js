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
import { useState } from "react";
import Overlay from "./Components/Overlay.js";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <NavBar navigate={navigate} />
      <div className="body">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/inference/">
              <Route path="image/" element={<Inference />} />
              <Route
                path="video/"
                element={<Video loadingHandler={setLoading} />}
              />
              <Route path="real-time/" element={<RealTime />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {loading ? (
          <Overlay key={loading} children={<h1>Processing your Video</h1>} />
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
