import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyCEwhXlhgs7Q9z87-Uyma3h-R056yXIn1Y",
  authDomain: "reactchat-89e01.firebaseapp.com",
  projectId: "reactchat-89e01",
  storageBucket: "reactchat-89e01.appspot.com",
  messagingSenderId: "579437456692",
  appId: "1:579437456692:web:4de54f80f00d61107c4961"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();