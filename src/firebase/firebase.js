import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBpoTN_a85RmtwIbUwVDIPfgHqdCgpKalQ",
    authDomain: "react-journal-app-2eec8.firebaseapp.com",
    projectId: "react-journal-app-2eec8",
    storageBucket: "react-journal-app-2eec8.appspot.com",
    messagingSenderId: "516394126924",
    appId: "1:516394126924:web:88a25b80cb899861776ee9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuth = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuth,
    firebase
}
