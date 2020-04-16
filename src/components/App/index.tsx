import React from 'react';
import Navbar from '../Navbar';
import PlayerCount from '../PlayerCount';

import '../../../sass/style.scss';
import './_App.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <PlayerCount />
    </>
  );
};

export default App;
