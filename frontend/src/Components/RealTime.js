function RealTime() {
  async function video_listener() {
    let camera_button = document.querySelector("#start-camera");
    let video = document.querySelector("#video");
    let click_button = document.querySelector("#click-photo");
    let canvas = document.querySelector("#canvas");

    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = stream;
  }

  function click_listener() {
    let camera_button = document.querySelector("#start-camera");
    let video = document.querySelector("#video");
    let click_button = document.querySelector("#click-photo");
    let canvas = document.querySelector("#canvas");

    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    let image_data_url = canvas.toDataURL("image/jpeg");
    Webcam;
    // data url of the image
    console.log(image_data_url);
  }
  return (
    <div>
      <div>
        <button id="start-camera" onClick={video_listener}>
          Start Camera
        </button>
        <video id="video" width="320" height="240" autoPlay></video>
        <button id="click-photo" onClick={click_listener}>
          Click Photo
        </button>
        <canvas id="canvas" width="320" height="240"></canvas>
      </div>
    </div>
  );
}

export default RealTime;
