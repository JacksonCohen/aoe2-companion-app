import React from 'react';

import './_Burger.scss';

const Burger = ({ handleClick }: any) => {
  return (
    <button className='burger' onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default Burger;
