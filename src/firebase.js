import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0hJR8nH9yt-fcqa7UUeb-S8DfsqAUJuQ",
  authDomain: "slack-clone-870e1.firebaseapp.com",
  projectId: "slack-clone-870e1",
  storageBucket: "slack-clone-870e1.appspot.com",
  messagingSenderId: "849638716255",
  appId: "1:849638716255:web:6a55bc401ff8d6aeb6fcea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
