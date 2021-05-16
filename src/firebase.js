import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALz1nDUmO3kLwxcMhMmMWxXTYFout1Jsw",
  authDomain: "react-crud-60f29.firebaseapp.com",
  databaseURL: "https://react-crud-60f29-default-rtdb.firebaseio.com",
  projectId: "react-crud-60f29",
  storageBucket: "react-crud-60f29.appspot.com",
  messagingSenderId: "1082209226361",
  appId: "1:1082209226361:web:2b974e95c2e343d59e8ea8"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();