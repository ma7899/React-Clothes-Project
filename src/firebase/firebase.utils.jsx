import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBH0HBcYMSX35M7LgxIGF1nbDXedDCbNjw",
    authDomain: "react-clothes-project.firebaseapp.com",
    databaseURL: "https://react-clothes-project.firebaseio.com",
    projectId: "react-clothes-project",
    storageBucket: "react-clothes-project.appspot.com",
    messagingSenderId: "328289948112",
    appId: "1:328289948112:web:5e98472c0159497ddce9d5",
    measurementId: "G-CKBLJ12PFP"
  };

  firebase.initializeApp(config);

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
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;