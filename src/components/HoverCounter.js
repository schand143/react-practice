import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
  render() {
    const { count, handler } = this.props;
    return (
      <div>
        <h1 onMouseOver={handler}>Mouse Over {count}</h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);
