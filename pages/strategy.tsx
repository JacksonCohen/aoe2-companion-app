import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Strategy from '../src/components/Strategy';
import PlayerCount from '../src/components/PlayerCount';
import fetch from 'isomorphic-unfetch';
import { GetServerSideProps } from 'next';
import Resource from '../src/interfaces/Resource.interface';

export default ({ resources }: { resources: Resource[] }) => (
  <>
    <Head>
      <title>Strategy | Age of Empires 2 Companion App</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <div className='strategy'>
      <Navbar active='strategy' />
      <Strategy resources={resources} />
      <PlayerCount />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/resources');
  const resources = await response.json();

  return {
    props: { resources }, // will be passed to the page component as props
  };
};
