import React, { Component } from 'react';

// export default class NavBar extends Component {
//   render() {
//     //父组件传入的组件全都在this.props.children里面

//     return (
//       <div className="nav-bar">
//         <div className="item left">{this.props.children[0]}</div>
//         <div className="item center">{this.props.children[1]}</div>
//         <div className="item right">{this.props.children[2]}</div>
//       </div>
//     );
//   }
// }

export default class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;

    return (
      <div className="nav-bar">
        <div className="item left">{leftSlot}</div>
        <div className="item center">{centerSlot}</div>
        <div className="item right">{rightSlot}</div>
      </div>
    );
  }
}
