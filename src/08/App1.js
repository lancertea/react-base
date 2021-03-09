//组件嵌套调用的render调用
import React, { Component } from 'react';

function Header() {
  console.log('Header Render 被调用');
  return <h2>Header</h2>;
}

class Main extends Component {
  render() {
    console.log('Main Render 被调用');
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

function Banner() {
  console.log('Banner Render 被调用');
  return <div>Banner</div>;
}

function ProductList() {
  console.log('ProductList Render 被调用');
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  );
}

function Footer() {
  console.log('Footer Render 被调用');
  return <h2>Footer</h2>;
}

export default class App1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log('App Render 被调用');

    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
