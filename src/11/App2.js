import React, { PureComponent } from 'react';

export default class App2 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fruits: 'orange',
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="fruits">
            {/* value作为默认值 */}
            <select id="fruits" value={this.state.fruits} onChange={(e) => this.handleFruitsChange(e)}>
              <option value="apple">苹果</option>
              <option value="orange">橘子</option>
              <option value="banana">香蕉</option>
            </select>
          </label>
          <div>
            <input type="submit" value="提交" />
          </div>
        </form>
      </div>
    );
  }

  handleFruitsChange(event) {
    this.setState({
      fruits: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.fruits);
    event.preventDefault();
  }
}
