import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAn32yNBPOlAESjn5v0Zc-20sp_yxgaARA",
    authDomain: "linkedin-clone-1c133.firebaseapp.com",
    projectId: "linkedin-clone-1c133",
    storageBucket: "linkedin-clone-1c133.appspot.com",
    messagingSenderId: "1089216918312",
    appId: "1:1089216918312:web:f6606f988795db24d8d61d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;