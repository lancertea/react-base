//高阶组件应用：渲染判断鉴权
import React, { PureComponent } from 'react';

function loginAuth(Page) {
  return (props) => {
    if (props.isLogin) {
      return <Page />;
    } else {
      return <LoginPage />;
    }
  };
}

function LoginPage() {
  return <h2>LoginPage</h2>;
}

function CartPage() {
  return <h2>CartPage</h2>;
}

const AuthCartPage = loginAuth(CartPage);

export default class App4 extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true} />
      </div>
    );
  }
}
