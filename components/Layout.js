import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';

class Layout extends Component {

  render() {
    return (<div>
      {style}
      <Header header={this.props.header}
        title={this.props.title} />
        {/* this.props.childrenがindex.jsから<Layout>コンテンツ内容</Layout>を取得して表示している */}
      {this.props.children}
      <Footer footer={this.props.footer}/>
    </div>);
  }

}
export default Layout;

