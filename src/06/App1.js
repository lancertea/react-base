//跨组件通信:一层一层自上而下传递
import React, { Component } from 'react';

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称: {props.username}</h2>
      <h2>用户等级: {props.level}</h2>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader username={props.username} level={props.level} /> */}
      <ProfileHeader {...props} />
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

export default class App1 extends Component {
  constructor() {
    super();

    this.state = {
      username: 'lancer',
      level: 66,
    };
  }

  render() {
    const { username, level } = this.state;

    return (
      <div>
        <Profile username={username} level={level} />
        <h2>其他内容</h2>
      </div>
    );
  }
}
