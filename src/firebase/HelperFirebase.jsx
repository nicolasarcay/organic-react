import firebase from "firebase/app";
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDKi3IKDirPbtOdOAP3nCS8pfGSHThivWU",
    authDomain: "orgnic-coderhouse.firebaseapp.com",
    projectId: "orgnic-coderhouse",
    storageBucket: "orgnic-coderhouse.appspot.com",
    messagingSenderId: "315643378644",
    appId: "1:315643378644:web:f1a52713ae07c6f1c37441"
});

export function getFirebase (){
    return app;
}
export function getFirestore (){
    return firebase.firestore(app);
}

