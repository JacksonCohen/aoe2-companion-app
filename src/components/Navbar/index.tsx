import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from '../Hamburger';

import './_Navbar.scss';

const Navbar = ({ active }: { active?: string }) => {
  const [open, setOpen] = useState(false);

  const toggleHamburger = (): void => {
    setOpen(!open);
  };

  return (
    <nav className='nav'>
      <div className='nav__main'>
        <Link href='/'>
          <img src='../../../static/images/logo.png' alt='Age of Empires 2 Companion App' />
        </Link>

        <div className='nav__hamburger'>
          <Hamburger isActive={open} handleClick={toggleHamburger} />
        </div>
      </div>

      {/* <form action='/search'>
        <input type='text' placeholder='Enter a username' />
      </form> */}

      <div className={`nav__items${open ? '' : ' hidden'}`}>
        <Link href='/randomizer'>
          <a className={active === 'randomizer' ? 'active' : ''}>Randomizer</a>
        </Link>

        <Link href='/statistics'>
          <a className={active === 'statistics' ? 'active' : ''}>Statistics</a>
        </Link>

        <Link href='/strategy'>
          <a className={active === 'strategy' ? 'active' : ''}>Strategy</a>
        </Link>

        <Link href='/about'>
          <a className={active === 'about' ? 'active' : ''}> About</a>
        </Link>

        <Link href='/contact'>
          <a className={active === 'contact' ? 'active' : ''}>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
