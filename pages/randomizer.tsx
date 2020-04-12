import Navbar from '../src/components/Navbar';
import Randomizer from '../src/components/Randomizer';

export default () => (
  <div className='randomizer'>
    <Navbar active='randomizer' />
    <Randomizer />
  </div>
);
