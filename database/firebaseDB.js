import * as firebase from "firebase/compat";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyArM80IOVKPeBib04P4_JH97G3i4EGSeC8",
  authDomain: "project-gastronome.firebaseapp.com",
  projectId: "project-gastronome",
  storageBucket: "project-gastronome.appspot.com",
  messagingSenderId: "804981356233",
  appId: "1:804981356233:web:7a20f787d6685a568fbf18"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
// export {firebase ,auth};
export default firebase;
