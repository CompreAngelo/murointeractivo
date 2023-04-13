import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { 
apiKey: "AIzaSyDpr7hFPYVR4HDyWnE8zFNWITrPqN6qQiw",
authDomain: "muro-interactivo-5a1f0.firebaseapp.com",
projectId: "muro-interactivo-5a1f0",
storageBucket: "muro-interactivo-5a1f0.appspot.com",
messagingSenderId: "403323942620",
appId: "1:403323942620:web:715c263c90db2135b4e619",
measurementId: "G-MDYBDWVHNP" };

export const app = initializeApp(firebaseConfig);
export const firestoreInstance = getFirestore(app);