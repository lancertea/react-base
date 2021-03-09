//setState:不可变数据的力量:
//原因：基于浅层比较，对原对象进行更改时，无法监测到，{...a,b}会创建一个新的对象，可检测到
import React, { Component } from 'react';

export default class App4 extends Component {
  constructor(props) {
    super(props);
    //friengs是引用类型，是相同的对象
    this.state = {
      friends: [
        { name: 'lilei', age: 20, height: 1.76 },
        { name: 'lucy', age: 18, height: 1.65 },
        { name: 'tom', age: 30, height: 1.78 },
      ],
    };
  }

  shouldComponentUpdate(newProps, newState) {
    if (newState.friends !== this.state.friends) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                <span>{`姓名:${item.name} 年龄: ${item.age}`}</span>
                <button onClick={(e) => this.incrementAge(index)}>年龄+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.insertFriend()}>添加新数据</button>
      </div>
    );
  }

  insertFriend() {
    //不推荐的做法
    // this.state.friends.push({ name: 'why', age: 18, height: 1.88 });
    // this.setState({
    //   friends: this.state.friends,
    // });

    //推荐的做法
    this.setState({
      friends: [...this.state.friends, { name: 'why', age: 18, height: 1.88 }],
    });
  }

  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    });
  }
}
