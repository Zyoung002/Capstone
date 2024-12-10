

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC06mblU09i36sueyZaSi3OG8u3XqdC9XY",
  authDomain: "gallatin-county-feed.firebaseapp.com",
  projectId: "gallatin-county-feed",
  storageBucket: "gallatin-county-feed.firebasestorage.app",
  messagingSenderId: "599858024990",
  appId: "1:599858024990:web:b959a1fb7b655a82ffd40f",
  measurementId: "G-SYLMJ0CB34"
  //...
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });