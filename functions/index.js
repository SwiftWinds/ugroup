// The Cloud Functions for Firebase SDK to create Cloud Functions
// and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

const pick = require('object.pick');

const cleanDeep = require('clean-deep');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ugroup-me.firebaseio.com',
});

exports.createUser = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    // Object representing the document
    const userProps = cleanDeep(
      pick(snap.data(), [
        'email',
        'emailVerified',
        'phoneNumber',
        'displayName',
        'photoURL',
      ])
    );

    // Create auth() account for corresponding user doc in firestore
    admin
      .auth()
      .createUser({
        uid: context.params.userId,
        ...userProps,
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
