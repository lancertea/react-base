import React, { PureComponent } from 'react';
import homeStyle from './style.module.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>我是Home标题111</h2>
        <span className={homeStyle.desc}>我是Home中的span段落</span>
      </div>
    );
  }
}
