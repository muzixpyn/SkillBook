import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  // ใส่ค่า config จาก Firebase Console ของคุณที่นี่
  apiKey: "AIzaSyC-x3OUR24ztrfJS8j_NUv8IBLCTMDV7TQ",
  authDomain: "dbcousesk.firebaseapp.com",
  databaseURL: "https://dbcousesk-default-rtdb.firebaseio.com",
  projectId: "dbcousesk",
  storageBucket: "dbcousesk.appspot.com",
  messagingSenderId: "407288499218",
  appId: "1:407288499218:web:540d9e906058ad39761ccb",
  measurementId: "G-Q7HPF4L4RX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
