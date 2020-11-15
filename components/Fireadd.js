import React, {Component} from 'react'
import firebase from "firebase";
import Router from 'next/router';
import "firebase/storage";

class Fireadd extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }

  //初期化処理
  constructor(props) {
    super(props);
    this.state = {
      name_str:'',
      msg_str:'',
      lastID:-1,
      data:[]
    }
    this.getLastID();//最後のIDチェック
    this.doChangeName = this.doChangeName.bind(this);
    this.doChangeMsg = this.doChangeMsg.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChangeName(e){
    this.setState({
      name_str:e.target.value
    })
  }

  doChangeMsg(e) {
    this.setState({
      msg_str:e.target.value
    })
  }

  doAction(e) {
    this.addFireData();
    Router.push('/fire');
  }

  //最後のIDを取得
  getLastID() {
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByKey()
    .limitToLast(1)
    .on('value', (snapshot)=>{
      let res = snapshot.val();
      for(let i in res){
        self.setState({
          lastID:i
        });
        return;
      }
    });
  }

  
}