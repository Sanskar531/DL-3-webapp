import { useState } from "react";
function Inference() {
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
    <div className="Inference">
      <h1> Run Inference on a Single Image</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="file" className="fileInput" />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <img className="output"></img>
    </div>
  );
}

export default Inference;
