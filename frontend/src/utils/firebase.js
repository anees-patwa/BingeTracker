import { initializeApp } from "firebase/app";
import { getFirestore, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const firestore_config = {
    apiKey: "AIzaSyDTKQVhP_EcfvR3uNgmFpHORLLqoSjlFhU",
    authDomain: "bingetracker.firebaseapp.com",
    projectId: "bingetracker",
    storageBucket: "bingetracker.appspot.com",
    messagingSenderId: "645030462531",
    appId: "1:645030462531:web:d15e63a65ce1a92528c0f6"
};

const app = initializeApp(firestore_config);

const db = getFirestore(app);
export const user_doc = (user_id) => doc(db, "user_data", user_id);

export const auth = getAuth(app);
export const fb_createUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const fb_signInWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const fb_onAuthStateChanged = (observer) => onAuthStateChanged(auth, observer);



