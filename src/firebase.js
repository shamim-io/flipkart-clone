import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1M5MJKCf5nMxbFL2wi8pJsFAdG6Cvxgc",
  authDomain: "flipkart-shamim.firebaseapp.com",
  projectId: "flipkart-shamim",
  storageBucket: "flipkart-shamim.appspot.com",
  messagingSenderId: "196652819116",
  appId: "1:196652819116:web:9c40817af37ab6acb27509",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
