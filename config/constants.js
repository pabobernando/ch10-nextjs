import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDq-GmqQhue84eCNFUWG-9kRbHng-CNPWI",
  authDomain: "binar-chapter9-7db1d.firebaseapp.com",
  databaseURL: "https://binar-chapter9-7db1d-default-rtdb.firebaseio.com",
  // apiKey: "AIzaSyAecLKqeS7DE0Zza6G_Vooh6AidUz-iX8I",
  //   authDomain: "react-firebase-62896.firebaseapp.com",
  //   databaseURL: "https://react-firebase-62896-default-rtdb.firebaseio.com",

};

// firebase.initializeApp(config)
if (!firebase.apps.length) {
  try {
    firebase.initializeApp(config);
  } catch (err) {
    console.log("error");
  }
}
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
