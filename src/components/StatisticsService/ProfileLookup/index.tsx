import React, { useState } from 'react';

import './_ProfileLookup.scss';
interface Props {
  setLookUpParams: Function;
}

const ProfileLookup = ({ setLookUpParams }: Props) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [gameTypeInput, setGameTypeInput] = useState(0);

  const handleChange = (event: any): void => {
    if (event.target.name === 'username') {
      setUsernameInput(event.target.value);
    } else {
      setGameTypeInput(event.target.value);
    }
  };

  const handleSubmit = (): void => {
    setLookUpParams({
      username: usernameInput,
      gameType: gameTypeInput,
    });
  };

  return (
    // TODO: Refactor into reusable component
    <form action='submit'>
      <fieldset>
        <input
          type='text'
          placeholder='Enter your username'
          name='username'
          onChange={(event) => handleChange(event)}
        />
      </fieldset>

      <fieldset>
        <div>
          Select a game type
          <div>
            <input type='radio' id='unranked' name='game-type' value='0' onChange={handleChange} />
            <label htmlFor='unranked'>Unranked</label>
            <input
              type='radio'
              id='deathmatch'
              name='game-type'
              value='1'
              onChange={handleChange}
            />
            <label htmlFor='deathmatch'>Deathmatch</label>
            <input type='radio' id='tdm' name='game-type' value='2' onChange={handleChange} />
            <label htmlFor='tdm'>Team Deathmatch</label>
            <input
              type='radio'
              id='random-map'
              name='game-type'
              value='3'
              onChange={handleChange}
            />
            <label htmlFor='random-map'>Random Map</label>
            <input type='radio' id='trm' name='game-type' value='4' onChange={handleChange} />
            <label htmlFor='trm'>Team Random Map</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <input type='button' name='submit' value='Submit' onClick={handleSubmit} />
      </fieldset>
    </form>
  );
};

export default ProfileLookup;
