// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBZjSrEWiVxnSgTe2Z8F2MoWDLihDB8k",
  authDomain: "travel-world-18b93.firebaseapp.com",
  projectId: "travel-world-18b93",
  storageBucket: "travel-world-18b93.appspot.com",
  messagingSenderId: "1096272230483",
  appId: "1:1096272230483:web:3a47af63d40e2055f6eea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;