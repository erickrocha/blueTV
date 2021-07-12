import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAnTrI12RRc2LI54h6IbrtkooHSA7xiI7I',
  authDomain: 'credible-bay-319214.firebaseapp.com',
  projectId: 'credible-bay-319214',
  storageBucket: 'credible-bay-319214.appspot.com',
  messagingSenderId: '788544258638',
  appId: '1:788544258638:web:87e9bab0e56ab8177bf91f',
  measurementId: 'G-8Q808N44WG'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export default firestore;
