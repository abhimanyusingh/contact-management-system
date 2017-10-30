import * as firebase from 'firebase';
//import * as contacts from '../actions/contacts';

const config = {
    apiKey: "AIzaSyA-kh-5FuRkmHUDyHdY3cysSuk3GNgAqlg",
    authDomain: "contacts-cc1db.firebaseapp.com",
    databaseURL: "https://contacts-cc1db.firebaseio.com",
    projectId: "contacts-cc1db",
    storageBucket: "contacts-cc1db.appspot.com",
    messagingSenderId: "756279517122"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};
