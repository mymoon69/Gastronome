// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBkVoPorfLqJ78o2615fwkY05ixVcgxeVw",
  authDomain: "mobile-lab10-eb46b.firebaseapp.com",
  projectId: "mobile-lab10-eb46b",
  storageBucket: "mobile-lab10-eb46b.appspot.com",
  messagingSenderId: "191540488435",
  appId: "1:191540488435:web:d0c1674f48a0a7c7676f86",
  measurementId: "G-04JG1LR2PX"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
// export {firebase ,auth};
export default firebase;
