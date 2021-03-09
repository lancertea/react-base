//受控组件的基本使用
//在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）通常自己维护 state，并根据用户输入进行更新
//而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
//我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
//被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
import React, { PureComponent } from 'react';

export default class App1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        {/* 自行处理提交 */}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {/* htmlFor相当于html内的for 作用：点击时聚焦*/}
          <label htmlFor="username">
            用户名:
            <input type="text" id="username" onChange={(e) => this.handleUsernameChange(e)} value={username} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.username);
    event.preventDefault();
  }
}
