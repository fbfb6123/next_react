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

//ステート初期値
const initial = {
  message:'START',
  data:[],
  number:[],
  result:0
}

//レデューサー
function counterReducer (state = initial, action) {
  switch (action.type) {
    //計算実行
   case 'ENTER' :
   let data2 = state.data.slice();
   let s = action.value;
   data2.unshift(s);
   let num = s.replace(/[^0-9]/g,"");
   let number2 = state.number.slice();
   number2.unshift(num);
   let result = (state.result * 1) + (num * 1);
   return {
     message:'ENTER',
     data:data2,
     number:number2,
     result:result
   };
   //リセット
   case 'RESET':
     return {
       message:'RESET',
       data:[],
       number:[],
       result:0
     };
   //デフォルト
   default:
     return state;  
    }
  }
//initStore関数(redux-store.jsで必要)
export function initStore(state = initial) {
  return createStore(counterReducer, state,
    applyMiddleware(thunkMiddleware))
}