import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDTmt06mIVqSSHvwvxiAjM9NSTmb8zmGpo",
  authDomain: "c-71-2037d.firebaseapp.com",
  projectId: "c-71-2037d",
  storageBucket: "c-71-2037d.appspot.com",
  messagingSenderId: "553840512446",
  appId: "1:553840512446:web:cd253da6c48718fffe3def"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

