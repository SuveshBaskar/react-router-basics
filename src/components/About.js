import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = props => {
  return (
    <div className="container">
      <h1 className="center">About</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        nemo aperiam saepe veniam quasi numquam doloribus labore iusto magnam
        dolore fugiat molestias neque autem dolorum molestiae ullam dignissimos,
        itaque esse?
      </p>
    </div>
  );
};

export default Rainbow(About);
