// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbcXAdD8KcOb12aSlr2bbVNTyki1uTTeQ",
  authDomain: "flower-shop-e25ac.firebaseapp.com",
  projectId: "flower-shop-e25ac",
  storageBucket: "flower-shop-e25ac.appspot.com",
  messagingSenderId: "214754698141",
  appId: "1:214754698141:web:74b7d9cd481e98cefc0574",
  measurementId: "G-KRWRBKD13B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional safe analytics
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
