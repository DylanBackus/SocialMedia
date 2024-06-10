import React from "react";
import { db, auth } from '../firebase/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const HomeMidComponent = () => {

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
                            <textarea className="textarea-post scroll" placeholder="Type Here..."></textarea>
                        </div>
                        <div className="post-section-attachments">
                            <div className="attachments">
                                <img className="gallery-icon" src="images/gallery-icon-blue.png"></img>
                            </div>
                            <div className="attachments">
                                <img className="gif-icon" src="images/gif-icon-blue.png"></img>

                            </div>
                            <div className="attachments">
                                <img className="polls-icon" src="images/chart-icon-blue.png"></img>

                            </div>
                            <div className="attachments">
                                <img className="location-icon" src="images/location-icon-blue.png"></img>

                            </div>
                            <a className="post-button">Post</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeMidComponent