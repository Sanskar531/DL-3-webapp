import io

import torch
from fastapi import FastAPI, File, UploadFile, Request, Body, Form
from starlette.responses import StreamingResponse
from PIL import Image
import cv2;
from starlette.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
import cv2;
import numpy as np;

class Data(BaseModel):
    user: str

app = FastAPI();
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET","POST"],
    allow_headers=["*"],
)

model = torch.hub.load("ultralytics/yolov5", "yolov5x")


@app.post("/api/image")
async def imageInfer(image:UploadFile = File(...)):
    print(image.file);
    im =  image.file.read()
    im = Image.open(io.BytesIO(im));
    res = model(im);
    res.render();
    im = res.imgs[0]
    res, im_jpeg = cv2.imencode(".jpeg", im)
    return StreamingResponse(io.BytesIO(im_jpeg.tobytes()), media_type="image/jpeg")

@app.post("/api/video")
async def videoInfer(height:int = Form(...), width:int = Form(...), video:UploadFile = File(...)):
    vid = await video.read();
    cap = io.BytesIO(vid)
    print(cap);
    vid = (np.frombuffer(cap.getvalue(), dtype=np.uint8));
    print(vid.shape);
    return "Got Image";

@app.post("/trial")
async def trail(text: str= Form(...), data:UploadFile = File(...)):
    print((data));
    return data;

@app.get("/")
async def get_main():
    return "<h1> THis is bad</h1>"