import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_v6Rpn9QZlG-6XusURaNeKGhQi2sisUI",
  authDomain: "mi-app-7cd40.firebaseapp.com",
  projectId: "mi-app-7cd40",
  storageBucket: "mi-app-7cd40.appspot.com",
  messagingSenderId: "810151628188",
  appId: "1:810151628188:web:0a0ccd8e0c29cf41edcc59"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)