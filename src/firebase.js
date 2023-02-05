// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxNSg9tfUXBjqBjJ69UbHAY3Cx4-ERl4s",
  authDomain: "fir-auth-6bb62.firebaseapp.com",
  projectId: "fir-auth-6bb62",
  storageBucket: "fir-auth-6bb62.appspot.com",
  messagingSenderId: "453486375576",
  appId: "1:453486375576:web:b99259208baf11512a16ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app