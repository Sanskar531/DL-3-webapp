import { useState } from "react";
import { motion } from "framer-motion";
import transistions from "./animations.js";
import Button from "./Button.js";

function Inference() {
  const hover = {
    scale: 1.1,
    color: "green",
  };
  const tap = {
    scale: 0.9,
  };
  const [img, setimg] = useState(false);
  let img_to_display;
  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "image",
      document.getElementsByTagName("input")[0].files[0]
    );
    const options = {
      method: "POST",
      body: formData,
      header: {
        "Content-type": "multipart/form-data",
      },
    };
    fetch("http://127.0.0.1:8000/api/image", options)
      .then((res) => res.blob())
      .then((res) => {
        if (img_to_display) {
          URL.revokeObjectURL(img_to_display);
        }
        const img_node = document.getElementsByClassName("output")[0];
        img_node.src = URL.createObjectURL(res);
        setimg(!img);
      })
      .catch((err) => console.error(err));
  }
  return (
    <motion.div
      className="Inference"
      variants={transistions.pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="infMain">
        <h1>
          {" "}
          <i>Run Inference on a Single Image: </i>
        </h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="file" id="files" hidden />
          <motion.label
            htmlFor="files"
            className="fileInput"
            variants={transistions.buttonAnimations}
            whileHover="hover"
            whileTap="tap"
          >
            Upload
          </motion.label>
          <Button text="Predict" />
        </form>
      </div>
      <div className="image">
        <img
          key="inferredImage"
          alt="output"
          className="output"
          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        ></img>
      </div>
    </motion.div>
  );
}

export default Inference;
