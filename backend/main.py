import io

import torch
from fastapi import FastAPI, File, UploadFile, Request, Body, Form, WebSocket
from starlette.responses import StreamingResponse
from PIL import Image
import cv2
from starlette.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import FileResponse
from pydantic import BaseModel
import cv2
import numpy as np


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

model = torch.hub.load("ultralytics/yolov5", "yolov5x")


@app.post("/api/image")
async def imageInfer(image: UploadFile = File(...)):
    print(image.file)
    im = image.file.read()
    im = Image.open(io.BytesIO(im))
    print(np.array(im).shape)
    res = model(im)
    res.render()
    im = res.imgs[0]
    res, im_jpeg = cv2.imencode(".jpeg", im)
    return StreamingResponse(io.BytesIO(im_jpeg.tobytes()), media_type="image/jpeg")


@app.post("/api/video")
async def videoInfer(video: UploadFile = File(...)):
    vid = await video.read()
    # cap = Image.open(io.BytesIO(vid))
    # print(np.array(im).shape)
    with open("./y.mp4", "wb") as fp:
        fp.write(vid)
    cap = cv2.VideoCapture("./y.mp4")
    fps = cap.get(cv2.CAP_PROP_FPS)
    size = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)),
            int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
    im = []
    result = []
    i = 0
    while(True):
        success, frame = cap.read()
        if not success:
            break
        im.append(frame)
    cap.release()
    im = im[:10]
    for i in im:
        res = model(i)
        res.render()
        res_im = res.imgs[0]
        result.append(res_im)
    cap = cv2.VideoWriter(
        "./y.mp4", cv2.VideoWriter_fourcc(*'mp4v'), fps, size)
    for i in result:
        cap.write(i)
    return FileResponse("./y.mp4")


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_bytes()
        await websocket.send_text(f"Message text was: {data}")


@app.post("/trial")
async def trail(text: str = Form(...), data: UploadFile = File(...)):
    print((data))
    return data


@app.get("/")
async def get_main():
    return "<h1> THis is bad</h1>"
