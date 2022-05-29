import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import webcam from "webcamjs";
import transitions from "./animations.js";
function RealTime() {
  let streaming = false;
  useEffect(() => {
    webcam.attach(".snapshot");
    return function cleanup() {
      webcam.reset();
      ws.close();
    };
  });
  let url;
  const ws = new WebSocket("ws://localhost:8000/ws");
  ws.onmessage = function (event) {
    var img = document.getElementById("videoDisplayer");
    const src = URL.createObjectURL(event.data);
    if (url !== "") {
      URL.revokeObjectURL(url);
    }
    img.src = src;
    url = src;
    if (streaming) {
      startStream();
    }
  };
  async function startStream() {
    if (!streaming) {
      streaming = true;
      document.getElementById("streamButton").innerText = "Stop Streaming";
    }
    webcam.snap(async (uri) => {
      ws.send(uri.replace(/^data\:image\/\w+\;base64\,/, ""));
    });
  }

  function stopStream() {
    streaming = false;
    document.getElementById("streamButton").innerText = "Start Streaming";
  }

  const style = {
    width: "480px",
    height: "360px",
  };
  return (
    <motion.div
      className="Inference"
      variants={transitions.pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="infMain">
        <h1>Run Real-time Inference</h1>
        <button
          id="streamButton"
          onClick={() => (streaming ? stopStream() : startStream())}
        >
          Start Streaming
        </button>
      </div>
      <div className="LiveFeedContainer">
        <h1>Live Feed:</h1>
        <div className="snapshot" style={style} />
        <h1>Inferred Live Feed:</h1>
        <img
          id="videoDisplayer"
          alt="videoDisplayer"
          style={style}
          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />
      </div>
    </motion.div>
  );
}

export default RealTime;
