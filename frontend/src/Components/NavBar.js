import { motion } from "framer-motion";

function NavBar({ navigate }) {
  const hover = {
    scale: 1.1,
    color: "green",
  };
  const tap = {
    scale: 0.9,
  };
  return (
    <div className="NavBar">
      <h1 className="title">RAD SAS</h1>
      <div className="Links">
        <motion.a
          onClick={() => navigate("/")}
          whileHover={hover}
          whileTap={tap}
        >
          Home
        </motion.a>
        <motion.a
          onClick={() => navigate("/inference/image")}
          whileHover={hover}
          whileTap={tap}
        >
          Image Inference
        </motion.a>
        <motion.a
          onClick={() => navigate("/inference/video")}
          whileHover={hover}
          whileTap={tap}
        >
          Video Inference
        </motion.a>
        <motion.a
          onClick={() => navigate("/inference/real-time")}
          whileHover={hover}
          whileTap={tap}
        >
          Real-time Stream
        </motion.a>
      </div>
    </div>
  );
}

export default NavBar;
