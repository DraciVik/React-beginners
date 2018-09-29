import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOUN2k_zcn4WE-DvhXkelWubnDWuZcr7U",
  authDomain: "catch-of-the-day-viktor.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-viktor.firebaseio.com"
});


const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

// This is a default export

export default base;