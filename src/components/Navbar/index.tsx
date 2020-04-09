import React from 'react';
import Link from 'next/link';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav__main'>
        <Link href='/'>
          <a className='logo'>
            <img src='../../../static/images/logo.png' alt='Age of Empires 2 Companion App' />
          </a>
        </Link>
      </div>

      {/* <form action='/search'>
        <input type='text' placeholder='Enter a username' />
      </form> */}

      <ul>
        <li>
          <Link href='/randomizer'>
            <a>Randomizer</a>
          </Link>
        </li>
        <li>
          <Link href='/stats'>
            <a>Statistics</a>
          </Link>
        </li>
        <li>
          <Link href='/strategy'>
            <a>Strategy</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
