import React from 'react';
import Link from 'next/link';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav__main'>
        <Link href='/'>
          <a>
            Age of Empires 2<br />
            Companion App
          </a>
        </Link>
      </div>

      <form action='/search'>
        <input type='text' placeholder='Enter a username' />
      </form>

      <ul>
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
      </ul>
    </div>
  );
};

export default Navbar;
