import React, { useState } from "react";
import { db, auth, storage } from "firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const HomeMidComponent = () => {
  const [file, setFile] = useState("");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUpload = () => {
    const storageRef = ref(storage, "images/${file.name}");
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Upload a file!");
    });
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
              {/* <textarea className="textarea-post scroll" placeholder="Type Here..."></textarea> */}
              {/* <input onChange={(e)=>setTxt(e.target.value)} />  
                            <input type="file" onChange={(e)=>handleUpLoad(e)} /> */}
              <input type="file" accept="image/*" onChange={handleChange} />
              <buttun onClick={() => handleUpload()}>Upload to Firebase</buttun>
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
              <a className="post-button">Post</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeMidComponent;
