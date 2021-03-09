import React, { PureComponent } from 'react';
import styled from 'styled-components';

//1.props可以穿透
const HInput = styled.input`
  border-color: red;

  &:focus {
    outline-color: orange;
  }
`;

//2.添加attrs属性
const YInput = styled.input.attrs({
  placeholder: '请填写密码',
  paddingLeft: (props) => props.left || '5px',
})`
  border-color: red;
  padding-left: ${(props) => props.paddingLeft};
  color: ${(props) => props.color};

  &:focus {
    outline-color: orange;
  }
`;

//全局主题共享
const ProfileWrapper = styled.ul`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize};
`;

export default class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      color: 'purple',
    };
  }

  render() {
    return (
      <div>
        <HInput type="password" />
        <YInput type="password" color={this.state.color} left="50px" />
        <h2>我是Profile标题</h2>
        <ProfileWrapper>
          <li>我是列表1</li>
          <li>我是列表2</li>
          <li>我是列表3</li>
        </ProfileWrapper>
      </div>
    );
  }
}
