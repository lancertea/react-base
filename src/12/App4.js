//高阶组件应用：共享Context
import React, { PureComponent, createContext } from 'react';

const UserContext = createContext({
  username: '默认',
  level: -1,
  region: 'china',
});

//高阶组件
function withUser(WrappedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WrappedComponent {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

class Home extends PureComponent {
  render() {
    return <h2>Home:{`昵称：${this.props.username} 等级：${this.props.level} 区域：${this.props.region}`}</h2>;
  }
}
class About extends PureComponent {
  render() {
    return <h2>About:{`昵称：${this.props.username} 等级：${this.props.level} 区域：${this.props.region}`}</h2>;
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);

class App3 extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{ username: 'why', level: 90, region: 'china' }}>
          <UserHome />
          <UserAbout />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App3;
