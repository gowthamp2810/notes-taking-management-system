import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARewPJFZCqjgwkC-ObrPCgdyPUO2AYMug",
  authDomain: "kms-pnms.firebaseapp.com",
  projectId: "kms-pnms",
  storageBucket: "kms-pnms.firebasestorage.app",
  messagingSenderId: "969106395368",
  appId: "1:969106395368:web:313957e10dd6b98096795d",
  measurementId: "G-CP2LN09WVX"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };