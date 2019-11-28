import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyDrPZo4BrvpDsp5j1lClIWfXhfHhCsyChM",
    authDomain: "listado-alumnos-ee7ae.firebaseapp.com",
    databaseURL: "https://listado-alumnos-ee7ae.firebaseio.com",
    projectId: "listado-alumnos-ee7ae",
    storageBucket: "listado-alumnos-ee7ae.appspot.com",
    messagingSenderId: "850670306816",
    appId: "1:850670306816:web:765ad769866efc7ea43ae5"
};

// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;