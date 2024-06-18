import { getAnalytics,  } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzN2L4OzM9VilluD7OzYNlUp9BaIU2GvI",
    authDomain: "social-media-omgeving.firebaseapp.com",
    projectId: "social-media-omgeving",
    storageBucket: "social-media-omgeving.appspot.com",
    messagingSenderId: "860845337240",
    appId: "1:860845337240:web:003c54feaed1e96d12beed",
    measurementId: "G-G0LFTHFN1C"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage();
  export const db = getFirestore(app);
  export const auth = getAuth(app);

  export {db, auth, storage};