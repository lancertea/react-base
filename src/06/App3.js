//跨组件通信(事件传递):EventBus
import React, { Component } from 'react';
import { EventEmitter } from "events";

const eventBus = new EventEmitter();

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <button onClick={e => this.btnClick()}>按钮</button>
      </div>
    )
  }

  btnClick() {
    //发出事件：eventBus.emit("事件名称", 参数列表);
    eventBus.emit("headerClick", "why", 18);
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
    )
  }
}

export default class App extends Component {

  componentDidMount() {
    //监听事件：eventBus.addListener("事件名称", 监听函数)
    eventBus.addListener("headerClick", this.headerClick)
  }

  headerClick(name, age) {
    console.log(name, age);
  }

  componentWillUnmount() {
    //移除事件：eventBus.removeListener("事件名称", 监听函数）
    eventBus.removeListener("headerClick", this.headerClick);
  }

  render() {
    return (
      <div>
        <Profile/>
        <h2>其他内容</h2>
      </div>
    )
  }
}
