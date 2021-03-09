//案例练习：tab切换
import React, { Component } from 'react';

import Tab from './Tab';
import './style.css';

export default class App1 extends Component {
  constructor(props) {
    super(props);

    this.titles = ['流行', '新款', '精选'];

    this.state = {
      currentTitle: '流行',
    };
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index],
    });
  }

  render() {
    return (
      <div>
        <Tab titles={this.titles} itemClick={(index) => this.itemClick(index)} />
        <h2>{this.state.currentTitle}</h2>
      </div>
    );
  }
}
