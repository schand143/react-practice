import React from 'react';

function FunctionClick() {
  const clickHandler = () => console.log('hi');

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
