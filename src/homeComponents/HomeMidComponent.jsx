import React, { useState } from "react";
import { db, auth, storage } from "../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const HomeMidComponent = () => {
  const [file, setFile] = useState("");
  const [userID, setUserID] = useState();

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    // const storageRef = ref(storage, `/files/${file.name}`);
    const storageRef = ref(storage, `/files/${userID}/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  return (
    <>
      <div className="mid-home">
        <div className="post-container">
          <div className="post-pfp-container">
            <div className="pfp-post">
              <img src="images/placeholder.png" className="pfp-post" />
            </div>
          </div>
          <div className="text-and-attachments-container">
            <div className="textarea-container">
              <textarea
                className="textarea-post scroll"
                placeholder="Type Here..."
              ></textarea>
              <input type="file" onChange={handleChange} accept="/image/*" />
            </div>
            <div className="post-section-attachments">
              <div className="attachments">
                <img className="gallery-icon" src="images/gallery.png"></img>
              </div>
              <div className="attachments">
                <img className="gif-icon" src="images/gif.png"></img>
              </div>
              <div className="attachments">
                <img className="polls-icon" src="images/chart.png"></img>
              </div>
              <div className="attachments">
                <img className="location-icon" src="images/pin.png"></img>
              </div>
              <p>{percent} "% done"</p>
              <a className="post-button" onClick={handleUpload}>
                Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeMidComponent;
