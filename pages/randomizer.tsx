import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Randomizer from '../src/components/RandomizerService/Randomizer';
import PlayerCount from '../src/components/PlayerCount';

export default () => (
  <>
    <Head>
      <title>Randomizer | Age of Empires 2 Companion App</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <>
      <Navbar active='randomizer' />
      <Randomizer />
      <PlayerCount />
    </>
  </>
);
