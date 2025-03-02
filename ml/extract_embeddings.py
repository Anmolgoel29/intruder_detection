import cv2
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.imagenet_utils import preprocess_input
from keras_facenet import FaceNet
import numpy as np


def extract(img):
    model = FaceNet()

    img = cv2.resize(img , (160,160))
    img = image.img_to_array(img)
    img = np.expand_dims(img,axis=0)
    img = preprocess_input(img)

    return model.embeddings(img)