import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //======Google Login======//
  const googleLogIn = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  //======User email&Pass signUp=======//
  const signUpUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //=======Name&Photo upload=======//
  const namePhoto = (name, photo) => {
    setLoader(true);
  };

  //========User Login======//
  const userLogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // =======Set user =======//
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loader, googleLogIn, signUpUser, namePhoto, userLogIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
