//类组件的生命周期
import React, { Component } from 'react';

class HYTestCpn extends Component {
  render() {
    return <h2>HYTestCpn</h2>;
  }

  componentWillUnmount() {
    console.log('HYTestCpn componentWillUnmount');
  }
}

export default class App extends Component {
// constructor中通常只做两件事情：
// 通过给 this.state 赋值对象来初始化内部的state；
// 为事件绑定实例（this）；
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log('调用constructor方法');
  }

  render() {
    console.log('调用render方法');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        {this.state.counter <= 5 && <HYTestCpn />}
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

// componentDidMount中通常进行哪里操作呢？
// 依赖于DOM的操作可以在这里进行；
// 在此处发送网络请求就最好的地方；（官方建议）
// 可以在此处添加一些订阅（会在componentWillUnmount取消订阅）；
  componentDidMount() {
    console.log('调用componentDidMount方法');
  }

// componentDidUpdate() 会在更新后会被立即调用，首次渲染不会执行此方法。
// 当组件更新后，可以在此处对 DOM 进行操作；
// 如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）。
  componentDidUpdate() {
    console.log('调用componentDidUpdate方法');
  }

// componentWillUnmount() 会在组件卸载及销毁之前直接调用。
// 在此方法中执行必要的清理操作；
// 例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等；
  componentWillUnmount() {
    console.log('调用componentWillUnmount方法');
  }
}

//其他生命周期
// getDerivedStateFromProps：state 的值在任何时候都依赖于 props时使用；该方法返回一个对象来更新state；
// getSnapshotBeforeUpdate：在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息（比如说滚动位置）；
// shouldComponentUpdate：控制render方法是否被调用