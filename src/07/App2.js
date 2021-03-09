//可以让setState是同步更新的
//在组件生命周期或React合成事件中，setState是异步
//在setTimeout或者原生dom事件中，setState是同步
import React, { Component } from 'react';

export default class App2 extends Component {
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
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +1
        </button>
        <button id="btn">++</button>
      </div>
    );
  }
  //情况2:原生DOM事件
  componentDidMount() {
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        counter: this.state.counter + 1,
      });
      console.log(this.state.counter);
    });
  }

  increment() {
    //情况1.将其放入定时器中
    setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
      console.log(this.state.counter);
    }, 0);
  }
}
