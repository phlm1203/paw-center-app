import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQWoSR47VXkiZHXvRD5-kPkgku9gJ8ugI",
  authDomain: "paw-center-b6b80.firebaseapp.com",
  projectId: "paw-center-b6b80",
  storageBucket: "paw-center-b6b80.firebasestorage.app",
  messagingSenderId: "855214335065",
  appId: "1:855214335065:web:3cdd4a278100eca8fe3d48"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);