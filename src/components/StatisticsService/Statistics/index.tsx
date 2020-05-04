import React, { useEffect, useState } from 'react';
import ProfileLookup from '../ProfileLookup';
import PieChart from '../PieChart';
import LineGraph from '../LineGraph';

import './_Statistics.scss';

interface RatingObject {
  rating: number;
  num_wins: number;
  num_losses: number;
  streak: number;
  drops: number;
  timestamp: number;
}

const Statistics = () => {
  const [lookUpParams, setLookUpParams] = useState({
    username: '',
    gameType: '0',
  });
  const [profileData, setProfileData] = useState<any>({
    clan: '123B',
    country: null,
    drops: 1,
    games: 15,
    highest_rating: 1100,
    highest_streak: 4,
    icon: null,
    last_match: 1588546147,
    last_match_time: 1588546147,
    losses: 7,
    lowest_streak: -2,
    name: 'Breadzilla',
    previous_rating: 1079,
    profile_id: 1981760,
    rank: 89501,
    rating: 1062,
    steam_id: null,
    streak: 1,
    wins: 8,
  });
  const [ratingHistory, setRatingHistory] = useState<any>({});

  useEffect(() => {
    if (lookUpParams.username) {
      findProfileId();
    }
  }, [lookUpParams]);

  const findProfileId = () => {
    const { username, gameType } = lookUpParams;
    fetch(
      `https://cors-anywhere.herokuapp.com/https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=${gameType}&search=${username}`,
    )
      .then((res) => res.json())
      .then(({ leaderboard: players }) => {
        setProfileData(players[0]);
        console.log(players[0], 'profile data');
      })
      .catch((err) => console.error(`Error fetching profile data: ${err}`))
      .then(() => {
        fetch(
          `https://aoe2.net/api/player/ratinghistory?game=aoe2de&leaderboard_id=${gameType}&profile_id=${profileData.profile_id}&count=100`,
        )
          .then((res) => res.json())
          .then((history) => setRatingHistory(history))
          .catch((err) => console.error(`Error fetching rating history: ${err}`));
      });
  };

  return (
    <div className='service__statistics'>
      <ProfileLookup setLookUpParams={setLookUpParams} />
      {!!Object.keys(profileData).length && (
        <PieChart
          data={{
            labels: ['Wins', 'Losses'],
            data: [profileData.wins, profileData.losses],
            backgroundColor: ['#d19e4ed6', '#533810d6'],
            hoverBackgroundColor: ['#d19e4e', '#533810'],
          }}
        /> // also accepts optional hover background color array
      )}

      {!!Object.keys(ratingHistory).length && (
        <LineGraph
          data={{
            label: 'Rating History',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ratingHistory.map((ratingObj: RatingObject) => ratingObj.rating),
          }}
        />
      )}
    </div>
  );
};

export default Statistics;
