import React from 'react';

const Strategy = () => {
  // import from db? api? data file?
  return <div className='servce_strategy'>{/* map over data and create Cards */}</div>;
};

Strategy.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/resources');
  const resources = await response.json();

  return { resources };
};

export default Strategy;
