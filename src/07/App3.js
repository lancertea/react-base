//数据的合并
import React, { Component } from 'react';

export default class App3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
      name: 'lancer',
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button
          onClick={(e) => {
            this.change();
          }}
        >
          改变文本
        </button>
        <h2>当前计数：{this.state.counter}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +1
        </button>
      </div>
    );
  }

  // 相当于执行了 Object.assign({},this.state,{message: 'bye~'})
  change() {
    this.setState({
      message: 'bye~',
    });
  }

  //三个操作最终会合并成一个操作
  //原理类似于Object.assign
  // increment() {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  //   this.setState({
  //     counter: this.state.counter + 2,
  //   });
  //   this.setState({
  //     counter: this.state.counter + 3,
  //   });
  // }

  //如果想要实现多次操作的累加，需要传入一个回调函数
  //这里的state是前一次的结果
  increment() {
    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
      };
    });

    this.setState((state, props) => {
      return {
        counter: state.counter + 2,
      };
    });

    this.setState((state, props) => {
      return {
        counter: state.counter + 3,
      };
    });
  }
}
