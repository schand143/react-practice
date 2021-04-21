import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
  render() {
    const { count, handler } = this.props;
    return (
      <div>
        <button onClick={handler}>
          {' '}
          {this.props.name} Count {count}{' '}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 7535646);
