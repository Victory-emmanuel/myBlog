// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Tyj6hw0oBlAxS7euRvgwsRjmfHV1jTg",
  authDomain: "blog-6ef56.firebaseapp.com",
  projectId: "blog-6ef56",
  storageBucket: "blog-6ef56.appspot.com",
  messagingSenderId: "295348172233",
  appId: "1:295348172233:web:a28bbd6dc80eb39a06e418",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
