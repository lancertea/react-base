//子组件传父组件
//通过props传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { btnClick } = this.props;
    return <button onClick={btnClick}>+1</button>;
  }
}

export default class Appz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <Counter
          btnClick={(e) => {
            this.increment();
          }}
        />
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          ++
        </button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
