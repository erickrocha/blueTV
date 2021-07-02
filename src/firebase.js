import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA8Oq2YjYzO_nK-vaYiYYQatNRBeRF-Q9w',
  authDomain: 'bluetv-990f5.firebaseapp.com',
  databaseURL: 'https://bluetv-990f5-default-rtdb.firebaseio.com',
  projectId: 'bluetv-990f5',
  storageBucket: 'bluetv-990f5.appspot.com',
  messagingSenderId: '585673699181',
  appId: '1:585673699181:web:57868d399c33a1f4903464',
  measurementId: 'G-QYSZ9FWR5X'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export default firestore;
