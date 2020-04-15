import Navbar from '../src/components/Navbar';
import Strategy from '../src/components/Strategy';
import PlayerCount from '../src/components/PlayerCount';

export default () => (
  <div className='strategy'>
    <Navbar active='strategy' />
    <Strategy />
    <PlayerCount />
  </div>
);
