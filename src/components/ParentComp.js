import React, { Component } from 'react';
// import PureComp from './PureComp';
// import RegCompo from './RegCompo';
import MemoComp from './MemoComp';
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Chand',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Chand',
      });
    }, 2000);
  }

  render() {
    console.log('Parent Compo');
    return (
      <div>
        Parent Component
        <MemoComp name={this.props.name} />
        {/* <PureComp name={this.state.name} />
        <RegCompo name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
