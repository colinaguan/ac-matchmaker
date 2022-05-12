// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
//  import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEaUpaeA1ZdF7AupMIhJUoJOo3i_6M3Kw',
  authDomain: 'tasselnew.firebaseapp.com',
  projectId: 'tasselnew',
  storageBucket: 'tasselnew.appspot.com',
  messagingSenderId: '461190444658',
  appId: '1:461190444658:web:f63238a5e508a9671ff4eb',
  measurementId: 'G-MG8GDC1K1Y',
};

// Initialize Firebase
export const fbapp = () =>{
  initializeApp(firebaseConfig);
};
