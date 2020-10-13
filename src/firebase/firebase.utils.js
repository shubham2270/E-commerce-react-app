import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAXBhNDdckh-Bv6JKlDafz7L-Aj96Q2P1k",
  authDomain: "ecommerce-db-19955.firebaseapp.com",
  databaseURL: "https://ecommerce-db-19955.firebaseio.com",
  projectId: "ecommerce-db-19955",
  storageBucket: "ecommerce-db-19955.appspot.com",
  messagingSenderId: "799037553260",
  appId: "1:799037553260:web:3c62833b1e19f46dbfb649",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
