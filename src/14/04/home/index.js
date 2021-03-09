import React, { PureComponent } from 'react';
import { HomeWrapper } from './style';
// styled-components的本质是通过函数的调用，最终创建出一个组件：
// 这个组件会被自动添加上一个不重复的class
// styled-components会给该class添加相关的样式

// 另外，它支持类似于CSS预处理器一样的样式嵌套：
// 支持直接子代选择器或后代选择器，并且直接编写样式
// 可以通过&符号获取当前元素
// 直接伪类选择器、伪元素等

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <h2>我是Home标题</h2>
        <ul>
          <li className="active">我是列表1</li>
          <li>我是列表2</li>
          <li>我是列表3</li>
        </ul>
      </HomeWrapper>
    );
  }
}
