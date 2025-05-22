import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";

// export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData).finally(() =>
      setLoading(false)
    );
  };

  const logOut = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email).finally(() => setLoading(false));
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logIn,
    logOut,
    loading,
    setLoading,
    googleLogIn,
    updateUser,
    resetPassword,
    passwordRegex,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
