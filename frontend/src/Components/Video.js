import { useState } from "react";
function Video() {
  const [img, setimg] = useState(false);
  let img_to_display;
  function onSubmit(e) {
    e.preventDefault();
    const file = document.getElementsByTagName("input")[0].files[0];
    const vid_url = URL.createObjectURL(file);
    const vid_node = document.createElement("video");
    vid_node.src = vid_url;
    console.log("here?");
    vid_node.addEventListener("loadedmetadata", (a) => {
      let height = vid_node.videoHeight;
      let width = vid_node.videoWidth;
      URL.revokeObjectURL(vid_url);
      const formData = new FormData();
      formData.append("video", file);
      formData.append("height", height);
      formData.append("width", width);
      const options = {
        method: "POST",
        body: formData,
        header: {
          "Content-type": "multipart/form-data",
        },
      };
      console.log("what");
      fetch("http://127.0.0.1:8000/api/video", options)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    });
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
        <img className="output"></img>
      </div>
    </div>
  );
}

export default Video;
