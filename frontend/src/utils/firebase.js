import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, EmailAuthProvider } from 'firebase/auth';

const firestore_config = {
    apiKey: "AIzaSyDTKQVhP_EcfvR3uNgmFpHORLLqoSjlFhU",
    authDomain: "bingetracker.firebaseapp.com",
    projectId: "bingetracker",
    storageBucket: "bingetracker.appspot.com",
    messagingSenderId: "645030462531",
    appId: "1:645030462531:web:d15e63a65ce1a92528c0f6"
};

const app = initializeApp(firestore_config);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const auth_provider = new EmailAuthProvider();
