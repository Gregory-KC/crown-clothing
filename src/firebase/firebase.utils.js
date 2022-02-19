import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config=  {
    apiKey: "AIzaSyCa019SWwYe2n7Gb2Se1NIMe3TGERRoZiM",
    authDomain: "crwn-db-a2074.firebaseapp.com",
    projectId: "crwn-db-a2074",
    storageBucket: "crwn-db-a2074.appspot.com",
    messagingSenderId: "951331533180",
    appId: "1:951331533180:web:08881c1d0c48dab7fd74f9",
    measurementId: "G-01R5FT460L"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;