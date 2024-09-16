import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";


import app from "./firebase";

const authApp = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);

const booksCollectionRef = collection(db, "books");


export const firebaseCreateUser = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(authApp, email, password)

    } catch (error) {
        console.log('error createuserWithEmailAndPassword : ', error)
    }
}

export const getCurrentUser = () => {
    return authApp?.currentUser
}

export const firebaseSignOut = async () => {
    try {
        await signOut(authApp);
    } catch (error) {
        console.log('error signOut : ', error)
    }
}

export const firebaseSignIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(authApp, email, password)
    } catch (error) {
        console.log('error signIn : ', error)
    }
}

export const firebaseSignUpWithGoogle = async () => {
    try {
        await signInWithPopup(authApp, googleProvider);
        console.log('Signed in successfully');
    } catch (error) {
        console.error('Error during sign-in:', error.code, error.message);
    }
}


export const getBooksCollection = async () => {
    try {
        const booksList = await getDocs(booksCollectionRef);
        const filteredData = booksList.docs.map(data => ({...data.data(), id: data.id}))
        return filteredData;
    } catch (error) {
        console.error('Error during sign-in:', error.code, error.message);
    }
}