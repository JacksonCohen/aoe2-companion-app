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
    let controller = new AbortController();
    let signal = controller.signal;

    if (
      !JSON.parse(sessionStorage.getItem('players')!) || // if the request hasn't been cached into session storage yet
      Date.now() - JSON.parse(sessionStorage.getItem('lastRequest')!) > 300000 // or if its been more than 5 minutes since the last api call
    ) {
      fetch('https://cors-anywhere.herokuapp.com/https://aoe2.net/api/stats/players?game=aoe2de', {
        signal, // attach signal to fetch request for cleanup
      })
        .then((response) => response.json())
        .then(({ player_stats: data }) => {
          let players: PlayerTotals = data[data.length - 1].num_players;
          setPlayerCount(players);

          sessionStorage.setItem('players', JSON.stringify(players));
          sessionStorage.setItem('lastRequest', JSON.stringify(Date.now()));
        })
        .catch((err) => {
          if (controller.signal.aborted) {
            console.error(`${err} The request was too slow.`);
          } else {
            console.error(`${err} There was an error fetching data.`);
          }
        });
    } else {
      setPlayerCount(JSON.parse(sessionStorage.getItem('players')!));
    }

    return () => controller.abort();
  }, []);

  return (
    <div className='player-count'>
      {Object.keys(playerCount).length > 1 ? (
        <>
          <div className='player-count__stats'>
            Multiplayer: {playerCount.multiplayer} players
            <div className='player-count__stats-hover'>
              <span>Multiplayer 1h: {playerCount.multiplayer_1h} players</span>
              <span>Multiplayer 24h: {playerCount.multiplayer_24h} players</span>
              <span>Steam: {playerCount.steam} players</span>
              <span>In game: {playerCount.in_game} players</span>
              <span>Looking for game: {playerCount.looking} players</span>
            </div>
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
