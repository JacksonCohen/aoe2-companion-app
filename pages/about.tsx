import Navbar from '../src/components/Navbar';
import PlayerCount from '../src/components/PlayerCount';

export default () => (
  <div className='about'>
    <Navbar active='about' />
    <PlayerCount />
  </div>
);
