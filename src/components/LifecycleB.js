import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Chand',
    };
    console.log('Lifecycle B Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle B getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle B ComponentDidMount');
  }
  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  }

  render() {
    console.log('Lifecycle B render');
    return <div>Lifecycle B render</div>;
  }
}

export default LifecycleB;
