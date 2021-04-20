import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Chand',
    };
    console.log('Lifecycle A Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle A getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle A ComponentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Shaikh',
    });
  };

  render() {
    console.log('Lifecycle A render');
    return (
      <div>
        <div>Lifecycle A render</div>
        <button onClick={this.changeState}>Submit</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
