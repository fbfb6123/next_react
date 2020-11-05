import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';

class Layout extends Component {

  render() {
    return (<div>
      <Head>
    <title>{this.props.title}</title>
    <meta charSet='utf-8' />
    <meta name='viewport'
      content='initial-scale=1.0, width=device-width' />
      </Head>
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

