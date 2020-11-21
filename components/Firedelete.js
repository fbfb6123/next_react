import React, {Component} from 'react'
import firebase from "firebase";
import Router from 'next/router';
import "firebase/storage";

class Firedelete extends Component {
  style = {
    fontsize:"12pt",
    padding:"5px 10px"
  }

  //初期化処理
  constructor(props) {
    super(props);
    this.state={
      id_str:'',
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this. doAction.bind(this);
  }
  
}