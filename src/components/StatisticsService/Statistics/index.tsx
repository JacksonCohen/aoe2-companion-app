import React, { useEffect, useState } from 'react';
import ProfileLookup from '../ProfileLookup';

import './_Statistics.scss';

const Statistics = () => {
  const [lookUpParams, setLookUpParams] = useState({
    username: '',
    gameType: '0',
  });

  useEffect(() => {
    if (lookUpParams.username) {
      findProfileId();
    }
  }, [lookUpParams]);

  const findProfileId = () => {
    const { username, gameType } = lookUpParams;
    fetch(
      `https://cors-anywhere.herokuapp.com/https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=${gameType}&search=${username}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data, 'profile data'));
  };

  return (
    <div className='service__statistics'>
      <ProfileLookup setLookUpParams={setLookUpParams} />
    </div>
  );
};

export default Statistics;
