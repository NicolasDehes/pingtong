import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM60cAEfbe7O_QxbS-RzeTXtTMKrV4rsY",
  authDomain: "ping-tong-34714.firebaseapp.com",
  projectId: "ping-tong-34714",
  storageBucket: "ping-tong-34714.appspot.com",
  messagingSenderId: "623671266810",
  appId: "1:623671266810:web:223f3722bc9702c5dda843"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
