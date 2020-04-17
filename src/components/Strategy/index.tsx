import React from 'react';

const Strategy = (props: any) => {
  console.log(props, 'props');
  // import from db? api? data file?
  return <div className='servce__strategy'>{/* map over data and create Cards */}</div>;
};

// Strategy.getServerSideProps = async () => {
// };

export default Strategy;
