import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDchjNzqywQ9uQLu4CLHYLsJbQ4AWpUWS8",
  authDomain: "explore-northeast.firebaseapp.com",
  databaseURL: "https://explore-northeast-default-rtdb.firebaseio.com",
  projectId: "explore-northeast",
  storageBucket: "explore-northeast.firebasestorage.app",
  messagingSenderId: "187857481628",
  appId: "1:187857481628:web:9981893dab45b3a313a259",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);