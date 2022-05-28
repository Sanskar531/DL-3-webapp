import { useState } from "react";
function Video() {
  const [vid, setVid] = useState(false);
  let vidToDisplay;
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
        if (vidToDisplay) {
          URL.revokeObjectURL(vidToDisplay);
        }
        console.log("what");
        vidToDisplay = URL.createObjectURL(res);
        console.log(vidToDisplay);
        const source = document.getElementsByClassName("source")[0];
        source.setAttribute("src", vidToDisplay);
        source.setAttribute("type", "video/mp4");
        setVid(!vid);
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
      <div className="image">
        <video className="video" width="320" height="240" controls autoPlay>
          <source className="source" src="x.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Video;
