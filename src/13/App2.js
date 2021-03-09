//Portals
// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案：
// 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment；
// 第二个参数（container）是一个 DOM 元素；
// ReactDOM.createPortal(child, container)
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('modal'));
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal>
          <h2>我是标题</h2>
        </Modal>
      </div>
    );
  }
}
