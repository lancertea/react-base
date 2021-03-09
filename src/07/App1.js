//为什么使用setState
//修改了state后，希望React根据最新的state来重新渲染界面，这种修改，数据确实发生了变化，
//但React并不知道数据发生了变化，React并没有实现类似于Vue2中的Object.defineProperty或者
//Vue3中的Proxy的方式来监听数据的变化，必须通过setState来告知React数据已经开始发生了变化
import React, { Component } from 'react';

export default class App1 extends Component {
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
      </div>
    );
  }
  //方式2:在更新的生命周期中可获得异步更新的state
  componentDidUpdate() {
    console.log('did: '+this.state.counter);
  }

  increment() {
    // this.setState({
    //   //数据更改，视图不会随之更改
    //   // this.state.counter+=1;
    //   // console.log(this.state.counter);
    //   counter: this.state.counter + 1,
    // });
    // console.log(this.state.counter); //0
    //setState是异步更新的
//setState设计为异步，可以显著的提升性能
//如果每次调用 setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的
//最好的办法应该是获取到多个更新，之后进行批量更新
//如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步
//state和props不能保持一致性，会在开发中产生很多的问题
    
    //获取异步更新后的数据
    //方式1:setState(更新的state，回调函数)
    //这个回调函数类似于Vue中的nextTick，会在更新后执行
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log(this.state.counter);
      }
    );
  }
}
