import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import BuildOrder from '../src/components/BuildOrderService/BuildOrder';
import PlayerCount from '../src/components/PlayerCount';
import BuildOrderInterface from '../src/interfaces/BuildOrder.interface';
import fetch from 'isomorphic-unfetch';
import { GetServerSideProps } from 'next';
import '../sass/style.scss';

export default ({ buildOrders }: { buildOrders: BuildOrderInterface[] }) => (
  <>
    <Head>
      <title>Build Order Creator | Age of Empires 2 Companion App</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <>
      <Navbar active='build-order' />
      <BuildOrder buildOrders={buildOrders} />
      <PlayerCount />
    </>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev
    ? 'http://localhost:3000/api/build-orders'
    : 'https://jacksoncohen.dev/api/build-orders';

  const response = await fetch(server);
  const buildOrders: BuildOrderInterface[] = await response.json();

  return {
    props: { buildOrders }, // will be passed to the page component as props
  };
};
