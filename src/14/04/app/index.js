//css in js
import React, { PureComponent } from 'react';

import Home from '../home';
import Profile from '../profile';
//ThemeProvider:定义主题进行全局共享
import styled, { ThemeProvider } from 'styled-components';

//styled组件支持样式继承
const HYButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`;

const HYWarnButton = styled(HYButton)`
  background-color: red;
  color: #fff;
`;

const HYPrimaryButton = styled(HYButton)`
  background-color: green;
  color: #fff;
`;

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ color: 'red', fontSize: '30px' }}>
        <h2 className="title">我是App的标题</h2>
        <p className="desc">我是App中的一段文字描述</p>
        <Home />
        <Profile />
        <HYButton>我是普通按钮</HYButton>
        <HYWarnButton>我是警告按钮</HYWarnButton>
        <HYPrimaryButton>我是主要按钮</HYPrimaryButton>
      </ThemeProvider>
    );
  }
}
