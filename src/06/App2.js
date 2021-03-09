//跨组件通信(数据共享):context
//提供在组件之间共享值（比如全局变量，当前认证的用户、主题或首选语言）的方式，而不必显式地通过组件树的逐层传递props
import React, { Component } from 'react';

//1.创建一个需要共享的Context对象
//如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的 Provider 中读取到当前的context值
//defaultValue是组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值
const UserContext = React.createContext({
  // 默认值
  username: 'lancer',
  level: -1,
});

//想用context,必须是类组件
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户昵称: {this.context.username}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    );
  }
}

//3.挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象
//这能让你使用 this.context 来消费最近 Context 上的那个值
//你可以在任何生命周期中访问到它，包括 render 函数中
ProfileHeader.contextType = UserContext;

//什么时候使用Context.Consumer呢？
//当使用value的组件是一个函数式组件
//当组件有多个Context

//函数组件的写法：
function ProfileHeader1() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称: {value.username}</h2>
            <h2>用户等级: {value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ProfileHeader1 />

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

export default class App2 extends Component {
  constructor() {
    super();

    this.state = {
      username: 'lancer',
      level: 66,
    };
  }

  render() {
    return (
      <div>
        {/* 
2.每个Context对象都会返回一个Provider React组件，它允许消费组件订阅 context 的变化
       Provider接收一个 value 属性，传递给消费组件
       一个 Provider 可以和多个消费组件有对应关系
       多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
       当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染
*/}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>

        {/* <Profile />并没有作为 UserContext.Provider 的子组件时使用默认值 */}
        <Profile />
      </div>
    );
  }
}
