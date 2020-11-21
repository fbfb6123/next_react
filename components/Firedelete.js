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


  doChange(e){
    this.setState({
      id_str:e.target.value
    })
  }

  doAction(e) {
    this.deleteFireDate();
    Router.push('/fire');
  }

  //項目の削除
  deleteFireData(){
    let id = this.state.id_str;
    let db = firebase.database();
    let ref = db.reh('sample/' + id);
    ref.remove();
  }

  //レンダリング
  render(){
    return (<div>
      <table>
        <tobody>
          <tr>
            <th className="label">ID:</th>
            <td><input type="text" placehplder="delete ID:"
            onChange={this.doChange}
            value={this.state.id_str} /></td>
          </tr>
          <tr><th></th><td>
          <button onClick={this.doAction}>Delete</button>
          </td></tr>
        </tobody>
      </table>
    </div>)
  }
}

export default Firedelete;