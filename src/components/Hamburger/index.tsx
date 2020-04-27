import React from 'react';

import './_Hamburger.scss';

interface Props {
  isActive: boolean;
  handleClick: any;
}

const Hamburger = ({ isActive, handleClick }: Props) => {
  return (
    <button
      className={`hamburger hamburger--spring${isActive ? ' is-active' : ''}`}
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
