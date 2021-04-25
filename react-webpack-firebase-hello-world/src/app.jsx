import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database"

import config from "./config";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [name, setName] = useState(null);

  // Connect to firebase and listen for events
  useEffect(() => {
    const nameRef = firebase.database().ref().child("data").child("name");
    nameRef.on("value", (snapshot) => {
      setName(snapshot.val());
    });
  }, []);

  return (
    <div>Hello, { name }</div>
  );
}

export default App;