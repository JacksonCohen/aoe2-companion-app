import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import PlayerCount from '../src/components/PlayerCount';

export default () => (
  <>
    <Head>
      <title>Statistics | Age of Empires 2 Companion App</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <div className='statistics'>
      <Navbar active='statistics' />
      <PlayerCount />
    </div>
  </>
);
