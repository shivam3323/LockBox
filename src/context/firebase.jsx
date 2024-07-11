// FirebaseContext.js
import React, { createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC8jrG01mR97Z2ad99q2czU_TN9QOaBlw8",
  authDomain: "lockbox-ac34c.firebaseapp.com",
  projectId: "lockbox-ac34c",
  storageBucket: "lockbox-ac34c.appspot.com",
  messagingSenderId: "427132187115",
  appId: "1:427132187115:web:dc595d26e012d1419629ae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export{auth}