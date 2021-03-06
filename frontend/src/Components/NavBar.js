import { motion } from "framer-motion";
import transitions from "./animations.js";

function NavBar({ navigate }) {
  return (
    <div className="NavBar">
      <h2 className="title">
        RAD
        <br /> SAS
      </h2>
      <div className="Links">
        <motion.a
          onClick={() => navigate("/")}
          variants={transitions.buttonAnimations}
          whileHover="hover"
          whileTap="tap"
        >
          Home
        </motion.a>
        <motion.a
          onClick={() => navigate("/aboutus")}
          variants={transitions.buttonAnimations}
          whileHover="hover"
          whileTap="tap"
        >
          About us
        </motion.a>
        <motion.a
          onClick={() => navigate("/contactus")}
          variants={transitions.buttonAnimations}
          whileHover="hover"
          whileTap="tap"
        >
          Contact us
        </motion.a>
        <motion.a
          onClick={() => navigate("/inference/image")}
          variants={transitions.buttonAnimations}
          whileHover="hover"
          whileTap="tap"
        >
          Image Inference
        </motion.a>
        <motion.a
          onClick={() => navigate("/inference/video")}
          variants={transitions.buttonAnimations}
          whileHover="hover"
          whileTap="tap"
        >
          Video Inference
        </motion.a>
        <motion.a
          onClick={() => navigate("/inference/real-time")}
          variants={transitions.buttonAnimations}
          whileHover="hover"
          whileTap="tap"
        >
          Real-time Stream
        </motion.a>
      </div>
    </div>
  );
}

export default NavBar;
