import Rect, {Component} from 'rect'
import firebase from "firebase";
import "firebase/storage";

class Firefind extends Component {
  style = {
    borderBottom:"1px solid gray"
  }

  //初期化。ステートとイベント用メソッドの設定
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      data:[]
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  //入力フィールドの処理
  doChange(e) {
    this.setState({
      inpit:e.target.value
    })
  }

  //ボタンクリック時の処理
  doAction(e) {
    this.findFireData(this.state.input);
  }

  //検索実行の処理
  findFireData(s) {
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByKey()
    .equalTo(s)
    .on('value', (snapshot)=> {
      self.setState({
        data:snapshot.val()
      });
    });
  }

  
}