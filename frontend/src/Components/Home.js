import gif3 from "./assets/accident3.gif";
import gif4 from "./assets/accident4.gif";
import gif5 from "./assets/accident5.gif";
import gif6 from "./assets/accident6.gif";
import transitions from "./animations.js";
import { motion } from "framer-motion";

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
          <b>Sarrah Barodawala</b>. <br /> <br />
          <b>Road Accident Detection (RAD SAS) </b>can detect an
          accident/non-accident event on CCTV cameras. Using CCTV camera footage
          RAD SAS can monitor and detect crashes. The demand for these detection
          software is rapidly increasing considering the technological
          advancements we are seeing in this day and age. We often see that
          surveillance rooms are filled with inputs of thousands of cameras.
          With the use of a detection software like this, the system could
          automatically bring up the cameras where an accident is detected,
          hence saving the lives of people in the cars. We see with electric
          cars that there is a lot of integration with software and hence this
          might be useful for the industry.
        </h4>
      </div>
      <div className="gifs">
        <div className="subGifs">
          <img alt="gif" src={gif3} />
          <img alt="gif" src={gif4} />
        </div>
        <div className="subGifs">
          <img alt="gif" src={gif5} />
          <img src={gif6} alt="gif" />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
