import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from '../Hamburger';

import './_Navbar.scss';

const Navbar = ({ active }: { active?: string }) => {
  const [open, setOpen] = useState(true);

  const toggleHamburger = (): void => {
    setOpen(!open);
  };

  return (
    <nav className='nav'>
      <Hamburger isActive={open} handleClick={toggleHamburger} />
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

      {open ? (
        <div className='nav__items'>
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
      ) : null}
    </nav>
  );
};

export default Navbar;
