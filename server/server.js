import express from "express";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
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
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(app);
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/allquestions', async function (req, res) {
   const docRef = doc(db, "questions", "1");
   const docSnap = await getDoc(docRef);
   
   if (docSnap.exists()) {
     res.send(docSnap.data())
   } else {
     // docSnap.data() will be undefined in this case
     console.log("No such document!");
   }
})






var server = app.listen(8081, function () {
   console.log("Example app listening at http://localhost:8081")
})