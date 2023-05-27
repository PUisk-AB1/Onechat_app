import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "onechat-3719c.firebaseapp.com",
    projectId: "onechat-3719c",
    storageBucket: "onechat-3719c.appspot.com",
    messagingSenderId: "511942934536",
    appId: "1:511942934536:web:907a7a986063d8ab0e51bd",
  })
  .auth();
