const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.getServerTime = functions.https.onCall(data => {
  // Return `getTime()` instead of returning the date object itself,
  // as objects like Date can't be serialized and sent over the wire,
  // while `getTime()` returns a simple number.
  return new Date().getTime()
})

