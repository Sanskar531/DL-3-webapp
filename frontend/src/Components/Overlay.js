import { motion } from "framer-motion";
import transitions from "./animations.js";

function Overlay({ children }) {
  return (
    <motion.div
      className="overlay"
      variants={transitions.pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
export default Overlay;
