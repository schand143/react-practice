import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  incrementFive = () => {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>
          Count - {this.state.count}
        </button>

        <h1>HI, {this.props.name}</h1>

        <button onClick={this.incrementFive}>Count - {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
