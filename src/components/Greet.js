import React from 'react';

const Greet = (props) => {
  const { name } = props;
  return <h1>Hello, {name} </h1>;
};

export default Greet;
