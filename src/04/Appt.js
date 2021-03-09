//父传子通信-属性验证
import React, { Component } from 'react';

import PropTypes from 'prop-types';

function Child(props) {
  const { name, age, height } = props;
  const { lists } = props;

  return (
    <div>
      <h2>{name + ' ' + age + ' ' + height}</h2>
      <ul>
        {lists.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  lists: PropTypes.array,
};

Child.defaultProps = {
  name: '王小波',
  age: 40,
  height: 1.92,
  lists: [],
};

export default class Appt extends Component {
  render() {
    return (
      <div>
        <Child name="why" age={18} height={1.88} lists={[1, 2, 3, 4]} />
        <Child />
      </div>
    );
  }
}
