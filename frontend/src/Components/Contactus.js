import transitions from "./animations.js";
import { motion } from "framer-motion";
import Ahmed from "./assets/Ahmed.jpeg";
import Sanskar from "./assets/Sanskar.jpeg";
import Sarrah from "./assets/Sarrah.jpeg";
import Profile from "./Profile.js";

function Contactus() {
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
          <motion.i>
            If you would like to contact our team for further questions, please
            refer below:
          </motion.i>
        </h1>
        <h4 className="profiles">
          <Profile
            name="Sanskar Gauchan"
            email={
              <span>
                Email:{" "}
                <i>
                  <a href="mailto: Sanskar.Gauchan-1@student.uts.edu.au">
                    Sanskar.Gauchan-1@student.uts.edu.au
                  </a>
                </i>
              </span>
            }
            img={Sanskar}
          />
          <Profile
            name="Ahmed Khurseed"
            email={
              <span>
                Email:{" "}
                <i>
                  <a href="mailto: ahmed.khursheed-1@student.uts.edu.au">
                    ahmed.khursheed-1@student.uts.edu.au
                  </a>
                </i>
              </span>
            }
            img={Ahmed}
          />
          <Profile
            name="Sarrah Barodawala"
            email={
              <span>
                Email:{" "}
                <i>
                  <a href="mailto: sarrah.barodawala@student.uts.edu.au">
                    sarrah.barodawala@student.uts.edu.au
                  </a>
                </i>
              </span>
            }
            img={Sarrah}
          />
        </h4>
      </div>
    </motion.div>
  );
}

export default Contactus;
