import transitions from "./animations.js";
import { motion } from "framer-motion";

function Aboutus() {
  return (
    <motion.div
      className="Home"
      variants={transitions.pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div key="HomeContent" className="HomeContent">
        <h1>
          <motion.i>Know About More Us:</motion.i>
        </h1>
        <h4 className="desc">
          Monitoring car accidents has been used by security and CCTV providers
          for many years. However, there has yet to be a system which can alert
          officers/security of any risks on highways and roads when an accident
          occurs. RADSAS, a new technology which can detect road accidents, aims
          to help CCTV companies, in allowing them to detect accidents on the
          road first hand. Using object detection, it will examine vehicles and
          its surrounding environment, monitoring and detecting crashes. With
          the use of a detection software like this, the system could
          automatically bring up the cameras where an accident is detected.
        </h4>
      </div>
    </motion.div>
  );
}

export default Aboutus;
