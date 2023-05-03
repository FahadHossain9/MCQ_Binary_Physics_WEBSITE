// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPu3dthlhZoG8NiLOwVyLaPAxT7DgGaiY",
  authDomain: "binaryphysics-1fed3.firebaseapp.com",
  projectId: "binaryphysics-1fed3",
  storageBucket: "binaryphysics-1fed3.appspot.com",
  messagingSenderId: "18355092961",
  appId: "1:18355092961:web:61887c4dc62462c3ee66a0",
  measurementId: "G-FRN62PV3CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}
//const analytics = getAnalytics(app);