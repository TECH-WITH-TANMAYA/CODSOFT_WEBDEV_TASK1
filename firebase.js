import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCNk3rgqkgdO-AQQ61JK48WE3OIMOTulYc',
  authDomain: 'fir-rconfig.firebaseapp.com',
  databaseURL:
    'https://fir-rconfig-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'fir-rconfig',
  storageBucket: 'fir-rconfig.appspot.com',
  messagingSenderId: '164929660511',
  appId: '1:164929660511:web:c28bd378fad42af60d9dea',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
