import gif1 from "./assets/accident1.gif";
import gif2 from "./assets/accident2.gif";
import transitions from "./animations.js";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
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
          <motion.i>Home:</motion.i>
        </h1>
        <h4 className="desc">
          Welcome to our website! This is our Final project for 42028 Deep
          Learning and Convolutional Neural Networks where we are trying to
          detect car crash collision. Our team consists of{" "}
          <b>Sanskar Gauchan</b>, <b>Ahmed Khurseed</b> and{" "}
          <b>Sarrah Barodawola</b>.
        </h4>
      </div>
      <div className="gifs">
        <img src={gif1} />
        <img src={gif2} />
      </div>
    </motion.div>
  );
}

export default Home;
