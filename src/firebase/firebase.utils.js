import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDFkXVTcfha7MbPvL2CGv_pBwvlUb6Q2QI",
    authDomain: "crwn-db-85753.firebaseapp.com",
    databaseURL: "https://crwn-db-85753.firebaseio.com",
    projectId: "crwn-db-85753",
    storageBucket: "crwn-db-85753.appspot.com",
    messagingSenderId: "656212308816",
    appId: "1:656212308816:web:9f179ec5953d991500f255",
    measurementId: "G-YQMG977Z03"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;