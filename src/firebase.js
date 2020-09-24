import firebase from "firebase";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "clone-xxxxxx.firebaseapp.com",
  databaseURL: "https://clone-xxxxxxx.firebaseio.com",
  projectId: "clone-xxxxxx",
  storageBucket: "clone-xxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxx",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore - real-time db in firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
