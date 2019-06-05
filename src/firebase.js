import firebase from 'firebase/app'
import 'firebase/functions'

// You'll need to add your own config file, which you can generate from the
// Firebase console. For more details, see this video introduction:
// https://www.youtube.com/watch?v=9HTJj03BoQo&t=14m25
import config from './firebase.config'

firebase.initializeApp(config)

const functions = firebase.functions()

// Tells firebase to use the functions dev server when in development mode.
// To start the dev server, you'll need to call:
//
// firebase serve --only functions
//
if (process.env.NODE_ENV !== 'production') {
  functions.useFunctionsEmulator('http://localhost:5000')
}

export const getServerTime = functions.httpsCallable('getServerTime')