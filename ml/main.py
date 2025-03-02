from extract_embeddings import extract
from extract_face import extract_face
from cosine_similarity import cosine_similarity
import cv2
import os

# approach 1 create this as a package whch we will use in the backend to call

known_face_path = "/home/rogue/Desktop/face_recon_media_segregation/know-faces"
media_path = "/home/rogue/Desktop/face_recon_media_segregation/media"

image_ext = ["jpg","png"]

known_embeddings = []

for i in os.listdir(known_face_path):
    if any(i.lower().endswith(ext) for ext in image_ext):
        
        # print(os.path.join(known_face_path , i))
        known_embeddings.append(extract(
            cv2.imread(
                os.path.join(known_face_path , i)
                ,1)))

l = os.listdir(media_path)

cnt = 0 
rm_cnt = 0
for i in l:
    cnt +=1
    unknown_embeddings = []
    if any(i.lower().endswith(ext) for ext in image_ext):
        faces = extract_face(os.path.join(media_path,i))

        for j in faces:
            unknown_embeddings.append(extract(j))
        
        flag = 0
        for j in unknown_embeddings:
            flag = 0
            for k in known_embeddings:
                if cosine_similarity(j,k)>.8:
                    flag = 1
                    break
            if flag == 1:
                break
            
        if flag == 0:
            print("\n \n \n removed an img \n \n \n")
            # cv2.imshow("Image",cv2.imread(os.path.join(media_path,i)))
            # cv2.waitKey(0)
            os.remove(os.path.join(media_path,i))
            rm_cnt += 1
        else:
            print("image was saved")
        
        print(cnt)

# cv2.destroyAllWindows()

print("Total images processed: " , cnt)
print("Total deleted images: " ,rm_cnt)
print("Total preserved images: " , cnt - rm_cnt)
