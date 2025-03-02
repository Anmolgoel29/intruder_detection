from extract_face import extract_face
from extract_embeddings import extract
from cosine_similarity import cosine_similarity

def face_match(img, key_img):
    faces = extract_face(img)

    faces_embd = []

    for i in faces:
        faces_embd.append(extract(i))
    
    for i in faces_embd:
        if cosine_similarity(i , key_img) > 0.8:
            return True
    
    return False