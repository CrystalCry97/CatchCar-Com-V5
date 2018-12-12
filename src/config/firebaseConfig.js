import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyD_5JION_g1WEWavcZC-5mzQ7nAt1qbKxk",
    authDomain: "catchcarv4.firebaseapp.com",
    databaseURL: "https://catchcarv4.firebaseio.com",
    projectId: "catchcarv4",
    storageBucket: "catchcarv4.appspot.com",
    messagingSenderId: "327590431776"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;