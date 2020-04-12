import React from 'react';
import Navbar from '../Navbar';

const Header = ({ active }: { active?: string }) => {
  return (
    <div>
      <Navbar active={active!} />
    </div>
  );
};

export default Header;
