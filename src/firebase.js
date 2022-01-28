import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyAUeFtjm8vyWpntyMVXoWYEe-0ET42m0o0",

    authDomain: "url-shortner-7bb27.firebaseapp.com",

    projectId: "url-shortner-7bb27",

    storageBucket: "url-shortner-7bb27.appspot.com",

    messagingSenderId: "814674953515",

    appId: "1:814674953515:web:d8e0c0bba2abb46150b16e"

};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
export default db;