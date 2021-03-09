//组件间的嵌套

import React, { Component } from 'react';

//Header
function Header() {
  return <h2>Header</h2>;
}

function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}

function Banner() {
  return <div>Banner</div>;
}

function ProductList() {
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
  return <h2>Footer</h2>;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
