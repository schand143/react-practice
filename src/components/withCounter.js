import React from 'react';

const withCounter = (WrapComponent, incrementNumber) => {
  class withCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleClick = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrapComponent
          count={this.state.count}
          handler={this.handleClick}
          {...this.props}
        />
      );
    }
  }
  return withCounter;
};

export default withCounter;
