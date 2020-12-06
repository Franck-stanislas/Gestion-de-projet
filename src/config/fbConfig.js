import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"
import "firebase/analytics"

 var firebaseConfig = {
    apiKey: "AIzaSyDUtr82UtT46xSzuQ4GdzLp4cbwVXXcbnA",
    authDomain: "gestion-de-projet-8f12f.firebaseapp.com",
    databaseURL: "https://gestion-de-projet-8f12f.firebaseio.com",
    projectId: "gestion-de-projet-8f12f",
    storageBucket: "gestion-de-projet-8f12f.appspot.com",
    messagingSenderId: "1091624007141",
    appId: "1:1091624007141:web:0223a0749a67fb7e982b0c",
    measurementId: "G-H5JN28KF06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
