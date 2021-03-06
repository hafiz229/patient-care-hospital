import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // const signInUsingGoogle = () => {
  //   setIsLoading(true);

  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       setUser(result.user);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  const signInUsingGoogle = () => {
    setIsLoading(true);

    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    signInUsingGoogle,
    user,
    setUser,
    logOut,
    isLoading,
  };
};

export default useFirebase;
