import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';
import { collectionData } from 'rxfire/firestore';
import { filter } from 'rxjs/operators';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCNg-RAKYZJg0U3nRQUnpIsnXHxxK5vEiE',
  authDomain: 'ugroup-me.firebaseapp.com',
  databaseURL: 'https://ugroup-me.firebaseio.com',
  projectId: 'ugroup-me',
  storageBucket: 'ugroup-me.appspot.com',
  messagingSenderId: '861108760042',
  appId: '1:861108760042:web:13241facc580efd1241693',
  measurementId: 'G-PZJXNMD1PJ',
});

const firestore = firebase.firestore(app); // Initialize firestore
const auth = firebase.auth(app); // Initialize firebase auth
const loggedIn = authState(auth).pipe(filter((user) => !!user)); // Observable only return when user is logged in.

export { app, auth, firestore, collectionData, loggedIn };

export default firebase;
