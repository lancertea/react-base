//refs
import React, { PureComponent, createRef } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.titleEl = null;
    this.counterRef = createRef();
  }

  render() {
    return (
      <div>
        {/* ref=字符串/对象/函数 */}
        <h2 ref="title">String Ref</h2>
        <h2 ref={this.titleRef}>Hello Create Ref</h2>
        <h2 ref={(element) => (this.titleEl = element)}>Callback Ref</h2>

        <button onClick={(e) => this.changeText()}>改变文本</button>

        <Counter ref={this.counterRef} />
        <button onClick={(e) => this.appIncrement()}>app +1</button>
      </div>
    );
  }

  changeText() {
    //
    //1.字符串（不推荐），后续更新可能会删除
    this.refs.title.innerHTML = '你好啊,李银河';
    //2.对象，目前React推荐的方式
    //使用时获取到创建的对象其中有一个current属性就是对应的元素
    this.titleRef.current.innerHTML = '你好啊,李银河';
    //3.回调函数
    this.titleEl.innerHTML = '你好啊,李银河';
  }

  appIncrement() {
    this.counterRef.current.increment();
  }

  // ref 的值根据节点的类型而有所不同：
  // 1.当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性；
  // 2.当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性；
  // 3.你不能在函数组件上使用 ref 属性，因为他们没有实例；
}
