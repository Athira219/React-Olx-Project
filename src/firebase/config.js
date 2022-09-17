import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/compat/storage';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCs5d39nh0FUTc5vCeHFcSvvsSOlA-59No",
  authDomain: "olx---com.firebaseapp.com",
  databaseURL: "https://olx---com-default-rtdb.firebaseio.com",
  projectId: "olx---com",
  storageBucket: "olx---com.appspot.com",
  messagingSenderId: "44233597514",
  appId: "1:44233597514:web:85a2808c3a6a33235a3cb3",
  measurementId: "G-G28RYNKNN6"
};
  



  export default firebase.initializeApp(firebaseConfig) 
  