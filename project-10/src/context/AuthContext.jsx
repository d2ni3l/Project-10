import React, { createContext, useState, useContext, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, db } from "../firebase";
import {setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  function signUp(email, password) {
     createUserWithEmailAndPassword(auth, email, password);
     setDoc(doc(db, 'users', email), {
        savedShows:[]
     } )
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut(email, password) {
    return signOut(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ signUp, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
