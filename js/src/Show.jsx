import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyD59HL44cPg08gdrHkpe90LXSZXz8qInnE",
  authDomain: "jatin-27242.firebaseapp.com",
  databaseURL: "https://jatin-27242-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jatin-27242",
  storageBucket: "jatin-27242.appspot.com",
  messagingSenderId: "867778850957",
  appId: "1:867778850957:web:8ddf7015dd08b732c932c4"
};

firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();

export default firebase;
