// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAq3BwpE0jShYC4AboRB85oquF6-rHGgew",
    authDomain: "tododb-613d6.firebaseapp.com",
    projectId: "tododb-613d6",
    storageBucket: "tododb-613d6.appspot.com",
    messagingSenderId: "160407986640",
    appId: "1:160407986640:web:d4dd94023be4e6ed9819d5"
};

// Initialize Firebase
const connectFirebase = initializeApp(firebaseConfig);

console.log(connectFirebase)

export default connectFirebase;