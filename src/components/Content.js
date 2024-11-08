import React from 'react';

const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {/*Displays current real time clock */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;