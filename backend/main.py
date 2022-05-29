import io

import torch
torch.device("cpu");
from fastapi import FastAPI, File, UploadFile, WebSocket
from starlette.responses import StreamingResponse
from PIL import Image
import cv2
from starlette.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
import cv2
import base64

from zmq import device;


class Data(BaseModel):
    user: str


app = FastAPI()
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

model = torch.hub.load('ultralytics/yolov5', "custom", path="./bestopy.pt", force_reload=True)
model.conf =0.5;

@app.post("/api/image")
async def imageInfer(image: UploadFile = File(...)):
    im = image.file.read()
    im = Image.open(io.BytesIO(im))
    im_jpeg = inference(im);
    return StreamingResponse(io.BytesIO(im_jpeg.tobytes()), media_type="image/jpeg")


def inference(im, encode = True):
    res = model(im)
    res.render()
    im = res.imgs[0]
    if encode:
        res, im_jpeg = cv2.imencode(".jpeg", im)
        return im_jpeg;
    return im;


@app.post("/api/video")
async def videoInfer(video: UploadFile = File(...)):
    video_buffer_file_name = "./buffer_video.mp4";
    response_video_file_name = "./response.webm";
    vid = await video.read()
    with open(video_buffer_file_name, "wb") as fp:
        fp.write(vid)
    cap = cv2.VideoCapture(video_buffer_file_name)
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    size = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)),
            int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
    im = []
    result = []
    while(True):
        success, frame = cap.read()
        if not success:
            break
        im.append(frame)
    cap.release()
    for c,i in enumerate(im):
        res_im = inference(i, encode=False);
        result.append(res_im)
        progress_bar(c, len(im))
    cap = cv2.VideoWriter(
        response_video_file_name, cv2.VideoWriter_fourcc(*'VP80'), fps, size)
    for i in result:
        cap.write(i)
    cap.release();
    return FileResponse(response_video_file_name, media_type="video/webm")

def progress_bar(current, total, bar_length=20):
    fraction = current / total

    arrow = int(fraction * bar_length - 1) * '-' + '>'
    padding = int(bar_length - len(arrow)) * ' '

    ending = '\n' if current == total else '\r'

    print(f'Progress: [{arrow}{padding}] {int(fraction*100)}%', end=ending)

@app.websocket("/ws")
async def real_time(websocket: WebSocket):
    await websocket.accept()
    while True:
        try:
            data = await websocket.receive_text();
            im = io.BytesIO(base64.b64decode(data));
            im = Image.open(im);
            im_jpeg = inference(im);
            await websocket.send_bytes(io.BytesIO(im_jpeg.tobytes()));
        except:
            break;

        