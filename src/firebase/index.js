// https://firebase.google.com/docs/reference/node/firebase.html#initializeapp

// import config from '../../config/secret/firebase'
import firebase from 'firebase/app'

const fakeConfig = {
  apiKey: 'AIza....', // Auth / General Use
  authDomain: 'YOUR_APP.firebaseapp.com', // Auth with popup/redirect
  databaseURL: 'https://YOUR_APP.firebaseio.com', // Realtime Database
  storageBucket: 'YOUR_APP.appspot.com', // Storage
  messagingSenderId: '123456789' // Cloud Messaging
}

firebase.initializeApp(fakeConfig)
