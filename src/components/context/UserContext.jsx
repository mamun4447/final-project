import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
  const namePhoto = (name) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //========User Login======//
  const userLogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //=====Sign Out=====//
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
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
      value={{
        user,
        loader,
        googleLogIn,
        signUpUser,
        logOut,
        namePhoto,
        userLogIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
