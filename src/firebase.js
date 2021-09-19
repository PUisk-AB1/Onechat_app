import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBeRC67s146gE984f-3fJg-7XWCpru46B0",
  authDomain: "onechat-6a00c.firebaseapp.com",
  projectId: "onechat-6a00c",
  storageBucket: "onechat-6a00c.appspot.com",
  messagingSenderId: "489688289674",
  appId: "1:489688289674:web:2ab7b31f9f72938ebaf873"
}).auth();