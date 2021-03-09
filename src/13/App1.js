//ref的转发
//当ref用于自定义类组件时，ref对象接收组件的挂载实例作为其current属性
//不能在函数组件上使用ref，因为他们没有实例，如果想要获取函数式组件上的某个DOM元素，可以通过React.forwardRef
import React, { PureComponent, createRef, forwardRef } from 'react';

class CHome extends PureComponent {
  render() {
    return (
      <div>
        <h2>CHome</h2>
      </div>
    );
  }
}

const Home = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>Home</h2>
      <button>按钮</button>
    </div>
  );
});

export default class App1 extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.cHomeTitleRef = createRef();
    this.homeTitleRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello</h2>
        <CHome ref={this.cHomeTitleRef} />
        <Home ref={this.homeTitleRef} />
        <button onClick={(e) => this.printInfo()}>打印ref</button>
      </div>
    );
  }

  printInfo() {
    console.log(this.titleRef.current);
    console.log(this.cHomeTitleRef.current);
    console.log(this.homeTitleRef.current);
  }
}
