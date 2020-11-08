import React, {Component} from 'react'
import { connect } from 'react-redux'

class Calc extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      input:'',
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  
}