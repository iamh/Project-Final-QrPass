import firebase from 'firebase/app';

// Firebase Auth
const config = {
	apiKey: "AIzaSyDGg5VtycFoFNVQFMhfjzjqs_xV_kxsIr8",
	authDomain: "final-app-dd7be.firebaseapp.com",
	databaseURL: "https://final-app-dd7be.firebaseio.com",
	projectId: "final-app-dd7be",
	storageBucket: "final-app-dd7be.appspot.com",
	messagingSenderId: "770020474894"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;