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
    fetch('https://cors-anywhere.herokuapp.com/https://aoe2.net/api/stats/players?game=aoe2de ')
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
        <span>{playerCount.steam}</span>
      ) : (
        <span className='loading'>
          <img src='/static/images/loading-swords.gif' />
        </span>
      )}
    </div>
  );
};

export default PlayerCount;
