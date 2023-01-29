import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCTfG5ctDzgfn8iGr0SPOvlkkLDLDTmWiQ',
  authDomain: 'parakalo-design.firebaseapp.com',
  projectId: 'parakalo-design',
  storageBucket: 'parakalo-design.appspot.com',
  messagingSenderId: '1042328958431',
  appId: '1:1042328958431:web:18ccec521710ffe466006a',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
