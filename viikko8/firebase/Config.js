// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,serverTimestamp,query,onSnapshot} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWzyNUR3WwaG-rC_nWn-8uMI90ON3I_bA",
  authDomain: "chat-d2a96.firebaseapp.com",
  projectId: "chat-d2a96",
  storageBucket: "chat-d2a96.appspot.com",
  messagingSenderId: "115092507309",
  appId: "1:115092507309:web:9ea667e01a62dc6fd21424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';
export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    MESSAGES
};