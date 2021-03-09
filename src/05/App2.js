//slot
import React, { Component } from 'react';

import NavBar from './NavBar';
import './style.css';

// export default class App2 extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar>
//           <div>返回</div>
//           <div>购物街</div>
//           <div>更多</div>
//         </NavBar>
//       </div>
//     );
//   }
// }

export default class App extends Component {
  render() {
    const navLeft = <div>返回</div>;
    const navCenter = <div>购物街</div>;
    const navRight = <div>更多</div>;

    return (
      <div>
        <NavBar leftSlot={navLeft} centerSlot={navCenter} rightSlot={navRight} />
      </div>
    );
  }
}
