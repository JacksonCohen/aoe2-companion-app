import React, { Fragment } from 'react';
import Header from '../Header';
import Randomizer from '../Randomizer';

import '../../../sass/style.scss';
import './_App.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Randomizer />
    </Fragment>
  );
};

export default App;
