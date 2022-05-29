import { useEffect } from "react";
import webcam from "webcamjs";
function RealTime() {
  useEffect(() => {
    webcam.attach(".snapshot");
    return () => {
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
    startStream();
  };
  async function startStream() {
    webcam.snap(async (uri) => {
      ws.send(uri.replace(/^data\:image\/\w+\;base64\,/, ""));
    });
  }
  const style = {
    width: "480px",
    height: "360px",
  };
  return (
    <div className="Inference">
      <div className="infMain">
        <h1>Run Real-time Inference</h1>
        <button onClick={startStream}>Start Inference</button>
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
    </div>
  );
}

export default RealTime;
