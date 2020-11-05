import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Counter extends Component {
  msgStyle = {
    fontSize:'12pt',
    padding:"5px 15px"
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState((state)=> {
      const num = state.counter + 1;
      return ({
        counter: num,
        msg: "cointer: " + num
      });
    });
  }

  render(){
    return <p onClick={this.doAction}
       style={this.msgStyle}>
         {this.state.msg}
       </p>;
  }
}