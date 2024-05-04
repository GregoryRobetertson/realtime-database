// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/getFirestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkfpq1vgK_9cha82U1k35IMp5qgZuubLo",
  authDomain: "realtime-database-59e6a.firebaseapp.com",
  projectId: "realtime-database-59e6a",
  storageBucket: "realtime-database-59e6a.appspot.com",
  messagingSenderId: "1021242056025",
  appId: "1:1021242056025:web:14ec11e913ae4fe10e8048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};