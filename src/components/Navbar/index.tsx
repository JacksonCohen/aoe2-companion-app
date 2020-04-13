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
        <li>
          <Link href='/randomizer'>
            <a className={active === 'randomizer' ? 'active' : ''}>Randomizer</a>
          </Link>
        </li>
        <li>
          <Link href='/statistics'>
            <a className={active === 'statistics' ? 'active' : ''}>Statistics</a>
          </Link>
        </li>
        <li>
          <Link href='/strategy'>
            <a className={active === 'strategy' ? 'active' : ''}>Strategy</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className={active === 'about' ? 'active' : ''}> About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a className={active === 'contact' ? 'active' : ''}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
