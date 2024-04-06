import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOarK3Dm2hjkB3r-ADUFHdYEtK1DNDQtc",
  authDomain: "bethyfoods-cfda1.firebaseapp.com",
  projectId: "bethyfoods-cfda1",
  storageBucket: "bethyfoods-cfda1.appspot.com",
  messagingSenderId: "507079863556",
  appId: "1:507079863556:web:763ee626957deeff733451"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();