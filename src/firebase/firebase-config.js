import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAAhxP0D4YpHoozWl_1FFSKpsnrTBm5DQs",
    authDomain: "react-ecomm-db.firebaseapp.com",
    databaseURL: "https://react-ecomm-db.firebaseio.com",
    projectId: "react-ecomm-db",
    storageBucket: "react-ecomm-db.appspot.com",
    messagingSenderId: "630951981789",
    appId: "1:630951981789:web:de41bcd78cd2dc4bcbe134"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( {prompt:'select_account'} );
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

//   export default firebase;