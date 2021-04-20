import React, { Component } from 'react';

class RegCompo extends Component {
  render() {
    console.log('Reg Compo');
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegCompo;
