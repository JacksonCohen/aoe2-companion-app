import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import PlayerCount from '../src/components/PlayerCount';
import '../sass/style.scss';

export default () => (
  <>
    <Head>
      <title>About | Age of Empires 2 Companion App</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <>
      <Navbar active='about' />
      <PlayerCount />
    </>
  </>
);
