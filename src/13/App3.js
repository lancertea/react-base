//Fragment:允许你将子列表分组，而无需向 DOM 添加额外节点
import React, { Fragment, PureComponent } from 'react';

export default class App3 extends PureComponent {
  constructor() {
    super();
    this.state = {
      lists: [
        { name: 'lancer', age: 12 },
        { name: 'jack', age: 18 },
        { name: 'ray', age: 20 },
      ],
    };
  }
  render() {
    return (
      <>
        <h2>当前计数: 0</h2>
        <button>+1</button>
        <button>-1</button>

        <div>
          {this.state.lists.map((item) => {
            return (
              //不加key
              // <>
              //   <div>{item.name}</div>
              //   <div>{item.age}</div>
              //   <hr />
              // </>

              //加key就能不省略
              <Fragment key={item.name}>
                <div>{item.name}</div>
                <div>{item.age}</div>
                <hr />
              </Fragment>
            );
          })}
        </div>
      </>
    );
  }
}
