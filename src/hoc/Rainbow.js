import React from 'react';

const Rainbow = WrappedComponent => {
  const colors = ['red', 'blue', 'green', 'pink', 'yellow', 'black', 'orange'];
  const randomColor = colors[new Date().getTime() % colors.length];
  const className = randomColor + '-text';
  return props => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    );
  };
};

export default Rainbow;
