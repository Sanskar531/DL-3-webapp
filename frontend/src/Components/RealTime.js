import { useState } from "react";
import webcam from "webcamjs";
function RealTime() {
  const [stopStream, setStopStream] = useState(false);
  function startStream() {
    // const socket = new WebSocket("ws://localhost:8000/ws");
    // socket.onmessage(async (res) => {
    //   const imgToShow = await res.data.blob();
    // });
    webcam.attach(".webcam");
  }
  function clickPicture() {
    webcam.snap((url) => {
      const img = document.getElementsByTagName("img")[0];
      webcam.upload(url, "http://127.0.0.1:8000/api/image", (res) => {
        console.log(res);
      });
    });
  }
  const style = {
    width: "320px",
    height: "240px",
  };
  return (
    <div>
      <div>
        <button onClick={startStream}> Start stream with camera </button>
        <div className="webcam" style={style}></div>
        <img></img>
        <button onClick={clickPicture}>clickPicture</button>
      </div>
    </div>
  );
}

export default RealTime;
