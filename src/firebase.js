import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2OXPpYve5XTdxDr5_Wj9Xb6uZYEFOEOQ",
  authDomain: "disney-clone-48d6b.firebaseapp.com",
  projectId: "disney-clone-48d6b",
  storageBucket: "disney-clone-48d6b.appspot.com",
  messagingSenderId: "279929374486",
  appId: "1:279929374486:web:61b9b357ef630a165f3237",
  measurementId: "G-ZFRZEDFTSB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
