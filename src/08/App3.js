//PureComponent:类组件继承这个组件后，当这个组件对新旧状态（props、state）进行比较（浅层）发现不同时，才会调用render函数，
import React, { PureComponent } from 'react';

function Header() {
  console.log('Header Render 被调用');
  return <h2>Header</h2>;
}

class Main extends PureComponent {
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

export default class App3 extends PureComponent {
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
