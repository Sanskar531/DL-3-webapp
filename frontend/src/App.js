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
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <div className="NavContainer">
        <NavBar navigate={navigate} />
      </div>
      <div className="body">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/inference/image/" element={<Inference />} />
            <Route
              path="/inference/video/"
              element={<Video loadingHandler={setLoading} />}
            />
            <Route path="/inference/real-time/" element={<RealTime />} />
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
