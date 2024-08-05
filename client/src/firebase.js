
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-fe175.firebaseapp.com",
  projectId: "blog-fe175",
  storageBucket: "blog-fe175.appspot.com",
  messagingSenderId: "162889371980",
  appId: "1:162889371980:web:57d2ecea632fe0593d3fe9",
  measurementId: "G-WSE7QB5EV1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
