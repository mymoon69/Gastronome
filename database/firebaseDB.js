import * as firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyArM80IOVKPeBib04P4_JH97G3i4EGSeC8",
    authDomain: "project-gastronome.firebaseapp.com",
    projectId: "project-gastronome",
    storageBucket: "project-gastronome.appspot.com",
    messagingSenderId: "804981356233",
    appId: "1:804981356233:web:7a20f787d6685a568fbf18"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
