import React, { PureComponent } from 'react';

export default class App3 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户:
            <input type="text" id="username" name="username" onChange={(e) => this.handleChange(e)} value={username} />
          </label>
          <label htmlFor="password">
            密码:
            <input type="text" id="password" name="password" onChange={(e) => this.handleChange(e)} value={password} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      // ES6语法：obj['key']===obj.key   obj[key] key为变量
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.username, this.state.password);
    event.preventDefault();
  }
}
