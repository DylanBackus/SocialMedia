import React, { useState } from "react";
import { storage, db } from "./firebase/FirebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    console.log("Image change event triggered");
    if (e.target.files[0]) {
      console.log("Image selected:", e.target.files[0]);
      setImage(e.target.files[0]);
    } else {
      console.log("No image selected");
    }
  };

  const handleUpload = () => {
    console.log("Handle upload called");
    console.log("Text:", text);
    console.log("Image:", image);

    if (!text.trim()) {
      alert("Please enter some text for the post.");
      return;
    }

    if (image) {
      console.log("Uploading image...");
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
          console.log("Upload progress:", progress);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("Download URL:", downloadURL);
              savePost(downloadURL);
            })
            .catch((error) => {
              console.error("Failed to get download URL:", error);
            });
        }
      );
    } else {
      console.log("No image provided, saving post with text only");
      savePost(null); // Proceed with saving the post even if there's no image
    }
  };

  const savePost = async (imageUrl) => {
    console.log("Saving post...");
    try {
      await addDoc(collection(db, "post/post/posts"), {
        text,
        imageUrl,
        createdAt: Timestamp.fromDate(new Date()),
      });
      setText("");
      setImage(null);
      setProgress(0);
      console.log("Post saved successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="main-conainer-post">
      <div className="create-post">
        <div className="create-post-header">
          <div className="profile-pic-placeholder">IMAGE</div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here..."
            className="create-post-textarea"
          ></textarea>
        </div>
        <div className="create-post-actions">
          <input
            type="file"
            onChange={handleImageChange}
            className="create-post-file-input"
          />
          <div className="create-post-buttons">
            <button onClick={handleUpload} className="create-post-button">
              Post
            </button>
          </div>
        </div>
        <progress value={progress} max="100" className="create-post-progress" />
      </div>
    </div>
  );
};

export default CreatePost;
