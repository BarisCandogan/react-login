import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDmqSW0lpydeTx0MlYVVNSRQt6jdpeCmQU',
  authDomain: 'login-ca3c8.firebaseapp.com',
  projectId: 'login-ca3c8',
  storageBucket: 'login-ca3c8.appspot.com',
  messagingSenderId: '761680510080',
  appId: '1:761680510080:web:25083090d511d149673a65',
})

export const auth = app.auth()
export default app
