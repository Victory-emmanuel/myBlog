// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAykNaNoQeXstOUSu9IIDil2TJDx3_bP74",
  authDomain: "brownpatienceblog.firebaseapp.com",
  projectId: "brownpatienceblog",
  storageBucket: "brownpatienceblog.appspot.com",
  messagingSenderId: "49330796113",
  appId: "1:49330796113:web:a1bd69d1494c775c7bea70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
