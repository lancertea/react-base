//全局事件传递
import React, { Component } from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter();
// events常用的API：
// 创建EventEmitter对象：eventBus对象；
// 发出事件：eventBus.emit("事件名称", 参数列表);
// 监听事件：eventBus.addListener("事件名称", 监听函数)；
// 移除事件：eventBus.removeListener("事件名称", 监听函数)；

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.btnClick()}>按钮</button>
      </div>
    );
  }

  btnClick() {
    //发出事件
    eventBus.emit('headerClick', 'why', 18);
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  //在这个生命周期监听
  componentDidMount() {
    eventBus.addListener('headerClick', this.headerClick);
  }

  headerClick(name, age) {
    console.log(name, age);
  }

  //在这个生命周期取消
  componentWillUnmount() {
    eventBus.removeListener('headerClick', this.headerClick);
  }

  render() {
    return (
      <div>
        <Profile />
        <h2>其他内容</h2>
      </div>
    );
  }
}
