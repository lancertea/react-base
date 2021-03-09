//css modules
//这种css使用方式最终生成的class名称会全局唯一,解决了局部作用域的问题
//缺点：
// 引用的类名，不能使用连接符(.home-title)，在JavaScript中是不识别的；
// 所有的className都必须使用{style.className} 的形式来编写；
// 不方便动态来修改某些样式，依然需要使用内联样式的方式；
import React, { PureComponent } from 'react';

import Home from '../home';
import appStyle from './style.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我是App的标题</h2>
        <p className={appStyle.desc}>我是App中的一段文字描述</p>
        <Home />
      </div>
    );
  }
}
