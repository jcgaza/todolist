import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB6ijzVdm5CL2NAON5q48KDvOStRBu1h3s",
  authDomain: "todolist-b1768.firebaseapp.com",
  databaseURL: "https://todolist-b1768.firebaseio.com",
  projectId: "todolist-b1768",
  storageBucket: "todolist-b1768.appspot.com",
  messagingSenderId: "713779932128",
};

const app = firebase.initializeApp(config);
export const database = firebase.database(app);
