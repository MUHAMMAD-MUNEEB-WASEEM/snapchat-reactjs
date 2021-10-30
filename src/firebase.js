import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPnJ6uILifBGSMejXx6wd0OfEDOFgDPKU",
    authDomain: "snapchat-7df28.firebaseapp.com",
    projectId: "snapchat-7df28",
    storageBucket: "snapchat-7df28.appspot.com",
    messagingSenderId: "276668292597",
    appId: "1:276668292597:web:5aa3dc1d70f31da70a54bc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, db, storage, provider}