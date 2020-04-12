import React from 'react';
import Link from 'next/link';

import './Navbar.scss';

const Navbar = ({ active }: { active?: string }) => {
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
        <li className={active === 'randomizer' ? 'active' : ''}>
          <Link href='/randomizer'>
            <a>Randomizer</a>
          </Link>
        </li>
        <li className={active === 'statistics' ? 'active' : ''}>
          <Link href='/statistics'>
            <a>Statistics</a>
          </Link>
        </li>
        <li className={active === 'strategy' ? 'active' : ''}>
          <Link href='/strategy'>
            <a>Strategy</a>
          </Link>
        </li>
        <li className={active === 'about' ? 'active' : ''}>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li className={active === 'contact' ? 'active' : ''}>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
