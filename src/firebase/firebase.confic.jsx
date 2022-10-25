// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMgCbXebLRAYp_IJAwpOSZrUdouCLu0Vs",
  authDomain: "innovation-hub-589e6.firebaseapp.com",
  projectId: "innovation-hub-589e6",
  storageBucket: "innovation-hub-589e6.appspot.com",
  messagingSenderId: "199998160197",
  appId: "1:199998160197:web:1e7c43218adb960086522c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app