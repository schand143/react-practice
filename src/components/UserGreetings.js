import React, { Component } from 'react';

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome Chand</h1>;
    // } else {
    //   return <h1>Welcome guest</h1>;
    // }

    return this.state.isLoggedIn ? (
      <div>
        <h1>Hello Chand</h1>
      </div>
    ) : (
      <div>
        <h1>Welcome guest</h1>
      </div>
    );
  }
}

export default UserGreetings;
