import firebase from 'firebase';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDa6K_xfl662i_n66BC8p4xBaXiBZkBnQc",
    authDomain: "fir-messaging-dafc5.firebaseapp.com",
    projectId: "fir-messaging-dafc5",
    storageBucket: "fir-messaging-dafc5.appspot.com",
    messagingSenderId: "594342969622",
    appId: "1:594342969622:web:af624ea95bdf7d62fed037"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;