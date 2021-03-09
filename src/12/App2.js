//高阶组件应用：增强props
//如果想要给下面两个类增加一个地区为中国的属性
import React, { PureComponent } from 'react';

class Home extends PureComponent {
  render() {
    return <h2>Home:{`昵称：${this.props.username} 等级：${this.props.level} 区域：${this.props.region}`}</h2>;
  }
}
class About extends PureComponent {
  render() {
    return <h2>Home:{`昵称：${this.props.username} 等级：${this.props.level} 区域：${this.props.region}`}</h2>;
  }
}

//高阶组件
function enhanceComponent(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="china"></WrappedComponent>;
  };
}

const EnhanceHome = enhanceComponent(Home);
const EnhanceAbout = enhanceComponent(About);

class App2 extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome username="lancer" level={12}></EnhanceHome>
        <EnhanceAbout username="jack" level={99}></EnhanceAbout>
      </div>
    );
  }
}

export default App2;
