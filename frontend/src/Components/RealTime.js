import { useEffect } from "react";
import webcam from "webcamjs";
function RealTime() {
  useEffect(() => {
    webcam.attach(".snapshot");
    return () => webcam.reset();
  });
  let url;
  const ws = new WebSocket("ws://localhost:8000/ws");
  ws.onmessage = function (event) {
    if (url !== "") {
      URL.revokeObjectURL(url);
    }
    var img = document.getElementById("videoDisplayer");
    const src = URL.createObjectURL(event.data);
    img.src = src;
    url = src;
    startStream();
  };
  function sendMsg(event) {
    webcam.attach();
    var input = document.getElementById("fileInput");
    ws.send(input.files[0]);
    event.preventDefault();
  }
  async function startStream() {
    // await webcam.attach(".snapshot");
    webcam.snap(async (uri) => {
      console.log(uri);
      ws.send(uri.replace(/^data\:image\/\w+\;base64\,/, ""));
    });
  }
  const style = {
    width: "320px",
    height: "240px",
  };
  return (
    <div>
      <div>
        <input type="file" id="fileInput" />
        <button onClick={(e) => sendMsg(e)}>Send </button>
        <img id="videoDisplayer" />
        <div className="snapshot" style={style} />
        <button onClick={startStream} />
      </div>
    </div>
  );
}

export default RealTime;
