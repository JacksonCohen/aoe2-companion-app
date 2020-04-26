import React, { useEffect, useState } from 'react';

import './_PlayerCount.scss';

interface PlayerTotals {
  steam: number;
  multiplayer: number;
  looking: number;
  in_game: number;
  multiplayer_1h: number;
  multiplayer_24h: number;
}

const PlayerCount = () => {
  const [playerCount, setPlayerCount] = useState<any>({});

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://aoe2.net/api/stats/players?game=aoe2de')
      .then((response) => response.json())
      .then(({ player_stats: data }) => {
        let players: PlayerTotals = data[data.length - 1].num_players;
        setPlayerCount(players);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='player-count'>
      {!!Object.keys(playerCount).length ? (
        <>
          <div>Multiplayer: {playerCount.multiplayer} players</div>
          <div className='player-count__hover'>
            <span>Multiplayer 1h: {playerCount.multiplayer_1h} players</span>
            <span>Multiplayer 24h: {playerCount.multiplayer_24h} players</span>
            <span>Steam: {playerCount.steam} players</span>
            <span>In game: {playerCount.in_game} players</span>
            <span>Looking for game: {playerCount.looking} players</span>
          </div>
        </>
      ) : (
        <span className='loading'>
          <img src='/static/images/loading-swords.gif' />
        </span>
      )}
    </div>
  );
};

export default PlayerCount;
