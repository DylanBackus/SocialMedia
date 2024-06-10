import React from "react";
import db from './firebase/FirebaseConfig'
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
    )
}
export default HomeMidComponent