import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkeK7bvi0tyUacJiHp2FAe_ACF02XbgWw",
  authDomain: "dongan-notice.firebaseapp.com",
  projectId: "dongan-notice",
  storageBucket: "dongan-notice.appspot.com",
  messagingSenderId: "28222726048",
  appId: "1:28222726048:web:28f1b1be61f0a565d18ec5",
  measurementId: "G-KJ1LJMBL2T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const storage = getStorage();

export {app, analytics, auth, storage }