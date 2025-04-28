import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCM6tCSSwCBTG_r8_JnwDEeNo53muaIQyQ',
  authDomain: 'coonadoc-6301d.firebaseapp.com',
  projectId: 'coonadoc-6301d',
  storageBucket: 'coonadoc-6301d.appspot.com',
  messagingSenderId: '1010181558020',
  appId: '1:1010181558020:web:037c8d1a277c9ca2f84a51',
  measurementId: 'G-W6QMDW7W91'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
