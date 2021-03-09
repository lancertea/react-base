//父传子通信-类组件
//父组件通过属性=值的形式来传递给子组件数据
//子组件通过props参数获取父组件传递过来的数据
import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    //相当于子类调用了super.call(this,props)
    super(props);
    //this.props = props;
  }

  render() {
    //所以这里的this指向子类
    const { name, age, height } = this.props;

    return (
      <div>
        <h2>我是class的组件</h2>
        <p>展示父组件传递过来的数据: {name + ' ' + age + ' ' + height}</p>
      </div>
    );
  }
}

export default class Appc extends Component {
  render() {
    return (
      <div>
        <Child name="why" age="18" height="1.88" />
        <Child name="jack" age="22" height="1.98" />
        <Child name="lancer" age="12" height="1.65" />
      </div>
    );
  }
}
