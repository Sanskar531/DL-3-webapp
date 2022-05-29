import transitions from "./animations.js";
import { motion } from "framer-motion";
function Button({ text }) {
  return (
    <motion.button
      type="submit"
      className="submit"
      variants={transitions.buttonAnimations}
      whileHover="hover"
      whileTap="tap"
    >
      {text}
    </motion.button>
  );
}
export default Button;
