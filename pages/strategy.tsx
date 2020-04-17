import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Strategy from '../src/components/Strategy';
import PlayerCount from '../src/components/PlayerCount';
import Guide from '../src/interfaces/Guide.interface';
import fetch from 'isomorphic-unfetch';
import { GetServerSideProps } from 'next';

export default ({ guides }: { guides: Guide[] }) => (
  <>
    <Head>
      <title>Strategy | Age of Empires 2 Companion App</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <div className='strategy'>
      <Navbar active='strategy' />
      <Strategy guides={guides} />
      <PlayerCount />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/guides');
  const guides: Guide[] = await response.json();

  return {
    props: { guides }, // will be passed to the page component as props
  };
};
