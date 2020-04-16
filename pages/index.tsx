import Head from 'next/head';
import App from '../src/components/App';

export default () => (
  <>
    <Head>
      <title>Age of Empires 2 Companion App</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <div className='app'>
      <App />
    </div>
  </>
);
