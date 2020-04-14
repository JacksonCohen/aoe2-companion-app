import React from 'react';

import './_Hamburger.scss';

const Hamburger = ({ isActive, handleClick }: any) => {
  return (
    <button
      className={`hamburger hamburger--elastic${isActive ? ' is-active' : ''}`}
      type='button'
      aria-label='Menu'
      aria-controls='navigation'
      onClick={handleClick}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default Hamburger;
