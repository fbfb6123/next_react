import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

// Firebaseの初期化
var firebaseConfig = {
  apiKey: "AIzaSyB3oCAV7BlVlWPrTD_wFf13jyoVt6sDyvY",
  authDomain: "react-f5f3c.firebaseapp.com",
  databaseURL: "https://react-f5f3c.firebaseio.com",
  projectId: "react-f5f3c",
  storageBucket: "react-f5f3c.appspot.com",
  messagingSenderId: "851334510825",
  appId: "1:851334510825:web:6e28f9153216d3be41d878",
  measurementId: "G-9VSHFMFXGZ"
};

var fireapp;
try {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} catch (error) {
  console.log(error.message);
}
export default fireapp;

//ステート初期値
const initial = {
}

//レデューサー(ダミー)
function fireReducer (state = initial, action) {
  switch (action.type) {
    //ダミー
   case 'TESTACTION' :
   return state;
   //デフォルト
   default:
     return state;
  }
}

//initStore関数(redux-store.jsで必要)
export function initStore(state = initial) {
  return createStore(fireReducer, state,
    applyMiddleware(thunkMiddleware))
}