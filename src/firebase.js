// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3to2UBLon9939wgHGOjUzZO_6ROz4PaI",
  authDomain: "linkdin-clone-ac89b.firebaseapp.com",
  projectId: "linkdin-clone-ac89b",
  storageBucket: "linkdin-clone-ac89b.appspot.com",
  messagingSenderId: "351190124534",
  appId: "1:351190124534:web:3d3f325bae7431e9eda9d7",
  measurementId: "G-RGTQGJ7FZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
