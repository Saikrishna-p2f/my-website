// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv_QSEXjaM-vfPD8HGfZnuaNHMkrwrrpU",
  authDomain: "fileupload-d77ee.firebaseapp.com",
  databaseURL: "https://fileupload-d77ee-default-rtdb.firebaseio.com",
  projectId: "fileupload-d77ee",
  storageBucket: "fileupload-d77ee.appspot.com",
  messagingSenderId: "847720109071",
  appId: "1:847720109071:web:d198034456cf310e5fff7a",
  measurementId: "G-F8PK1XLJBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
