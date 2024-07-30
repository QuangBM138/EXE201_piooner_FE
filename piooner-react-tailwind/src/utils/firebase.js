// firebase.js
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCOFUZB1mNPZ_qWOOUKptnfc4oHivX2DR0",
  authDomain: "pioneerexe201.firebaseapp.com",
  projectId: "pioneerexe201",
  storageBucket: "pioneerexe201.appspot.com",
  messagingSenderId: "891813161078",
  appId: "1:891813161078:web:d071548f6e4b52f344d757" ,
  // Bạn cần cập nhật giá trị appId này
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
