
import { getApp, getApps ,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBUwnSHAS8VP0ggUG_P9jxJVc-I5gp_NU",
  authDomain: "food-delivery-app-f56bd.firebaseapp.com",
  databaseURL: "https://food-delivery-app-f56bd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-delivery-app-f56bd",
  storageBucket: "food-delivery-app-f56bd.appspot.com",
  messagingSenderId: "1084679945089",
  appId: "1:1084679945089:web:f3743e2793ee3e6b0f8680"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };