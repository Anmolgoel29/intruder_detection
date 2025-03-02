from ultralytics import YOLO
import cv2

def extract_face(image):
    model = YOLO("/home/rogue/Desktop/face_recon_media_segregation/models/best.pt")
    
    # image = cv2.imread(path,1)
    res = model.predict(image)

    boxes = res[0].boxes

    imgs = []
    for i in boxes.xyxy:
        # print(i)

        i = list(map(int,i))

        # print(i)

        imgs.append(image[i[1]:i[3] , i[0]:i[2]])
    
    return imgs

