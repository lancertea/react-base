//高阶组件:参数为组件，返回值也为组件的函数
//不建议一个组件继承一个组件的写法，而是组件的组合
//HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用

// 高阶组件并不是React API的一部分，它是基于React的组合特性而形成的设计模式；
// 高阶组件在一些React第三方库中非常常见：
// 比如redux中的connect
// 比如react-router中的withRouter
import React, { PureComponent } from 'react';

class App1 extends PureComponent {
  render() {
    // return <div>App:{this.props.name}</div>;
    return <div>App</div>;
  }
}
//高阶组件的定义
// function enhanceComponent(WrappedComponent) {
//   return class NewComponent extends PureComponent {
//     render() {
//       return <WrappedComponent />;
//     }
//   };
// }

//可以更改其名字
function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent />;
    }
  }

  NewComponent.displayName = 'Higher';
  return NewComponent;
}

//可以传值
// function enhanceComponent(WrappedComponent) {
//   class NewComponent extends PureComponent {
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }

//   return NewComponent;
// }

//函数式写法
// function enhanceComponent(WrappedComponent) {
//   function NewComponent (props) {
//       return <WrappedComponent {...props} />;

//   }

//   return NewComponent;
// }

const EnhanceComponent = enhanceComponent(App1);
export default EnhanceComponent;
