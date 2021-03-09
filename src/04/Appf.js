//父传子通信-函数组件
import React, { Component } from 'react';

function Child(props) {
  const { name, age, height } = props;

  return (
    <div>
      <h2>我是function的组件</h2>
      <p>展示父组件传递过来的数据: {name + ' ' + age + ' ' + height}</p>
    </div>
  );
}

export default class Appf extends Component {
  render() {
    return (
      <div>
        <Child name="why" age="18" height="1.88" />
        <Child name="kobe" age="30" height="1.98" />
      </div>
    );
  }
}
