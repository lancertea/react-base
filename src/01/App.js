//类组件和函数组件的区别

// import React, { Component } from 'react';
//类组件
// 类组件需要继承自 React.Component
// 类组件必须实现render函数
// 类组件有自己的生命周期
// export default class App extends Component {
//   //constructor是可选的，我们通常在constructor中初始化一些数据
//   constructor() {
//     super();
//     //this.state中维护的就是我们组件内部的数据
//     this.state = {
//       count: 0,
//     };
//   }
//   //render() 方法是 class 组件中唯一必须实现的方法
//   render() {
//     return <h2>Hello App</h2>;
//   }
// }

// 当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：
// React 元素：通常通过 JSX 创建。例如，<div /> 会被 React 渲染为 DOM 节点，<MyComponent /> 会被 React 渲染为自定义组件；无论是 <div /> 还是 <MyComponent /> 均为 React 元素。
// 数组或 fragments：使得 render 方法可以返回多个元素。
// Portals：可以渲染子节点到不同的 DOM 子树中。
// 字符串或数值类型：它们在 DOM 中会被渲染为文本节点
// 布尔类型或 null：什么都不渲染。

//函数组件(不涉及hooks下)
// 没有生命周期，也会被更新并挂载，但是没有生命周期函数
// 没有this(组件实例）
// 没有内部状态（hooks）
export default function App() {
  return <h2>Hello App</h2>;
}
