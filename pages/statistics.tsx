import Navbar from '../src/components/Navbar';
import PlayerCount from '../src/components/PlayerCount';

export default () => (
  <div className='statistics'>
    <Navbar active='statistics' />
    <PlayerCount />
  </div>
);
