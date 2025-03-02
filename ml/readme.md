---

# **Image Recognition using Python & Machine Learning for Image Segregation**  

This project leverages deep learning and computer vision to **segregate images based on face recognition**. It extracts faces from images/videos, converts them into embedding vectors, and compares them against known face embeddings using **cosine similarity**.  

## **How It Works**  

1. **Convert known faces into embeddings**  
   - Use the **YOLO model** to detect faces in reference images.  
   - Convert detected faces into **embedding vectors**.  

2. **Process new images/videos**  
   - Detect faces in input media.  
   - Convert detected faces into **embedding vectors**.  
   - Compare each new face embedding with stored embeddings of known faces.  

3. **Filter images based on similarity**  
   - If the **cosine similarity** between a detected face and a known face is **above 0.8**, they are considered the same.  
   - If no matches are found, the image is **deleted**; otherwise, it is **kept**.  

---

## **Installation**  

### **1. Clone the repository**  
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2. Install dependencies**  
```bash
pip install -r requirements.txt
```

### **3. Download YOLO model weights**  
Ensure you have the YOLO model weights in the correct directory. If not, download them from the official source.

---

## **Usage**  

### **1. Preprocess Known Faces**  
Place images of known faces in the **`known_faces/`** directory. These will be converted into embedding vectors for comparison.  

### **2. Process New Images**  
Store images/videos in the **`media/`** directory. The program will:  
- Extract faces from each file  
- Convert them into embeddings  
- Compare them with known faces  
- Delete unmatched files  

Run the script:  
```bash
python3 main.py
```

---

## **Main Workflow**  

1. **Load known faces from the `known_faces/` folder**  
2. **Convert each face into an embedding vector**  
3. **Process images from the `media/` folder**  
4. **Detect and extract faces**  
5. **Convert faces into embedding vectors**  
6. **Compare against known face embeddings**  
7. **Delete unmatched images**  

---

## **Future Enhancements**  
- Improve accuracy with **face alignment** before embedding extraction  
- Support for **real-time face recognition** in video streams  
- Integration with **database storage for face embeddings**  

---

## **Contributing**  
Feel free to open issues or pull requests to improve the project.  

---
