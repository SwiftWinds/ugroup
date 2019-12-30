// The Cloud Functions for Firebase SDK to create Cloud Functions
// and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ugroup-me.firebaseio.com',
});

exports.createUser = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    // Object representing the document
    const user = snap.data();

    // Create auth() account for corresponding user doc in firestore
    admin
      .auth()
      .createUser({
        email: user.email,
        password: user.password,
        displayName: user.name,
        uid: context.params.userId,
      })
      .then((userRecord) => {
        console.log('Successfully created new user:', userRecord.uid);
        return null;
      })
      .catch((error) => {
        console.log('Error creating new user:', error);
      });

    return null;
  });
