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
    this.reset = this.reset.bind(this);
  }

  doAction(e) {
    if (e.shiftKey){
      return this.props.dispatch({ type:'DECREMENT' });
    } else {
      return this.props.dispatch({ type:'INCREMENT' });
    }
  }

  render(){
    return <p onClick={this.doAction}
       style={this.msgStyle}>
         {this.state.msg}
       </p>;
  }
}