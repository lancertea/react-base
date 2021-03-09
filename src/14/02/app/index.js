//普通的css写法
//普通的css都属于全局的css，样式之间会相互影响
import React, { PureComponent } from 'react';

import Home from '../home';
import './style.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className="title">我是App的标题</h2>
        <p className="desc">我是App中的一段文字描述</p>
        <Home />
      </div>
    );
  }
}
