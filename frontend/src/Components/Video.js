import { useState } from "react";
import { motion } from "framer-motion";
import transitions from "./animations.js";
import Button from "./Button.js";

function Video({ loadingHandler }) {
  const [vid, setVid] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    loadingHandler(true);
    const file = document.getElementsByTagName("input")[0].files[0];
    const formData = new FormData();
    formData.append("video", file);
    const options = {
      method: "POST",
      body: formData,
      header: {
        "Content-type": "multipart/form-data",
      },
    };
    fetch("http://127.0.0.1:8000/api/video", options)
      .then((res) => res.blob())
      .then((res) => {
        if (vid !== "") {
          URL.revokeObjectURL(vid);
        }
        const vidToDisplay = URL.createObjectURL(res);
        const source = document.getElementById("video");
        source.setAttribute("src", vidToDisplay);
        source.setAttribute("type", "video/webm");
        source.setAttribute("loop", true);
        source.setAttribute("autoPlay", true);
        source.setAttribute("controls", true);
        setVid(vidToDisplay);
        source.play();
        loadingHandler(false);
      })
      .catch((err) => console.error(err));
  }
  return (
    <motion.div
      className="Inference"
      variants={transitions.pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="infMain">
        <h1>
          {" "}
          <i>Run Inference on a Video: </i>
        </h1>
        <h4>Note: Takes longer to process</h4>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="file" id="files" hidden />
          <motion.label
            htmlFor="files"
            className="fileInput"
            variants={transitions.buttonAnimations}
            whileHover="hover"
            whileTap="tap"
          >
            Upload
          </motion.label>
          <Button text="Predict" />
        </form>
      </div>
      <div className="videoContainer">
        <h1>Inferred Video:</h1>
        <video id="video" type="video/webm"></video>
      </div>
    </motion.div>
  );
}

export default Video;
