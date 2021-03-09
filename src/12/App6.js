//高阶组件应用：生命周期劫持
import React, { PureComponent } from 'react';

function logRenderTime(WrapperCpn) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.begin = Date.now();
    }

    componentDidMount() {
      this.end = Date.now();
      const interval = this.end - this.begin;
      console.log(`${WrapperCpn.name}渲染使用时间:${interval}`);
    }

    render() {
      return <WrapperCpn {...this.props} />;
    }
  };
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>我是home的元素,哈哈哈</p>
      </div>
    );
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <div>
        <h2>Detail</h2>
        <p>我是detail的元素,哈哈哈</p>
      </div>
    );
  }
}

const LogHome = logRenderTime(Home);
const LogDetail = logRenderTime(Detail);

export default class App6 extends PureComponent {
  render() {
    return (
      <div>
        <LogHome />
        <LogDetail />
      </div>
    );
  }
}
