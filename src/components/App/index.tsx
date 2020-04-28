import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import PlayerCount from '../PlayerCount';
import { useRouter } from 'next/router';

import './_App.scss';

const App = () => {
  const Router = useRouter();
  useEffect(() => {
    Router.push('/randomizer', undefined, { shallow: true });
  }, []);

  return (
    <>
      <Navbar />
      <PlayerCount />
    </>
  );
};

export default App;
