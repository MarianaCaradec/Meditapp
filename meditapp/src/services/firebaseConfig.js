// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB25AUOJBy7yXvLjOHMbBdCUcWzefjnavc",
    authDomain: "meditapp-b20e4.firebaseapp.com",
    projectId: "meditapp-b20e4",
    storageBucket: "meditapp-b20e4.appspot.com",
    messagingSenderId: "401699193591",
    appId: "1:401699193591:web:58c9c79d0c551ceece89f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)