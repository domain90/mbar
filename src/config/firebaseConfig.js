import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBzpUZQ_yhQqbEgsbxLJNI5sFGciDCZqTA",
    authDomain: "mbar-page.firebaseapp.com",
    databaseURL: "https://mbar-page.firebaseio.com",
    projectId: "mbar-page",
    storageBucket: "mbar-page.appspot.com",
    messagingSenderId: "500175606602",
    appId: "1:500175606602:web:0707917b11636b61a0a7b3",
    measurementId: "G-L5PKMGQLHB"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  

  export const storage = firebase.storage()
  export const firestore = firebaseApp.firestore()
  export default firebase