import { getFirestore } from "firebase/firestore" 
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from "firebase/app"

const FireBaseInit = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "pyro-intuit.firebaseapp.com",
  databaseURL: "https://pyro-intuit.firebaseio.com",
  projectId: "pyro-intuit",
  storageBucket: "pyro-intuit.appspot.com",
  messagingSenderId: "657829873421",
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(FireBaseInit)
const auth = getAuth()
const db = getFirestore(app)
const provider = new GoogleAuthProvider()


export {
  db,
  auth,
  signInWithPopup,
  provider,
  GoogleAuthProvider,
  onAuthStateChanged
}
