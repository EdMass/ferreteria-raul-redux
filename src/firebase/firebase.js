import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCvLnicXAoLHXimKMBKxXfZdaVqKkTg6X0",
  authDomain: "ferreteriadonraul-6b205.firebaseapp.com",
  projectId: "ferreteriadonraul-6b205",
  storageBucket: "ferreteriadonraul-6b205.appspot.com",
  messagingSenderId: "122436323292",
  appId: "1:122436323292:web:6541ee249cb0820f36b119",
  measurementId: "G-3YB003VNB0"
};
  
  // Initialize Firebase
  const fireApp = initializeApp(firebaseConfig);

  export default fireApp;