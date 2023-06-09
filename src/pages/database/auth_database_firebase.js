import { app } from "./database_firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

import { createNewUser } from "./regular_database_firebase";

const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
  return true;
};

const registerWithEmailAndPassword = async (name, email, password) => {
  console.log(email, password);
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await createNewUser(user.uid, name, email)
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
  return true;
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  if (signOut(auth)) return true;
  else return false;
};

export {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

