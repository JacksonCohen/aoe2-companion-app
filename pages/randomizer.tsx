import Navbar from '../src/components/Navbar';
import Randomizer from '../src/components/RandomizerService/Randomizer';
import PlayerCount from '../src/components/PlayerCount';

export default () => (
  <div className='randomizer'>
    <Navbar active='randomizer' />
    <Randomizer />
    <PlayerCount />
  </div>
);
