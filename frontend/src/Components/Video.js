import { useState } from "react";

function Video() {
  const [vid, setVid] = useState("");
  function onSubmit(e) {
    e.preventDefault();
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
        const source = document.getElementsByClassName("video")[0];
        source.setAttribute("src", vidToDisplay);
        source.setAttribute("type", "video/webm");
        source.setAttribute("loop", true);
        source.setAttribute("autoPlay", true);
        source.setAttribute("controls", true);
        setVid(vidToDisplay);
        source.play();
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className="Inference">
      <div className="infMain">
        <h1>
          {" "}
          <i>Run Inference on a Video: </i>
        </h1>
        <h4>Note: Takes longer to process</h4>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="file" className="fileInput" />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="videoContainer">
        <h1>Inferred Video:</h1>
        <video className="video" type="video/webm"></video>
      </div>
    </div>
  );
}

export default Video;
